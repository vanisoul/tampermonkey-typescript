// ==UserScript==
// @name         kjb-aiwei
// @version      1.0
// @description  kjb m3u8
// @author       Your Name
// @match        https://*/*
// @grant        GM_registerMenuCommand
// @require      https://cdn.jsdelivr.net/npm/hls.js@latest
// ==/UserScript==

(function () {
    'use strict';

    // Your m3u8 file URL
    const m3u8Url = convertToM3U8Url(location.href);

    // Register the menu command
    GM_registerMenuCommand("Replace Video Source", () => {
        waitForVideo();
    });

    // Wait for the video element to load
    function waitForVideo() {
        const video = document.querySelector('#oframeplayer > pjsdiv:nth-child(3) > video');
        if (video) {
            replaceVideoSource(video);
        } else {
            const player = document.querySelector('body > div.container > div.content > div.block-video > div > div.player');
            newVideoSource(player);

        }
    }

    function newVideoSource(player) {
        const newVideo = document.createElement('video');
        newVideo.controls = true;
        newVideo.style.width = '640px';
        newVideo.style.height = '360px';

        player.parentNode.appendChild(newVideo);

        const playerHolder = player.querySelector('div.player-holder');
        player.removeChild(playerHolder);

        replaceVideoSource(newVideo);
    }

    // Replace the video source and use HLS.js if needed
    function replaceVideoSource(video) {
        if (Hls.isSupported()) {
            const hls = new Hls();
            hls.loadSource(m3u8Url);
            hls.attachMedia(video);
            hls.on(Hls.Events.MANIFEST_PARSED, function () {
                video.play().catch(err => {
                    console.error("Auto-play failed:", err);
                });
            });
            console.log("HLS.js is used to play the m3u8 file.");
        } else {
            console.error("HLS is not supported in this browser.");
        }
    }

    function convertToM3U8Url(inputUrl) {
        // 匹配 ID 的正則表達式
        const idPattern = /video\/(\d+)\//;

        // 查找匹配的 ID
        const match = inputUrl.match(idPattern);
        if (!match) {
            throw new Error("Invalid URL format, unable to extract video ID.");
        }

        // 提取 ID 並生成 ID000 的 group
        const id = match[1];
        const idGroup = `${Math.floor(id / 1000) * 1000}`;

        // 組合目標 m3u8 URL
        const m3u8Url = `https://r22.jb-zxxk.cc/contents/videos/${idGroup}/${id}/index.m3u8`;
        return m3u8Url;
    }
})();
