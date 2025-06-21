// ==UserScript==
// @name           WW-Aidoo 自動影片載入
// @namespace      http://tampermonkey.net/
// @version        2.0
// @match          https://*/*
// @license        MIT
// ==/UserScript==

(function() {
    "use strict";
    function log(msg, obj) {
        if (!obj) {
            console.log(`[WW-Aidoo] ${msg}`);
            return;
        }
        console.log(`[WW-Aidoo] ${msg}:${JSON.stringify(obj)}`);
    }
    (() => {
        if (window !== window.top) {
            return;
        }
        function extractVideoIdFromUrl() {
            const match = window.location.pathname.match(/\/vod\/play\/(\d+)\.html/);
            return match ? match[1] : null;
        }
        function shouldReplaceVideoStructure() {
            const videoBigBg = document.getElementById("videoBigBg");
            if (!videoBigBg) {
                log("未找到 videoBigBg 元素");
                return false;
            }
            const macPlayer = document.querySelector(".MacPlayer");
            if (macPlayer) {
                log("已存在 MacPlayer，跳過處理");
                return false;
            }
            const unLoginBox = document.querySelector(".unLoginBox");
            const canPlayVideoFirstShowBg = document.querySelector(".canPlayVideoFirstShowBg");
            log(`檢查結果: videoBigBg=${!!videoBigBg}, macPlayer=${!!macPlayer}, unLoginBox=${!!unLoginBox}, canPlayVideoFirstShowBg=${!!canPlayVideoFirstShowBg}`);
            return unLoginBox !== null || canPlayVideoFirstShowBg !== null;
        }
        function replaceVideoStructure(videoId) {
            try {
                const videoBigBg = document.getElementById("videoBigBg");
                if (!videoBigBg || !videoBigBg.parentNode) {
                    log("videoBigBg 元素或其父節點不存在");
                    return null;
                }
                const macPlayerDiv = document.createElement("div");
                macPlayerDiv.className = "MacPlayer";
                macPlayerDiv.style.width = "100%";
                macPlayerDiv.style.height = "600px";
                macPlayerDiv.style.minHeight = "600px";
                const iframe = document.createElement("iframe");
                iframe.src = `/play/vod.html?id=${videoId}`;
                iframe.style.width = "100%";
                iframe.style.height = "600px";
                iframe.style.minHeight = "600px";
                iframe.style.border = "none";
                iframe.setAttribute("allowfullscreen", "true");
                macPlayerDiv.appendChild(iframe);
                const parent = videoBigBg.parentNode;
                parent.replaceChild(macPlayerDiv, videoBigBg);
                log(`DOM 結構已替換，iframe src: ${iframe.src}`);
                return iframe;
            } catch (error) {
                log("DOM 結構替換失敗", error);
                return null;
            }
        }
        function waitForIframeLoad(iframe) {
            return new Promise(((resolve, reject) => {
                const timeout = setTimeout((() => {
                    reject(new Error("iframe 載入超時"));
                }), 1e4);
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
            }));
        }
        function checkIframeBootAPI(iframeWindow) {
            try {
                const iframe = iframeWindow;
                return typeof iframe.Boot !== "undefined" && typeof iframe.isIOS !== "undefined" && typeof iframe.initVideo !== "undefined" && typeof iframe.initDPlayer !== "undefined";
            } catch (error) {
                log("檢查 iframe Boot API 時發生錯誤", error);
                return false;
            }
        }
        function loadVideoInIframe(iframeWindow, videoId) {
            try {
                const iframe = iframeWindow;
                const iframeBoot = iframe.Boot;
                const iframeIsIOS = iframe.isIOS;
                const iframeInitVideo = iframe.initVideo;
                const iframeInitDPlayer = iframe.initDPlayer;
                iframeBoot.getVod({
                    id: videoId,
                    line: 1
                }, (vod => {
                    if (!vod || !vod.vodPic) {
                        log("無效的影片資料");
                        return;
                    }
                    iframeBoot.getCover(vod.vodPic, (picUrl => {
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
                    }));
                }));
            } catch (error) {
                log("在 iframe 上下文中載入影片時發生錯誤", error);
            }
        }
        async function handleAutoVideoReplacement() {
            try {
                if (!shouldReplaceVideoStructure()) {
                    log("不符合替換條件");
                    return true;
                }
                const videoId = extractVideoIdFromUrl();
                if (!videoId) {
                    log("無法從 URL 提取影片 ID");
                    return false;
                }
                log(`檢測到需要替換的結構，影片 ID: ${videoId}`);
                const iframe = replaceVideoStructure("40957");
                if (!iframe) {
                    log("DOM 結構替換失敗");
                    return false;
                }
                const iframeWindow = await waitForIframeLoad(iframe);
                log("iframe 載入完成");
                if (!checkIframeBootAPI(iframeWindow)) {
                    log("iframe 中的 Boot API 不可用");
                    return false;
                }
                loadVideoInIframe(iframeWindow, videoId);
                return true;
            } catch (error) {
                log("自動影片替換過程中發生錯誤", error);
                return false;
            }
        }
        function setupPeriodicCheck() {
            let isProcessing = false;
            const checkInterval = setInterval((async () => {
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
            }), 1e3);
            log("定時檢查已啟動，每秒檢查一次");
        }
        setupPeriodicCheck();
    })();
})();
