// ==UserScript==
// @name           kjb-aiwei
// @version        1.0
// @description    kjb m3u8
// @author         vanisoul
// @match          https://*/*
// @grant          GM_registerMenuCommand
// @require        https://cdn.jsdelivr.net/npm/hls.js@latest
// ==/UserScript==

(function() {
    "use strict";
    (function() {
        const m3u8Url = convertToM3U8Url(location.href);
        GM_registerMenuCommand("Replace Video Source", (() => {
            waitForVideo();
        }));
        function waitForVideo() {
            const video = document.querySelector("#oframeplayer > pjsdiv:nth-child(3) > video");
            if (video) {
                replaceVideoSource(video);
            } else {
                const player = document.querySelector("body > div.container > div.content > div.block-video > div > div.player");
                if (player) {
                    newVideoSource(player);
                }
            }
        }
        function newVideoSource(player) {
            const newVideo = document.createElement("video");
            newVideo.controls = true;
            newVideo.style.width = "640px";
            newVideo.style.height = "360px";
            if (player.parentNode) {
                player.parentNode.appendChild(newVideo);
            }
            const playerHolder = player.querySelector("div.player-holder");
            if (playerHolder) {
                player.removeChild(playerHolder);
            }
            replaceVideoSource(newVideo);
        }
        function replaceVideoSource(video) {
            if (Hls.isSupported()) {
                const hls = new Hls;
                hls.loadSource(m3u8Url);
                hls.attachMedia(video);
                hls.on(Hls.Events.MANIFEST_PARSED, (function() {
                    video.play().catch((err => {
                        console.error("Auto-play failed:", err);
                    }));
                }));
                console.log("HLS.js is used to play the m3u8 file.");
            } else {
                console.error("HLS is not supported in this browser.");
            }
        }
        function convertToM3U8Url(inputUrl) {
            const idPattern = /video\/(\d+)\//;
            const match = inputUrl.match(idPattern);
            if (!match) {
                throw new Error("Invalid URL format, unable to extract video ID.");
            }
            const id = match[1];
            const idGroup = `${Math.floor(parseInt(id) / 1e3) * 1e3}`;
            const m3u8Url = `https://r22.jz-krno.cc/contents/videos/${idGroup}/${id}/index.m3u8`;
            return m3u8Url;
        }
    })();
})();
