// ==UserScript==
// @name         bilibili BufferTime Change
// @version      1.0.0
// @description  BufferTime Set 250s
// @author       Vanisoul
// @match        https://www.bilibili.com/*
// @license      MIT
// @namespace    https://greasyfork.org/users/429936
// @grant        GM_registerMenuCommand
// @grant        GM_setValue
// @grant        GM_getValue
// ==/UserScript==

import { dashPlayerManager } from "./lib/bilibili-get-video-player.js";

const defaultKey = "v";
let triggerKey = GM_getValue('triggerKey', defaultKey);

function setTriggerKey() {
    var userKey = prompt('請輸入新的觸發按鈕:', triggerKey);
    if (userKey) {
        GM_setValue('triggerKey', userKey.toLocaleLowerCase());
        triggerKey = userKey.toLocaleLowerCase();
        alert('觸發按鈕已更改為: ' + triggerKey);
    }
}

const defaultBufferTime = 250;
let bufferTime = GM_getValue('bufferTime', defaultBufferTime);

function setBufferTime() {
    var userBufferTime = prompt('請輸入新的Buffer時間:', bufferTime.toString());
    if (userBufferTime) {
        GM_setValue('bufferTime', userBufferTime);
        bufferTime = parseInt(userBufferTime);
        changeBuffer(bufferTime);
        alert('Buffer時間已更改為: ' + bufferTime);
    }
}

GM_registerMenuCommand('設置Buffer時間', setBufferTime);
GM_registerMenuCommand('設置查看目前 Buffer 按鈕', setTriggerKey);

document.addEventListener('keydown', function (event) {
    if (event.key.toLocaleLowerCase() === triggerKey) {
        const dashPlayer = dashPlayerManager.dashPlayer;
        console.log(`Now BufferLength : ${dashPlayer?.getBufferLength("video")}`);
    }
});

changeBuffer(bufferTime);

function changeBuffer(bufferTime: number) {
    const setBufferInterval = setInterval(() => {
        const dashPlayer = dashPlayerManager.dashPlayer;
        if (dashPlayer) {
            dashPlayer.player.setBufferPruningInterval(3);
            dashPlayer.player.setStableBufferTime(bufferTime);
            dashPlayer.player.setBufferTimeAtTopQuality(bufferTime);
            dashPlayer.player.setBufferTimeAtTopQualityLongForm(bufferTime);
            dashPlayer.player.setBufferAheadToKeep(bufferTime + 10);
            dashPlayer.player.setBufferToKeep(30000);
            console.log(`hook set buffer time ${bufferTime}`);

            clearInterval(setBufferInterval);
        }
    }, 1000);
}
