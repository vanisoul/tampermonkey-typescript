// ==UserScript==
// @name         bilibili BufferTime Change
// @version      1.0.1
// @description  BufferTime Set 250s
// @author       Vanisoul
// @match        https://www.bilibili.com/*
// @license      MIT
// @namespace    https://greasyfork.org/users/429936
// @updateHistory    1.0.1 (2024-01-04) 改變設定觸發鍵 & 可以改變Buffer時間
// ==/UserScript==

import { useGmValue } from "@/composable/use-value";
import { useGmMenu } from "@/composable/use-menu";
import { dashPlayerManager } from "@/lib/bilibili-get-video-player.js";

const defaultKey = "v";
const { data: triggerKey, updateData: updateKey } = useGmValue("key", defaultKey)
const { onTriggerMenu: onKeyTriggerMenu } = useGmMenu('設定查看目前 video buffer 按鈕');
onKeyTriggerMenu(() => {
    const setkey = prompt("請輸入觸發鍵", triggerKey.value);
    if (setkey) {
        // 判斷只可以輸入一個字
        if (setkey.length > 1) {
            alert("只能輸入一個字");
            return;
        }
        updateKey(setkey);
        alert(`已設定觸發鍵為 ${setkey}`);
    }
})

const defaultBufferTime = 250;
const { data: bufferTime, updateData: updateBufferTime } = useGmValue("bufferTime", defaultBufferTime)
const { onTriggerMenu: onBufferTimeTriggerMenu } = useGmMenu('設定Buffer時間');
onBufferTimeTriggerMenu(() => {
    const time = prompt("請輸入Buffer時間", bufferTime.value?.toString());
    if (time) {
        // 判斷需要數字
        if (isNaN(parseInt(time, 10))) {
            alert("請輸入數字");
            return;
        }
        const bufferTime = parseInt(time, 10);
        updateBufferTime(bufferTime);
        changeBuffer(bufferTime);
        alert(`已設定Buffer時間為 ${bufferTime}`);
    }
})

document.addEventListener('keydown', function (event) {
    if (event.key.toLocaleLowerCase() === triggerKey.value?.toLocaleLowerCase()) {
        const dashPlayer = dashPlayerManager.dashPlayer;
        alert(`Now BufferLength : ${dashPlayer?.getBufferLength("video")}`);
    }
});


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
