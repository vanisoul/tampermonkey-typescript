// ==UserScript==
// @name         bilibili Video CDN
// @version      1.1.5
// @description  change bilibili video CDN URL
// @author       Vanisoul
// @match        https://www.bilibili.com/*
// @license      MIT
// @namespace    https://greasyfork.org/users/429936
// @updateHistory    1.1.0 (2024-01-13) 改為 react 版本
// @updateHistory    1.1.1 (2024-06-26) 增加 Reset 設定, 方便關閉時不用 disable 腳本, 並增加一個自定義欄位
// @updateHistory    1.1.2 (2025-05-18) update CDN management functionality and refactor dialog implementation to React.
// @updateHistory    1.1.3 (2025-05-18) enhance CDN management by adding current index tracking and refactoring video URL handling.
// @updateHistory    1.1.4 (2025-05-18) synchronize savedCDNs removal with pool updates in handleDelete function
// @updateHistory    1.1.5 (2025-05-18) refactor code and UI.
// ==/UserScript==

import React, { useEffect, useState, useRef } from "react";

import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextField from "@mui/material/TextField";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

import { useGmValue } from "@/composable/use-value";
import { useGmMenu } from "@/composable/use-menu";

import { appendComponentToElement } from "@/lib/react-mount-after";


const App: React.FC = () => {
  const bilibiliVideoRegexList = [
    /^https:\/\/[a-z.-\d]*(bilivideo.com)/i,
    /^https:\/\/upos[a-z.-\d]*(akamaized.net)/i
  ];

  const { data: poolCdns, updateData: updatePoolCdns } = useGmValue<string[]>(
    "poolCdns",
    [
      "upos-sz-mirrorks3.bilivideo.com",
      "upos-sz-mirrorks3b.bilivideo.com",
      "upos-sz-mirrorks3c.bilivideo.com",
      "upos-sz-mirrorks32.bilivideo.com",
      "upos-sz-mirrorcos.bilivideo.com",
      "upos-sz-mirrorcosb.bilivideo.com",
      "upos-sz-mirrorbos.bilivideo.com",
      "upos-sz-mirrorhw.bilivideo.com",
      "upos-sz-mirrorhwb.bilivideo.com",
      "upos-sz-upcdnbda2.bilivideo.com",
      "upos-sz-upcdnws.bilivideo.com",
      "upos-sz-upcdnhw.bilivideo.com",
      "upos-tf-all-js.bilivideo.com",
      "cn-hk-eq-bcache-01.bilivideo.com",
      "upos-hz-mirrorakam.akamaized.net",
      "upos-sz-mirrorali.bilivideo.com",
      "upos-sz-mirroraliov.bilivideo.com",
      "upos-sz-mirror08h.bilivideo.com",
      "upos-sz-mirror08c.bilivideo.com"
    ]
  );

  const { data: savedCDNs, updateData: updateSavedCDNs } = useGmValue<string[]>(
    "selectedCDNs",
    [],
  );

  // Dialog 狀態
  const [dialog, setDialog] = useState<null | "select" | "manage">(null);

  // GM Menu
  useGmMenu("選擇 CDN", () => setDialog("select"));
  useGmMenu("管理 CDN 池", () => setDialog("manage"));

  // CDN 輪詢 index
  const currIndexRef = useRef(0);

  // 選擇 CDN Dialog 狀態
  const [checked, setChecked] = useState<string[]>([]);
  useEffect(() => {
    if (dialog === "select") setChecked(savedCDNs);
  }, [dialog, savedCDNs]);

  // 管理 CDN Dialog 狀態
  const [input, setInput] = useState("");
  const [localPool, setLocalPool] = useState<string[]>(poolCdns);
  useEffect(() => {
    setLocalPool(poolCdns);
  }, [poolCdns]);

  // Snackbar 狀態
  const [snackbar, setSnackbar] = useState<{ open: boolean, message: string, type: "success" | "error" }>({ open: false, message: "", type: "success" });
  const showSnackbar = (message: string, type: "success" | "error" = "success") => {
    setSnackbar({ open: true, message, type });
  };

  // 輪詢 CDN index
  function getNextCdnIndex(): number {
    const maxIndex = savedCDNs.length - 1;
    const next = currIndexRef.current + 1 > maxIndex ? 0 : currIndexRef.current + 1;
    currIndexRef.current = next;
    return next;
  }

  // XMLHttpRequest hack
  useEffect(() => {
    const httpRequestOriginOpen = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function () {
      const [method, url, async, user, password] = arguments;
      const isBiliBiliVideo = bilibiliVideoRegexList.some((regex) => regex.test(url));
      if (isBiliBiliVideo && savedCDNs.length > 0) {
        const videoUrl = new URL(url);
        const currIndex = getNextCdnIndex();
        videoUrl.host = savedCDNs[currIndex];
        return httpRequestOriginOpen.apply(this, [
          method,
          videoUrl.href,
          async,
          user,
          password,
        ]);
      }
      return httpRequestOriginOpen.apply(this, [
        method,
        url,
        async,
        user,
        password,
      ]);
    };
    return () => {
      XMLHttpRequest.prototype.open = httpRequestOriginOpen;
    };
  }, [savedCDNs]);

  // Dialog 事件
  // 選擇 CDN
  const handleCheck = (cdn: string) => {
    setChecked((prev) =>
      prev.includes(cdn) ? prev.filter((c) => c !== cdn) : [...prev, cdn]
    );
  };
  const handleSave = () => {
    updateSavedCDNs(checked);
    showSnackbar("設置已保存", "success");
    setDialog(null);
  };
  const handleReset = () => {
    setChecked([]);
    updateSavedCDNs([]);
    showSnackbar("設置已清空", "success");
    setDialog(null);
  };

  // 管理 CDN
  const handleAdd = () => {
    const val = input.trim();
    if (!val) {
      showSnackbar("請輸入 CDN host", "error");
      return;
    }
    if (localPool.includes(val)) {
      showSnackbar("CDN 已存在", "error");
      return;
    }
    updatePoolCdns([...localPool, val]);
    setInput("");
    showSnackbar("CDN 已新增", "success");
  };
  const handleDelete = (idx: number) => {
    const newPool = localPool.filter((_, i) => i !== idx);
    updatePoolCdns(newPool);
    updateSavedCDNs(savedCDNs.filter(cdn => newPool.includes(cdn)));
    showSnackbar("CDN 已刪除", "success");
  };

  return (
    <>
      {/* 選擇 CDN Dialog */}
      <Dialog open={dialog === "select"} onClose={() => setDialog(null)} maxWidth="xs" fullWidth>
        <DialogTitle>選擇 CDN</DialogTitle>
        <DialogContent>
          {poolCdns.map((cdn) => (
            <FormControlLabel
              key={cdn}
              control={
                <Checkbox
                  checked={checked.includes(cdn)}
                  onChange={() => handleCheck(cdn)}
                  color="primary"
                />
              }
              label={cdn}
              sx={{ display: "block", marginBottom: 1 }}
            />
          ))}
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="primary" onClick={handleSave}>保存設置</Button>
          <Button variant="outlined" color="secondary" onClick={handleReset}>清空設定</Button>
          <Button onClick={() => setDialog(null)}>關閉</Button>
        </DialogActions>
      </Dialog>
      {/* 管理 CDN Dialog */}
      <Dialog open={dialog === "manage"} onClose={() => setDialog(null)} maxWidth="xs" fullWidth>
        <DialogTitle>管理 CDN 池</DialogTitle>
        <DialogContent>
          {localPool.map((cdn, idx) => (
            <div key={cdn} style={{ display: "flex", alignItems: "center", marginBottom: 8 }}>
              <span style={{ flex: 1, wordBreak: "break-all" }}>{cdn}</span>
              <Button
                variant="outlined"
                color="error"
                size="small"
                onClick={() => handleDelete(idx)}
                sx={{ marginLeft: 1 }}
              >刪除</Button>
            </div>
          ))}
          <div style={{ marginTop: 16, display: "flex", alignItems: "center", gap: 8 }}>
            <TextField
              label="輸入新的 CDN host"
              variant="outlined"
              size="small"
              value={input}
              onChange={e => setInput(e.target.value)}
              fullWidth
            />
            <Button variant="contained" color="primary" onClick={handleAdd}>新增</Button>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDialog(null)}>關閉</Button>
        </DialogActions>
      </Dialog>
      {/* Snackbar 通知 */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={2200}
        onClose={() => setSnackbar(s => ({ ...s, open: false }))}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={() => setSnackbar(s => ({ ...s, open: false }))}
          severity={snackbar.type}
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
      <div />
    </>
  );
};

const mountInterval = setInterval(() => {
  const success = appendComponentToElement(() => <App />, "body");
  if (success) {
    clearInterval(mountInterval);
  }
}, 3000);
