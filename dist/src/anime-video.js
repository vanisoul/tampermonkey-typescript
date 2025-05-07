// ==UserScript==
// @name           Anime1.me 影片自動快轉與自動下一集
// @namespace      http://tampermonkey.net/
// @version        1.0.0
// @description    支援自訂快轉按鍵、快轉秒數、自動下一集、結束偏移秒數
// @author         vanisoul
// @match          *://anime1.me/*
// @grant          GM_getValue
// @grant          GM_setValue
// @grant          GM_registerMenuCommand
// ==/UserScript==

(function() {
    "use strict";
    const DEFAULT_SKIP_KEY = "j";
    const DEFAULT_SKIP_SECONDS = 90;
    const DEFAULT_AUTO_NEXT = true;
    const DEFAULT_END_OFFSET = 0;
    const DEFAULT_AUTO_START = true;
    function getSetting(key, defaultValue) {
        const value = GM_getValue(key);
        if (value === undefined || value === null) return defaultValue;
        if (typeof defaultValue === "boolean") return Boolean(value);
        if (typeof defaultValue === "number") return Number(value);
        return value;
    }
    function setSetting(key, value) {
        GM_setValue(key, value);
    }
    function getVideo() {
        return document.querySelector("video");
    }
    function setupSkipKey() {
        document.addEventListener("keydown", (e => {
            if (document.activeElement && [ "INPUT", "TEXTAREA" ].includes(document.activeElement.tagName)) return;
            const skipKey = getSetting("skipKey", DEFAULT_SKIP_KEY);
            const skipSeconds = getSetting("skipSeconds", DEFAULT_SKIP_SECONDS);
            if (e.key === skipKey) {
                const video = getVideo();
                if (video) {
                    video.currentTime = Math.min(video.currentTime + skipSeconds, video.duration - .1);
                }
            }
        }));
    }
    function setupAutoNext() {
        const video = getVideo();
        if (!video) return;
        let triggered = false;
        const autoNext = () => {
            if (triggered) return;
            triggered = true;
            const nextLink = findNextEpisodeLink();
            if (nextLink) {
                nextLink.click();
            }
        };
        const endOffset = getSetting("endOffset", DEFAULT_END_OFFSET);
        const autoNextEnabled = getSetting("autoNext", DEFAULT_AUTO_NEXT);
        if (!autoNextEnabled) return;
        if (endOffset > 0) {
            video.addEventListener("timeupdate", (() => {
                if (!triggered && video.duration - video.currentTime <= endOffset) {
                    autoNext();
                }
            }));
        } else {
            video.addEventListener("ended", autoNext);
        }
    }
    function findNextEpisodeLink() {
        const links = Array.from(document.querySelectorAll("a"));
        return links.find((a => a.textContent && a.textContent.includes("下一集")));
    }
    const tryAutoStart = () => {
        const autoStart = getSetting("autoStart", DEFAULT_AUTO_START);
        if (!autoStart) return;
        const playBtn = document.querySelector(".vjs-big-play-button");
        if (playBtn && playBtn.offsetParent !== null) {
            playBtn.click();
        }
    };
    function setupMenu() {
        GM_registerMenuCommand("設定快轉按鍵", (() => {
            const current = getSetting("skipKey", DEFAULT_SKIP_KEY);
            const input = prompt("請輸入快轉按鍵（單一字元）", current);
            if (input && input.length === 1) setSetting("skipKey", input);
        }));
        GM_registerMenuCommand("設定快轉秒數", (() => {
            const current = getSetting("skipSeconds", DEFAULT_SKIP_SECONDS);
            const input = prompt("請輸入快轉秒數", String(current));
            const value = Number(input);
            if (!isNaN(value) && value > 0) setSetting("skipSeconds", value);
        }));
        GM_registerMenuCommand("設定自動下一集", (() => {
            const current = getSetting("autoNext", DEFAULT_AUTO_NEXT);
            const input = prompt("自動下一集？輸入 true 或 false", String(current));
            if (input === "true" || input === "false") setSetting("autoNext", input === "true");
        }));
        GM_registerMenuCommand("設定結束偏移秒數", (() => {
            const current = getSetting("endOffset", DEFAULT_END_OFFSET);
            const input = prompt("請輸入結束偏移秒數（0=影片結束才跳下一集）", String(current));
            const value = Number(input);
            if (!isNaN(value) && value >= 0) setSetting("endOffset", value);
        }));
        GM_registerMenuCommand("設定自動開始影片", (() => {
            const current = getSetting("autoStart", DEFAULT_AUTO_START);
            const input = prompt("自動開始影片？輸入 true 或 false", String(current));
            if (input === "true" || input === "false") setSetting("autoStart", input === "true");
        }));
    }
    function main() {
        setupMenu();
        setupSkipKey();
        const trySetupAutoNext = () => {
            const video = getVideo();
            if (video && !video.dataset._autoNextSetup) {
                video.dataset._autoNextSetup = "1";
                setupAutoNext();
            }
            tryAutoStart();
        };
        trySetupAutoNext();
        const observer = new MutationObserver(trySetupAutoNext);
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }
    main();
})();
