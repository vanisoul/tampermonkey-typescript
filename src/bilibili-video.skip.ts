// ==UserScript==
// @name         bilibili Video Skip
// @version      2.0.2
// @description  bilibili Video Skip 90S
// @author       Vanisoul
// @match        https://www.bilibili.com/*
// @license      MIT
// @namespace    http://tampermonkey.net/
// ==/UserScript==

import { dashPlayerManager } from "./lib/bilibili-get-video-player.js";

var key = "j"; //啟動鍵J
var OPTime = 90; //跳過長度

document.addEventListener('keydown', function (event) {
    const dashPlayer = dashPlayerManager.dashPlayer;
    if (dashPlayer && event.key.toLocaleLowerCase() === key && dashPlayer) {
        const currentTime = dashPlayer.getCurrentTime();
        dashPlayer.seek(currentTime + OPTime);
    }
});

