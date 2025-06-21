// ==UserScript==
// @name         kjb-aiwei
// @version      1.0
// @description  kjb m3u8
// @author       vanisoul
// @match        https://*/*
// @grant        GM_registerMenuCommand
// @require      https://cdn.jsdelivr.net/npm/hls.js@latest
// ==/UserScript==

import type HlsType from 'hls.js';

// 聲明全域 Hls 變數（由 @require 載入）
declare global {
    const Hls: typeof import('hls.js').default;
}

(function (): void {
    'use strict';

    // Your m3u8 file URL
    const m3u8Url: string = convertToM3U8Url(location.href);

    // Register the menu command
    GM_registerMenuCommand("Replace Video Source", (): void => {
        waitForVideo();
    });

    // Wait for the video element to load
    function waitForVideo(): void {
        const video: HTMLVideoElement | null = document.querySelector('#oframeplayer > pjsdiv:nth-child(3) > video');
        if (video) {
            replaceVideoSource(video);
        } else {
            const player: HTMLElement | null = document.querySelector('body > div.container > div.content > div.block-video > div > div.player');
            if (player) {
                newVideoSource(player);
            }
        }
    }

    function newVideoSource(player: HTMLElement): void {
        const newVideo: HTMLVideoElement = document.createElement('video');
        newVideo.controls = true;
        newVideo.style.width = '640px';
        newVideo.style.height = '360px';

        if (player.parentNode) {
            player.parentNode.appendChild(newVideo);
        }

        const playerHolder: HTMLElement | null = player.querySelector('div.player-holder');
        if (playerHolder) {
            player.removeChild(playerHolder);
        }

        replaceVideoSource(newVideo);
    }

    // Replace the video source and use HLS.js if needed
    function replaceVideoSource(video: HTMLVideoElement): void {
        if (Hls.isSupported()) {
            const hls: HlsType = new Hls();
            hls.loadSource(m3u8Url);
            hls.attachMedia(video);
            hls.on(Hls.Events.MANIFEST_PARSED, function (): void {
                video.play().catch((err: Error) => {
                    console.error("Auto-play failed:", err);
                });
            });
            console.log("HLS.js is used to play the m3u8 file.");
        } else {
            console.error("HLS is not supported in this browser.");
        }
    }

    function convertToM3U8Url(inputUrl: string): string {
        // 匹配 ID 的正則表達式
        const idPattern: RegExp = /video\/(\d+)\//;

        // 查找匹配的 ID
        const match: RegExpMatchArray | null = inputUrl.match(idPattern);
        if (!match) {
            throw new Error("Invalid URL format, unable to extract video ID.");
        }

        // 提取 ID 並生成 ID000 的 group
        const id: string = match[1];
        const idGroup: string = `${Math.floor(parseInt(id) / 1000) * 1000}`;

        // 組合目標 m3u8 URL
        const m3u8Url: string = `https://r22.jz-krno.cc/contents/videos/${idGroup}/${id}/index.m3u8`;
        return m3u8Url;
    }
})();
