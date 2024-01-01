// ==UserScript==
// @name         bilibili Video Skip
// @version      3.0.0
// @description  bilibili Video Skip by press J key, default skip 90 seconds, you can change it in the menu.
// @author       Vanisoul
// @match        https://www.bilibili.com/*
// @license      MIT
// @namespace    https://greasyfork.org/users/429936
// @grant        GM_registerMenuCommand
// @grant        GM_setValue
// @grant        GM_getValue
// ==/UserScript==

import { dashPlayerManager } from "./lib/bilibili-get-video-player.js";

const defaultKey = "j"; //啟動鍵J
let triggerKey = GM_getValue('triggerKey', defaultKey);

function setTriggerKey() {
    var userKey = prompt('請輸入新的觸發按鈕:', triggerKey);
    if (userKey) {
        GM_setValue('triggerKey', userKey.toLocaleLowerCase());
        triggerKey = userKey.toLocaleLowerCase();
        alert('觸發按鈕已更改為: ' + triggerKey);
    }
}

const defaultOPTime = 90; //跳過長度
let OPTime = GM_getValue('OPTime', defaultOPTime);

function setOPTime() {
    var userOPTime = prompt('請輸入新的跳過時間:', OPTime.toString());
    if (userOPTime) {
        GM_setValue('OPTime', userOPTime);
        OPTime = parseInt(userOPTime);
        alert('跳過時間已更改為: ' + OPTime);
    }
}

GM_registerMenuCommand('設置觸發按鈕', setTriggerKey);
GM_registerMenuCommand('設置跳過時間', setOPTime);

document.addEventListener('keydown', function (event) {
    const dashPlayer = dashPlayerManager.dashPlayer;
    if (dashPlayer && event.key.toLocaleLowerCase() === triggerKey && dashPlayer) {
        const currentTime = dashPlayer.getCurrentTime();
        dashPlayer.seek(currentTime + OPTime);
    }
});

