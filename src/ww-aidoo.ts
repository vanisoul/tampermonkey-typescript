// ==UserScript==
// @name         WW-Aidoo 自動影片載入
// @namespace    http://tampermonkey.net/
// @version      2.0
// @match        https://*/*
// @license MIT
// ==/UserScript==

import delay from "delay";

// 型別定義
interface VodData {
  vodPic: string;
  [key: string]: string;
}

interface BootAPI {
  getVod(params: { id: string; line: number }, callback: (vod: VodData) => void): void;
  getCover(picUrl: string, callback: (picUrl: string) => void): void;
}

// 全域變數型別聲明
declare const Boot: BootAPI;
declare function isIOS(vod: VodData, picUrl: string): boolean;
declare function initVideo(vod: VodData, picUrl: string): void;
declare function initDPlayer(vod: VodData, picUrl: string): void;

// iframe 上下文型別定義
interface IframeWindow extends Window {
  Boot: BootAPI;
  isIOS: (vod: VodData, picUrl: string) => boolean;
  initVideo: (vod: VodData, picUrl: string) => void;
  initDPlayer: (vod: VodData, picUrl: string) => void;
}

function log(msg: string, obj?: unknown) {
  if (!obj) {
    console.log(`[WW-Aidoo] ${msg}`);
    return;
  }
  console.log(`[WW-Aidoo] ${msg}:${JSON.stringify(obj)}`);
}

((): void => {
  // 只在主頁面執行
  if (window !== window.top) {
    return;
  }

  /**
   * 從 URL 提取影片 ID
   */
  function extractVideoIdFromUrl(): string | null {
    const match = window.location.pathname.match(/\/vod\/play\/(\d+)\.html/);
    return match ? match[1] : null;
  }

  /**
   * 檢查是否應該替換影片結構
   */
  function shouldReplaceVideoStructure(): boolean {
    // 檢查是否存在 videoBigBg 元素
    const videoBigBg = document.getElementById("videoBigBg");
    if (!videoBigBg) {
      log("未找到 videoBigBg 元素");
      return false;
    }

    // 檢查是否已經有 MacPlayer（避免重複處理）
    const macPlayer = document.querySelector(".MacPlayer");
    if (macPlayer) {
      log("已存在 MacPlayer，跳過處理");
      return false;
    }

    // 檢查是否存在登錄提示框（表示需要替換的狀態）
    const unLoginBox = document.querySelector(".unLoginBox");
    const canPlayVideoFirstShowBg = document.querySelector(".canPlayVideoFirstShowBg");

    log(
      `檢查結果: videoBigBg=${!!videoBigBg}, macPlayer=${!!macPlayer}, unLoginBox=${!!unLoginBox}, canPlayVideoFirstShowBg=${!!canPlayVideoFirstShowBg}`,
    );

    // 如果存在登錄提示或首次顯示背景，表示需要替換
    return unLoginBox !== null || canPlayVideoFirstShowBg !== null;
  }

  /**
   * 替換 DOM 結構為包含 MacPlayer 和 iframe 的完整結構
   */
  function replaceVideoStructure(videoId: string): HTMLIFrameElement | null {
    try {
      const videoBigBg = document.getElementById("videoBigBg");
      if (!videoBigBg || !videoBigBg.parentNode) {
        log("videoBigBg 元素或其父節點不存在");
        return null;
      }

      // 創建新的結構
      const macPlayerDiv = document.createElement("div");
      macPlayerDiv.className = "MacPlayer";
      macPlayerDiv.style.width = "100%";
      macPlayerDiv.style.height = "600px"; // 設定固定高度
      macPlayerDiv.style.minHeight = "600px"; // 最小高度

      const iframe = document.createElement("iframe");
      iframe.src = `/play/vod.html?id=${videoId}`;
      iframe.style.width = "100%";
      iframe.style.height = "600px"; // 設定固定高度
      iframe.style.minHeight = "600px"; // 最小高度
      iframe.style.border = "none";
      iframe.setAttribute("allowfullscreen", "true");

      macPlayerDiv.appendChild(iframe);

      // 替換 videoBigBg
      const parent = videoBigBg.parentNode;
      parent.replaceChild(macPlayerDiv, videoBigBg);

      log(`DOM 結構已替換，iframe src: ${iframe.src}`);
      return iframe;
    } catch (error) {
      log("DOM 結構替換失敗", error);
      return null;
    }
  }

  /**
   * 等待 iframe 載入完成
   */
  function waitForIframeLoad(iframe: HTMLIFrameElement): Promise<Window> {
    return new Promise((resolve, reject) => {
      const timeout = setTimeout(() => {
        reject(new Error("iframe 載入超時"));
      }, 10000); // 10秒超時

      iframe.onload = () => {
        clearTimeout(timeout);
        try {
          const iframeWindow = iframe.contentWindow;
          if (iframeWindow) {
            resolve(iframeWindow);
          } else {
            reject(new Error("無法存取 iframe contentWindow"));
          }
        } catch (error) {
          reject(error);
        }
      };

      iframe.onerror = () => {
        clearTimeout(timeout);
        reject(new Error("iframe 載入失敗"));
      };
    });
  }

  /**
   * 檢查 iframe 中的 Boot API 是否可用
   */
  function checkIframeBootAPI(iframeWindow: Window): boolean {
    try {
      const iframe = iframeWindow as unknown as IframeWindow;
      return (
        typeof iframe.Boot !== "undefined" &&
        typeof iframe.isIOS !== "undefined" &&
        typeof iframe.initVideo !== "undefined" &&
        typeof iframe.initDPlayer !== "undefined"
      );
    } catch (error) {
      log("檢查 iframe Boot API 時發生錯誤", error);
      return false;
    }
  }

  /**
   * 在 iframe 上下文中載入影片
   */
  function loadVideoInIframe(iframeWindow: Window, videoId: string): void {
    try {
      const iframe = iframeWindow as unknown as IframeWindow;
      const iframeBoot = iframe.Boot;
      const iframeIsIOS = iframe.isIOS;
      const iframeInitVideo = iframe.initVideo;
      const iframeInitDPlayer = iframe.initDPlayer;

      iframeBoot.getVod({ id: videoId, line: 1 }, (vod: VodData): void => {
        if (!vod || !vod.vodPic) {
          log("無效的影片資料");
          return;
        }

        iframeBoot.getCover(vod.vodPic, (picUrl: string): void => {
          try {
            if (iframeIsIOS(vod, picUrl)) {
              iframeInitVideo(vod, picUrl);
            } else {
              iframeInitDPlayer(vod, picUrl);
            }
            log(`影片載入成功，ID: ${videoId}`);
          } catch (error) {
            log("初始化影片播放器時發生錯誤", error);
          }
        });
      });
    } catch (error) {
      log("在 iframe 上下文中載入影片時發生錯誤", error);
    }
  }

  /**
   * 自動化處理函數
   */
  async function handleAutoVideoReplacement(): Promise<boolean> {
    try {
      // 1. 檢查條件
      if (!shouldReplaceVideoStructure()) {
        log("不符合替換條件");
        return true;
      }

      // 2. 提取 ID
      const videoId = extractVideoIdFromUrl();
      if (!videoId) {
        log("無法從 URL 提取影片 ID");
        return false;
      }

      log(`檢測到需要替換的結構，影片 ID: ${videoId}`);

      // 3. 替換 DOM 結構, 需要免費 video Id
      const iframe = replaceVideoStructure("42437");
      if (!iframe) {
        log("DOM 結構替換失敗");
        return false;
      }

      // 4. 等待 iframe 載入
      const iframeWindow = await waitForIframeLoad(iframe);
      log("iframe 載入完成");

      await delay(10);

      // 5. 檢查 iframe 中的 API
      if (!checkIframeBootAPI(iframeWindow)) {
        log("iframe 中的 Boot API 不可用");
        return false;
      }

      // 6. 在 iframe 上下文中載入影片
      loadVideoInIframe(iframeWindow, videoId);
      return true;
    } catch (error) {
      log("自動影片替換過程中發生錯誤", error);
      return false;
    }
  }

  /**
   * 設置定時檢查
   */
  function setupPeriodicCheck(): void {
    let isProcessing = false; // 防止重複處理

    // const checkInterval = setInterval(async () => {
    //   log("開始進行定時檢查");
    //   if (isProcessing) return;
    //   isProcessing = true;

    //   isProcessing = false;
    // }, 1000);
    // alert("定時檢查已啟動，每秒檢查一次");

    const checkInterval = setInterval(async () => {
      log("開始進行定時檢查");
      if (isProcessing) return;

      isProcessing = true;
      try {
        const result = await handleAutoVideoReplacement();
        if (result) {
          log("替換成功，停止定時檢查");
          clearInterval(checkInterval);
        }
      } finally {
        isProcessing = false;
      }
    }, 1000); // 每秒檢查一次

    log("定時檢查已啟動，每秒檢查一次");
  }

  // 啟動定時檢查
  setupPeriodicCheck();
})();
