// ==UserScript==
// @name         bilibili Setting Video Quality
// @version      1.0.0
// @description  Setting Video Quality
// @author       Vanisoul
// @match        https://www.bilibili.com/*
// @license      MIT
// @namespace    https://greasyfork.org/users/429936
// @grant        GM_registerMenuCommand
// @grant        GM_setValue
// @grant        GM_getValue
// ==/UserScript==

import { dashPlayerManager } from "./lib/bilibili-get-video-player.js";

const defaultTargetQualitys = [1080, 720, 480, 360]; // 越前面越優先
const targetQualitys = GM_getValue("targetQualitys", defaultTargetQualitys);

const defaultHighBitratePriority = true; // 是否 Bitrate 是否優先
const highBitratePriority = GM_getValue("highBitratePriority", defaultHighBitratePriority);

// 註冊選項菜單命令
GM_registerMenuCommand("設置目標品質", setTargetQuality);
GM_registerMenuCommand("設置高比特率優先", setHighBitratePriority);

// 設置目標品質
function setTargetQuality() {
    const quality = prompt("請輸入目標品質優先序, 逗點分隔（1080, 720, 480, 360）:", targetQualitys.join(","));
    if (quality) {
        GM_setValue("targetQualitys", quality.split(",").map(q => parseInt(q, 10)));
        updateQuality();
        alert("目標品質已設置為：" + quality);
    }
}

// 設置高比特率優先
function setHighBitratePriority() {
    const priority = confirm("是否要設置高比特率優先？");
    GM_setValue("highBitratePriority", priority);
    updateQuality();
    alert("高比特率優先已" + (priority ? "開啟" : "關閉"));
}

function updateQuality() {
    const setQualityInterval = setInterval(() => {
        const dashPlayer = dashPlayerManager.dashPlayer;
        if (dashPlayer) {
            const qualityList = dashPlayer.player.getBitrateInfoListFor("video");
            const priorityQualityList = qualityList
                .map((item, index) => {
                    const priority = targetQualitys.indexOf(item.height)
                    return { ...item, index, priority };
                })
                .filter(item => item.priority !== -1)
                .sort((currItem, nextItem) =>
                    highBitratePriority ?
                        nextItem.bitrate - currItem.bitrate :
                        currItem.bitrate - nextItem.bitrate
                )
                .sort((currItem, nextItem) => currItem.priority - nextItem.priority);

            if (priorityQualityList.length === 0) {
                return;
            }

            const targetIdx = priorityQualityList[0].index;
            dashPlayer.player.setQualityFor("video", targetIdx)
            dashPlayer.player.setDefaultQualityFor("video", targetIdx)
            console.log(`hook set Quality ${JSON.stringify(priorityQualityList[0])}`);

            clearInterval(setQualityInterval);
        }
    });
}


updateQuality();