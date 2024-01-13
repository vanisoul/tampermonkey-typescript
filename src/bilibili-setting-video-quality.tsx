// ==UserScript==
// @name         bilibili Setting Video Quality
// @version      1.1.0
// @description  Setting Video Quality
// @author       Vanisoul
// @match        https://www.bilibili.com/*
// @license      MIT
// @namespace    https://greasyfork.org/users/429936
// @updateHistory    1.1.0 (2024-01-13) 改為 react 版本 & 第三方元件使用 MUI
// ==/UserScript==

import React, { useEffect } from "react";
import { appendComponentToElement } from "@/lib/react-mount-after";

import { useGmValue } from "@/composable/use-value";
import { useGmMenu } from "@/composable/use-menu";
import { useBilibiliGetVideoPlayer } from "@/composable/use-bilibili-get-video-player";

const App = () => {
    const { dashPlayer } = useBilibiliGetVideoPlayer();

    const defaultTargetQualitys = [1080, 720, 480, 360]; // 越前面越優先
    const { data: targetQualitys, updateData: setTargetQualitys } =
        useGmValue("targetQualitys", defaultTargetQualitys);

    const defaultHighBitratePriority = true; // 是否 Bitrate 是否優先
    const { data: highBitratePriority, updateData: setHighBitratePriority } =
        useGmValue("highBitratePriority", defaultHighBitratePriority);

    useGmMenu("設置目標品質", () => {
        const quality = prompt("請輸入目標品質優先序, 逗點分隔（1080, 720, 480, 360）:", targetQualitys.join(","));

        if (quality) {
            const qualityPriority = quality.split(",").map(q => parseInt(q, 10))
            const isLegal = qualityPriority.every(q => !isNaN(q));
            if (isLegal) {
                setTargetQualitys(qualityPriority);
                alert("目標品質已設置為：" + quality);
            } else {
                alert("輸入的目標品質優先序不合法");
            }
        }
    });

    useGmMenu("設置高比特率優先", () => {
        const priority = confirm("是否要設置高比特率優先？");
        setHighBitratePriority(priority);
        alert("高比特率優先已" + (priority ? "開啟" : "關閉"));
    });

    // 設定影像品質
    useEffect(() => {
        if (!dashPlayer) {
            console.log("dashPlayer not found");
            return;
        }

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
            console.log("priorityQualityList not found");
            return;
        }

        const targetIdx = priorityQualityList[0].index;
        dashPlayer.player.setQualityFor("video", targetIdx)
        dashPlayer.player.setDefaultQualityFor("video", targetIdx)
        console.log(`set video quality to ${priorityQualityList[0].height}`);
    }, [dashPlayer, targetQualitys, highBitratePriority]);

    return <div />;
}

const mountInterval = setInterval(() => {
    const success = appendComponentToElement(App, 'body');
    if (success) {
        clearInterval(mountInterval);
    }
}, 3000);


