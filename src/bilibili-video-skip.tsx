// ==UserScript==
// @name         bilibili Video Skip
// @version      3.1.0
// @description  bilibili Video Skip by press J key, default skip 90 seconds, you can change it in the menu.
// @author       Vanisoul
// @match        https://www.bilibili.com/*
// @license      MIT
// @namespace    https://greasyfork.org/users/429936
// @updateHistory    3.1.0 (2024-01-13) 改為 react 版本
// ==/UserScript==

import React, { useEffect } from "react";
import { appendComponentToElement } from "@/lib/react-mount-after";

import { useGmValue } from "@/composable/use-value";
import { useGmMenu } from "@/composable/use-menu";
import { useBilibiliGetVideoPlayer } from "@/composable/use-bilibili-get-video-player";

const App = () => {
    const { dashPlayer } = useBilibiliGetVideoPlayer();
    const { data: triggerKey, updateData: updateTriggerKey } = useGmValue("triggerKey", "j");
    const { data: OPTime, updateData: updateOPTime } = useGmValue("OPTime", 90);

    useGmMenu('設置觸發按鈕', () => {
        const setkey = prompt("請輸入觸發鍵", triggerKey);
        if (setkey) {
            // 判斷只可以輸入一個字
            if (setkey.length > 1) {
                alert("只能輸入一個字");
                return;
            }
            updateTriggerKey(setkey);
            alert(`已設定觸發鍵為 ${setkey}`);
        }
    });

    useGmMenu('設置跳過時間', () => {
        var OPTimeString = prompt('請輸入新的跳過時間:', OPTime.toString());
        if (OPTimeString) {
            // 判斷需要數字
            if (isNaN(parseInt(OPTimeString, 10))) {
                alert("請輸入數字");
                return;
            }
            const parseOPTime = parseInt(OPTimeString, 10);
            updateOPTime(parseOPTime);
            alert(`已設定Buffer時間為 ${parseOPTime}`);
        }
    });

    // video skip
    useEffect(() => {
        function playerSeek(event: KeyboardEvent) {
            if (dashPlayer && event.key.toLocaleLowerCase() === triggerKey && dashPlayer) {
                const currentTime = dashPlayer.getCurrentTime();
                dashPlayer.seek(currentTime + OPTime);
            }
        }

        document.addEventListener('keydown', playerSeek);
        return () => {
            document.removeEventListener('keydown', playerSeek);
        }
    }, [dashPlayer, triggerKey, OPTime]);

    return <div />
}

const mountInterval = setInterval(() => {
    const success = appendComponentToElement(App, 'body');
    if (success) {
        clearInterval(mountInterval);
    }
}, 3000);