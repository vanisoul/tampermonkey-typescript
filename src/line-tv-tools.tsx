// ==UserScript==
// @name         Line TV 增強功能
// @version      1.0.0
// @description  Line TV 廣告跳過 & 1080P 解鎖功能 & 影片跳過快捷鍵
// @author       Vanisoul
// @match        https://www.linetv.tw/*
// @license      MIT
// @namespace    https://greasyfork.org/users/429936
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_registerMenuCommand
// @grant        GM_unregisterMenuCommand
// ==/UserScript==

import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Switch,
  FormControlLabel,
  Typography,
  Box,
  Divider,
  IconButton,
  TextField,
  InputAdornment
} from "@mui/material";
import ScopedCssBaseline from '@mui/material/ScopedCssBaseline';

import { appendComponentToElement } from "@/lib/react-mount-after";
import { useGmValue } from "@/composable/use-value";
import { useGmMenu } from "@/composable/use-menu";

import './css/tailwind.css';

const App = () => {
  const [showDialog, setShowDialog] = useState(false);

  // 狀態管理
  const { data: adSkipEnabled, updateData: setAdSkipEnabled } = useGmValue("lineTvAdSkipEnabled", true);
  const { data: qualityUnlockEnabled, updateData: setQualityUnlockEnabled } = useGmValue("lineTvQualityUnlockEnabled", true);
  const { data: videoSkipEnabled, updateData: setVideoSkipEnabled } = useGmValue("lineTvVideoSkipEnabled", true);
  const { data: skipHotkey, updateData: setSkipHotkey } = useGmValue("lineTvSkipHotkey", "j");
  const { data: skipSeconds, updateData: setSkipSeconds } = useGmValue("lineTvSkipSeconds", 90);

  // Tampermonkey 選單整合
  useGmMenu("Line TV Tools 設定", () => setShowDialog(true));

  // 廣告跳過功能
  const removeAdElements = () => {
    // 獲取所有 class 為 player_ima-ad-container 的元素
    const adContainers = document.getElementsByClassName(
      "player_ima-ad-container",
    ) as HTMLCollectionOf<HTMLElement>;
    while (adContainers.length > 0) {
      adContainers[0].parentNode?.removeChild(adContainers[0]);
    }

    // 獲取所有 class 為 vjs-overlay-pause-ad-pc 的元素
    const overlayAds = document.getElementsByClassName(
      "vjs-overlay-pause-ad-pc",
    ) as HTMLCollectionOf<HTMLElement>;
    while (overlayAds.length > 0) {
      overlayAds[0].parentNode?.removeChild(overlayAds[0]);
    }
  };

  // 1080P 解鎖功能
  const removeQualityOverlay = () => {
    // 查找包含所有指定 class 的元素
    const qualityOverlays = document.querySelectorAll(
      '.vjs-overlay.vjs-overlay-top-left.vjs-overlay-quality-cover.absolute.w-full.h-full.pin.bg-linetv-background.bg-opacity-70.text-linetv-high-emphasis.vjs-overlay-no-background'
    ) as NodeListOf<HTMLElement>;

    qualityOverlays.forEach(overlay => {
      overlay.parentNode?.removeChild(overlay);
    });

    // 備用方案：查找包含部分關鍵 class 的元素
    const fallbackOverlays = document.querySelectorAll(
      '.vjs-overlay-quality-cover'
    ) as NodeListOf<HTMLElement>;

    fallbackOverlays.forEach(overlay => {
      // 檢查是否包含其他相關 class
      if (overlay.classList.contains('vjs-overlay-top-left') &&
        overlay.classList.contains('bg-linetv-background')) {
        overlay.parentNode?.removeChild(overlay);
      }
    });
  };

  // 廣告跳過監控 - 持續監控
  useEffect(() => {
    if (!adSkipEnabled) return;

    const interval = setInterval(removeAdElements, 1000);
    return () => clearInterval(interval);
  }, [adSkipEnabled]);

  // 1080P 解鎖監控 - 條件監控
  useEffect(() => {
    if (!qualityUnlockEnabled) return;

    const interval = setInterval(removeQualityOverlay, 1000);
    return () => clearInterval(interval);
  }, [qualityUnlockEnabled]);

  // 影片跳過功能
  const skipVideo = () => {
    const video = document.getElementById('player_html5_api') as HTMLVideoElement;
    if (video && !video.paused) {
      video.currentTime += skipSeconds;

      // 顯示跳過提示
      showSkipNotification();
    }
  };

  // 顯示跳過提示
  const showSkipNotification = () => {
    // 創建提示元素
    const notification = document.createElement('div');
    notification.textContent = `⏭️ 跳過 ${skipSeconds} 秒`;
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: rgba(0, 0, 0, 0.8);
      color: white;
      padding: 12px 20px;
      border-radius: 8px;
      font-size: 14px;
      font-weight: 500;
      z-index: 10000;
      transition: opacity 0.3s ease;
    `;

    document.body.appendChild(notification);

    // 3秒後移除提示
    setTimeout(() => {
      notification.style.opacity = '0';
      setTimeout(() => {
        document.body.removeChild(notification);
      }, 300);
    }, 3000);
  };

  // 鍵盤事件監聽
  useEffect(() => {
    if (!videoSkipEnabled) return;

    const handleKeyPress = (event: KeyboardEvent) => {
      // 檢查是否在輸入框中
      const target = event.target as HTMLElement;
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable) {
        return;
      }

      // 檢查按鍵是否匹配
      if (event.key.toLowerCase() === skipHotkey.toLowerCase()) {
        event.preventDefault();
        skipVideo();
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [videoSkipEnabled, skipHotkey, skipSeconds]);

  const handleCloseDialog = () => {
    setShowDialog(false);
  };

  return (
    <ScopedCssBaseline>
      <Dialog
        className="tailwind"
        open={showDialog}
        onClose={handleCloseDialog}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          className: "m-4 max-w-md w-full rounded-xl shadow-2xl border border-gray-100",
        }}
        aria-labelledby="line-tv-settings-title"
      >
        <DialogTitle
          id="line-tv-settings-title"
          className="px-6 py-4 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-indigo-50 relative"
        >
          <Typography
            variant="h6"
            component="h2"
            className="text-xl font-semibold text-gray-800 pr-8"
          >
            Line TV 增強功能設定
          </Typography>
          <IconButton
            aria-label="關閉對話框"
            onClick={handleCloseDialog}
            className="absolute right-2 top-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-colors duration-200"
            size="small"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </IconButton>
        </DialogTitle>

        <DialogContent className="p-6 bg-white">
          <Box className="space-y-6">
            {/* 廣告跳過功能 */}
            <Box>
              <FormControlLabel
                control={
                  <Switch
                    checked={adSkipEnabled}
                    onChange={(e) => setAdSkipEnabled(e.target.checked)}
                    color="primary"
                  />
                }
                label={
                  <Box>
                    <Typography variant="subtitle1" className="font-medium text-gray-800">
                      廣告跳過
                    </Typography>
                    <Typography variant="body2" className="text-gray-600 mt-1">
                      自動移除播放器中的廣告容器和暫停廣告
                    </Typography>
                  </Box>
                }
                className="items-start"
              />
            </Box>

            <Divider className="my-4" />

            {/* 1080P 解鎖功能 */}
            <Box>
              <FormControlLabel
                control={
                  <Switch
                    checked={qualityUnlockEnabled}
                    onChange={(e) => setQualityUnlockEnabled(e.target.checked)}
                    color="primary"
                  />
                }
                label={
                  <Box>
                    <Typography variant="subtitle1" className="font-medium text-gray-800">
                      1080P 解鎖
                    </Typography>
                    <Typography variant="body2" className="text-gray-600 mt-1">
                      移除品質限制覆蓋層，解鎖高畫質播放
                    </Typography>
                  </Box>
                }
                className="items-start"
              />
            </Box>

            <Divider className="my-4" />

            {/* 影片跳過功能 */}
            <Box>
              <FormControlLabel
                control={
                  <Switch
                    checked={videoSkipEnabled}
                    onChange={(e) => setVideoSkipEnabled(e.target.checked)}
                    color="primary"
                  />
                }
                label={
                  <Box>
                    <Typography variant="subtitle1" className="font-medium text-gray-800">
                      一鍵跳過影片
                    </Typography>
                    <Typography variant="body2" className="text-gray-600 mt-1">
                      使用快捷鍵快速跳過指定秒數
                    </Typography>
                  </Box>
                }
                className="items-start"
              />

              {videoSkipEnabled && (
                <Box className="mt-4 ml-12">
                  <Box className="flex gap-4 items-start">
                    <TextField
                      label="快捷鍵"
                      value={skipHotkey}
                      onChange={(e) => setSkipHotkey(e.target.value.toLowerCase())}
                      size="small"
                      sx={{ width: 120 }}
                      inputProps={{
                        maxLength: 1,
                        style: { textTransform: 'uppercase', textAlign: 'center' }
                      }}
                      helperText="單個字母鍵"
                    />

                    <TextField
                      label="跳過秒數"
                      type="number"
                      value={skipSeconds}
                      onChange={(e) => setSkipSeconds(Math.max(1, parseInt(e.target.value) || 1))}
                      size="small"
                      sx={{ width: 140 }}
                      InputProps={{
                        endAdornment: <InputAdornment position="end">秒</InputAdornment>,
                      }}
                      inputProps={{
                        min: 1,
                        max: 300
                      }}
                      helperText="1-300秒"
                    />
                  </Box>
                </Box>
              )}
            </Box>

            <Box className="mt-6 p-4 bg-blue-50 rounded-lg">
              <Typography variant="body2" className="text-blue-800">
                💡 提示：功能開關會自動保存，下次訪問時會記住您的設定
              </Typography>
              {videoSkipEnabled && (
                <Typography variant="body2" className="text-blue-800 mt-2">
                  🎮 按 <strong>{skipHotkey.toUpperCase()}</strong> 鍵可跳過 <strong>{skipSeconds}</strong> 秒影片
                </Typography>
              )}
            </Box>
          </Box>
        </DialogContent>

        <DialogActions className="px-6 py-4 border-t border-gray-100 bg-gray-50 justify-end">
          <Button
            onClick={handleCloseDialog}
            variant="contained"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-200"
          >
            完成
          </Button>
        </DialogActions>
      </Dialog>
    </ScopedCssBaseline>
  );
};

// 掛載 React 組件
const mountInterval = setInterval(() => {
  const success = appendComponentToElement(App, 'body');
  if (success) {
    clearInterval(mountInterval);
  }
}, 3000);
