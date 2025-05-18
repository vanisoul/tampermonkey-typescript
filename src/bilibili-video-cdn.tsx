// ==UserScript==
// @name         bilibili Video CDN
// @version      1.1.4
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
// ==/UserScript==

import React, { useEffect, useState, useRef } from "react";

import { useGmValue } from "@/composable/use-value";
import { useGmMenu } from "@/composable/use-menu";

import { appendComponentToElement } from "@/lib/react-mount-after";

const App = () => {
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

  const currIndexRef = useRef(0);

  // 控制 dialog 顯示狀態
  const [openDialog, setOpenDialog] = useState<null | "select" | "manage">(null);

  // GM Menu 只負責切換 dialog 狀態
  useGmMenu("選擇 CDN", () => setOpenDialog("select"));
  useGmMenu("管理 CDN 池", () => setOpenDialog("manage"));

  // React Dialog 元件
  const SelectCdnDialog = () => {
    // 本地 state 用於勾選
    const [checked, setChecked] = useState<string[]>(savedCDNs);

    const handleCheck = (cdn: string) => {
      setChecked((prev) =>
        prev.includes(cdn) ? prev.filter((c) => c !== cdn) : [...prev, cdn]
      );
    };

    const handleSave = () => {
      updateSavedCDNs(checked);
      alert("設置已保存");
      setOpenDialog(null);
    };

    const handleReset = () => {
      setChecked([]);
      updateSavedCDNs([]);
      alert("設置已清空");
      setOpenDialog(null);
    };

    return (
      <div style={{
        position: "absolute", top: "50%", left: "50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "white", padding: 20, border: "1px solid black",
        boxShadow: "0px 0px 10px rgba(0,0,0,0.5)", zIndex: 1000
      }}>
        <h3>選擇 CDN</h3>
        {poolCdns.map((cdn) => (
          <div key={cdn}>
            <input
              type="checkbox"
              id={cdn}
              checked={checked.includes(cdn)}
              onChange={() => handleCheck(cdn)}
            />
            <label htmlFor={cdn}>{cdn}</label>
          </div>
        ))}
        <button onClick={handleSave}>保存設置</button>
        <button onClick={handleReset}>清空設定</button>
        <button onClick={() => setOpenDialog(null)} style={{ marginLeft: 8 }}>關閉</button>
      </div>
    );
  };

  const ManageCdnDialog = () => {
    const [input, setInput] = useState("");
    const [localPool, setLocalPool] = useState<string[]>(poolCdns);

    // poolCdns 變動時同步 localPool
    React.useEffect(() => {
      setLocalPool(poolCdns);
    }, [poolCdns]);

    const handleAdd = () => {
      const val = input.trim();
      if (!val) {
        alert("請輸入 CDN host");
        return;
      }
      if (localPool.includes(val)) {
        alert("CDN 已存在");
        return;
      }
      updatePoolCdns([...localPool, val]);
      setInput("");
    };

    const handleDelete = (idx: number) => {
      const newPool = localPool.filter((_, i) => i !== idx);
      updatePoolCdns(newPool);
      // 同步移除 savedCDNs 中已被刪除的 CDN
      updateSavedCDNs(savedCDNs.filter(cdn => newPool.includes(cdn)));
    };

    return (
      <div style={{
        position: "absolute", top: "50%", left: "50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "white", padding: 20, border: "1px solid black",
        boxShadow: "0px 0px 10px rgba(0,0,0,0.5)", zIndex: 1000
      }}>
        <h3>管理 CDN 池</h3>
        <div>
          {localPool.map((cdn, idx) => (
            <div key={cdn} style={{ display: "flex", alignItems: "center", marginBottom: 4 }}>
              <span style={{ flex: 1 }}>{cdn}</span>
              <button style={{ marginLeft: 8 }} onClick={() => handleDelete(idx)}>刪除</button>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 12, display: "flex", alignItems: "center" }}>
          <input
            type="text"
            placeholder="輸入新的 CDN host"
            value={input}
            onChange={e => setInput(e.target.value)}
            style={{ flex: 1 }}
          />
          <button style={{ marginLeft: 8 }} onClick={handleAdd}>新增</button>
        </div>
        <button onClick={() => setOpenDialog(null)} style={{ marginTop: 16 }}>關閉</button>
      </div>
    );
  };

  // 每次呼叫 + 1, 但是最大值不超過 savedCDNs.length - 1
  function getCurrIndex(): number {
    const maxIndex = savedCDNs.length - 1;
    const newIndex = currIndexRef.current + 1 > maxIndex ? 0 : currIndexRef.current + 1;
    currIndexRef.current = newIndex; // 更新目前的 index
    return newIndex;
  }

  // 當 savedCDNs 改變時, 重新設定 XMLHttpRequest.prototype.open
  useEffect(() => {
    const httpRequestOriginOpen = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function () {
      const [method, url, async, user, password] = arguments;
      const isBiliBiliVideo = bilibiliVideoRegexList.some((regex) => regex.test(url));

      // 僅當是 bilibili video 且 savedCDNs 不為空時 hack
      if (isBiliBiliVideo && savedCDNs.length > 0) {
        const videoUrl = new URL(url);
        const currIndex = getCurrIndex();
        const goodUrl = savedCDNs[currIndex];
        videoUrl.host = goodUrl;
        return httpRequestOriginOpen.apply(this, [
          method,
          videoUrl.href,
          async,
          user,
          password,
        ]);
      }

      // 其他情況直接調用原本的
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

  return (
    <>
      {openDialog === "select" && <SelectCdnDialog />}
      {openDialog === "manage" && <ManageCdnDialog />}
      <div />
    </>
  );
};

const mountInterval = setInterval(() => {
  const success = appendComponentToElement(App, "body");
  if (success) {
    clearInterval(mountInterval);
  }
}, 3000);
