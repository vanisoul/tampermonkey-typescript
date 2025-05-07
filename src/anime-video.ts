// ==UserScript==
// @name         Anime1.me 影片自動快轉與自動下一集
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @description  支援自訂快轉按鍵、快轉秒數、自動下一集、結束偏移秒數
// @author       vanisoul
// @match        *://anime1.me/*
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_registerMenuCommand
// ==/UserScript==

// 設定預設值
const DEFAULT_SKIP_KEY = "j";
const DEFAULT_SKIP_SECONDS = 90;
const DEFAULT_AUTO_NEXT = true;
const DEFAULT_END_OFFSET = 0;
const DEFAULT_AUTO_START = true;

// 取得/儲存設定
function getSetting<T>(key: string, defaultValue: T): T {
    const value = GM_getValue(key);
    // 類型安全處理
    if (value === undefined || value === null) return defaultValue;
    // 針對 boolean/number 做型別轉換
    if (typeof defaultValue === "boolean") return Boolean(value) as T;
    if (typeof defaultValue === "number") return Number(value) as T;
    return value as T;
}
function setSetting<T>(key: string, value: T) {
    GM_setValue(key, value);
}

// 取得 video element
function getVideo(): HTMLVideoElement | null {
    return document.querySelector("video");
}

// 快轉功能
function setupSkipKey() {
    document.addEventListener("keydown", (e) => {
        if (document.activeElement && ["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) return;
        const skipKey = getSetting("skipKey", DEFAULT_SKIP_KEY);
        const skipSeconds = getSetting("skipSeconds", DEFAULT_SKIP_SECONDS);
        if (e.key === skipKey) {
            const video = getVideo();
            if (video) {
                video.currentTime = Math.min(video.currentTime + skipSeconds, video.duration - 0.1);
            }
        }
    });
}

// 自動下一集功能
function setupAutoNext() {
    const video = getVideo();
    if (!video) return;

    let triggered = false;
    const autoNext = () => {
        if (triggered) return;
        triggered = true;
        const nextLink = findNextEpisodeLink();
        if (nextLink) {
            (nextLink as HTMLElement).click();
        }
    };

    const endOffset = getSetting("endOffset", DEFAULT_END_OFFSET);
    const autoNextEnabled = getSetting("autoNext", DEFAULT_AUTO_NEXT);

    if (!autoNextEnabled) return;

    if (endOffset > 0) {
        video.addEventListener("timeupdate", () => {
            if (!triggered && video.duration - video.currentTime <= endOffset) {
                autoNext();
            }
        });
    } else {
        video.addEventListener("ended", autoNext);
    }
}

// 尋找「下一集」連結
function findNextEpisodeLink(): HTMLAnchorElement | null {
    // 常見 anime1.me 結構：a 文字為「下一集」
    const links = Array.from(document.querySelectorAll("a"));
    return links.find(a => a.textContent && a.textContent.includes("下一集")) as HTMLAnchorElement | null;
}

// 設定 UI
function setupMenu() {
    GM_registerMenuCommand("設定快轉按鍵", () => {
        const current = getSetting("skipKey", DEFAULT_SKIP_KEY);
        const input = prompt("請輸入快轉按鍵（單一字元）", current);
        if (input && input.length === 1) setSetting("skipKey", input);
    });
    GM_registerMenuCommand("設定快轉秒數", () => {
        const current = getSetting("skipSeconds", DEFAULT_SKIP_SECONDS);
        const input = prompt("請輸入快轉秒數", String(current));
        const value = Number(input);
        if (!isNaN(value) && value > 0) setSetting("skipSeconds", value);
    });
    GM_registerMenuCommand("設定自動下一集", () => {
        const current = getSetting("autoNext", DEFAULT_AUTO_NEXT);
        const input = prompt("自動下一集？輸入 true 或 false", String(current));
        if (input === "true" || input === "false") setSetting("autoNext", input === "true");
    });
    GM_registerMenuCommand("設定結束偏移秒數", () => {
        const current = getSetting("endOffset", DEFAULT_END_OFFSET);
        const input = prompt("請輸入結束偏移秒數（0=影片結束才跳下一集）", String(current));
        const value = Number(input);
        if (!isNaN(value) && value >= 0) setSetting("endOffset", value);
    });
    GM_registerMenuCommand("設定自動開始影片", () => {
        const current = getSetting("autoStart", DEFAULT_AUTO_START);
        const input = prompt("自動開始影片？輸入 true 或 false", String(current));
        if (input === "true" || input === "false") setSetting("autoStart", input === "true");
    });
}

// 初始化
function main() {
    setupMenu();
    setupSkipKey();

    // 自動點擊 vjs-big-play-button 以啟動影片（可開關）
    const tryAutoStart = () => {
        const autoStart = getSetting("autoStart", DEFAULT_AUTO_START);
        if (!autoStart) return;
        const playBtn = document.querySelector('.vjs-big-play-button') as HTMLElement | null;
        if (playBtn && playBtn.offsetParent !== null) {
            playBtn.click();
        }
    };

    // video 可能動態載入，需監聽 DOM
    const trySetupAutoNext = () => {
        const video = getVideo();
        if (video && !video.dataset._autoNextSetup) {
            video.dataset._autoNextSetup = "1";
            setupAutoNext();
        }
        // 自動點擊開始
        tryAutoStart();
    };
    trySetupAutoNext();
    const observer = new MutationObserver(trySetupAutoNext);
    observer.observe(document.body, { childList: true, subtree: true });
}

main();