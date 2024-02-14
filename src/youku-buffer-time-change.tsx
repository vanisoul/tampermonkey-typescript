// ==UserScript==
// @name         youku BufferTime Change
// @version      1.0.0
// @description  BufferTime Set 800s
// @author       Vanisoul
// @match        https://v.youku.com/*
// @license      MIT
// @namespace    https://greasyfork.org/users/429936
// @grant          unsafeWindow
// @updateHistory    1.0.0 (2024-02-14) 建立 youku BufferTime Change
// ==/UserScript==

import React, { useEffect, useState } from "react";
import { appendComponentToElement } from "@/lib/react-mount-after";

import { useGmValue } from "@/composable/use-value";
import { useGmMenu } from "@/composable/use-menu";

interface VideoBufferInfo {
    bufferLength?: number; 
}

interface MediaEngine {
    lastBufferInfo?: {
        video?: VideoBufferInfo;
    };
}

interface VideoPlayer {
    _player?:{
        onPlaying?: () => void;
    },
    context?: {
        core?: {
            _proxy?: {
                player?: {
                    mainController?: {
                        timelineList?: Array<{
                            config?: {
                                maxBufferLength?: number;
                                maxDecodeBufferLength?: number;
                            };
                        }>;
                    };
                    mediaEngine?: MediaEngine;
                };
            };
        };
    };
}

function getLastVideoBufferInfo() {
    // 使用類型斷言來告訴 TypeScript window.videoPlayer 的類型
    const videoPlayer = (unsafeWindow as any).videoPlayer as VideoPlayer;

    // 安全地訪問 lastBufferInfo 中 video 的資訊
    return videoPlayer.context?.core?._proxy?.player?.mediaEngine?.lastBufferInfo?.video?.bufferLength ?? -1;
}

function updateBufferLength(newBufferLength: number) {
    // 使用 TypeScript 斷言來避免類型錯誤
    const timelineList = (unsafeWindow as any).videoPlayer as VideoPlayer;

    timelineList.context?.core?._proxy?.player?.mainController?.timelineList?.forEach(item => {
        // 確認 item.config 存在並且不是空物件
        if (item?.config && Object.keys(item.config).length > 0) {
            // 僅當屬性存在時更新
            if (typeof item.config.maxBufferLength !== 'undefined') {
                item.config.maxBufferLength = newBufferLength;
            }
            if (typeof item.config.maxDecodeBufferLength !== 'undefined') {
                item.config.maxDecodeBufferLength = newBufferLength;
            }
        }
    });
}

const App = () => {
    const [isVideoInit, setIsVideoInit] = useState(false);

    useEffect(() => {
        // 定義一個函數來檢查和設置 onPlaying 處理器
        const checkAndSetOnPlaying = () => {
            const videoPlayer = (unsafeWindow as any).videoPlayer as VideoPlayer;
            // 檢查 window.videoPlayer._player.onPlaying 是否存在
            if (videoPlayer && videoPlayer._player && typeof videoPlayer._player.onPlaying !== 'undefined') {
                // 保存原始的 onPlaying 處理器
                const originalOnPlaying = videoPlayer._player.onPlaying;
                
                // 定義一個新的處理器
                const enhancedOnPlaying = () => {
                    if (typeof originalOnPlaying === 'function') {
                        originalOnPlaying();
                    }
                    if (!isVideoInit) {
                        setIsVideoInit(true);
                    }
                };

                // 將新的處理器設置為 onPlaying
                videoPlayer._player.onPlaying = enhancedOnPlaying;

                // 清除定時器
                clearInterval(checkInterval);
            }
        };

        // 定義一個函數來觸發 onPlaying 處理器
        const triggerPlaying = () => {
            const videoPlayer = (unsafeWindow as any).videoPlayer as VideoPlayer;
            if (!isVideoInit && videoPlayer && videoPlayer._player && typeof videoPlayer._player.onPlaying === 'function') {
                videoPlayer._player.onPlaying();
            }
        }

        // 每500毫秒檢查一次
        const checkInterval = setInterval(checkAndSetOnPlaying, 3000);
        const triggerInterval = setInterval(triggerPlaying, 3000);

        // 組件卸載時的清理工作
        return () => {
            clearInterval(checkInterval);
            clearInterval(triggerInterval);
        };
    }, [isVideoInit]); 

    const defaultKey = "v";
    const { data: triggerKey, updateData: updateKey } = useGmValue("key", defaultKey)
    useGmMenu('設定查看目前 video buffer 按鈕', () => {
        const setkey = prompt("請輸入觸發鍵", triggerKey);
        if (setkey) {
            // 判斷只可以輸入一個字
            if (setkey.length > 1) {
                alert("只能輸入一個字");
                return;
            }
            updateKey(setkey);
            alert(`已設定觸發鍵為 ${setkey}`);
        }
    });

    const defaultBufferTime = 250;
    const { data: bufferTime, updateData: updateBufferTime } = useGmValue("bufferTime", defaultBufferTime)
    useGmMenu('設定Buffer時間', () => {
        const time = prompt("請輸入Buffer時間", bufferTime.toString());
        if (time) {
            // 判斷需要數字
            if (isNaN(parseInt(time, 10))) {
                alert("請輸入數字");
                return;
            }
            const bufferTime = parseInt(time, 10);
            updateBufferTime(bufferTime);
            alert(`已設定Buffer時間為 ${bufferTime}`);
        }
    });


    // 改變其 Buffer 值
    useEffect(() => {
        updateBufferLength(bufferTime);
    }, [bufferTime, isVideoInit]);

    // 改變 查看 buffer 觸發鍵
    useEffect(() => {
        function triggerKeyFunc(event: KeyboardEvent) {
            if (event.key.toLocaleLowerCase() === triggerKey.toLocaleLowerCase()) {
                const bufferLength = getLastVideoBufferInfo();
                alert(`Now BufferLength : ${bufferLength}`);
            }
        }
        document.addEventListener('keydown', triggerKeyFunc);
        return () => {
            document.removeEventListener('keydown', triggerKeyFunc);
        }
    }, [triggerKey, isVideoInit])

    return <div />;
};

const mountInterval = setInterval(() => {
    const success = appendComponentToElement(App, 'body');
    if (success) {
        clearInterval(mountInterval);
    }
}, 3000);
