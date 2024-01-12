// ==UserScript==
// @name             iqiyi video tools
// @version          1.0.2
// @description      iqiyi 快轉
// @author           Vanisoul
// @match            https://www.iq.com/*
// @license          MIT
// @namespace        https://greasyfork.org/users/429936
// @updateHistory    1.0.0 (2024-01-03) 增加快捷鍵功能 & 新增時間設定選項
// @updateHistory    1.0.1 (2024-01-04) 太閒, 使用 vue 元件製作設定視窗, 引用 tailwind css
// @updateHistory    1.0.2 (2024-01-12) 改為 react 版本 & 第三方元件使用 MUI & 已知問題: 文字大小無法調整
// ==/UserScript==

import React, { useState, useEffect, useRef } from 'react';
import { PromptComponent } from '@/component/prompt';

import { useGmValue } from "@/composable/use-value";
import { useGmMenu } from "@/composable/use-menu";

import { appendComponentToElement } from "@/lib/react-mount-after";

const App = () => {
    const iqiyiVideo = useRef<HTMLVideoElement>();
    const { data: iqiyiSkipKey, updateData: setIqiyiSkipKey } = useGmValue("iqiyiSkipKey", 'j');
    const { data: iqiyiOPTime, updateData: setIqiyiOPTime } = useGmValue("iqiyiOPTime", 90);
    const [keyPrompt, setKeyPrompt] = useState(false);
    const [timePrompt, setTimePrompt] = useState(false);

    const keyTitle = "設定快轉鍵";
    const timeTitle = "設定快轉時間";
    useGmMenu(
        keyTitle,
        () => { setKeyPrompt(true); }
    );
    useGmMenu(
        timeTitle,
        () => { setTimePrompt(true); }
    );

    const onKeyClose = () => {
        setKeyPrompt(false);
    };

    const onTimeClose = () => {
        setTimePrompt(false);
    };

    const validateKey = (input: string) => {
        if (input.length > 1) {
            return '只能輸入一個字元';
        }
        return true;
    };

    const validateTime = (input: string) => {
        const time = parseInt(input);
        if (isNaN(time)) {
            return '請輸入數字';
        }
        return true;
    };

    const triggerMoveTime = (event: KeyboardEvent) => {
        if (event.key.toLowerCase() === iqiyiSkipKey && iqiyiVideo.current) {
            iqiyiVideo.current.currentTime += iqiyiOPTime;
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', triggerMoveTime);
        return () => {
            document.removeEventListener('keydown', triggerMoveTime);
        }
    }, [iqiyiSkipKey, iqiyiOPTime])

    useEffect(() => {
        const intervalId = setInterval(() => {
            const playerContainer = document.querySelector('.iqp-player-g.iqp-player.iqp-player-pc');
            const selectorVideo = playerContainer ? playerContainer.querySelector('video') : null;

            if (selectorVideo) {
                iqiyiVideo.current = selectorVideo;
                clearInterval(intervalId);
            }
        }, 1000);
        return () => {

            clearInterval(intervalId);
        };
    }, []);

    return (
        <>
            <PromptComponent
                title={keyTitle}
                onConfirm={setIqiyiSkipKey}
                onClose={onKeyClose}
                showDialog={keyPrompt}
                validate={validateKey}
                inputValue={iqiyiSkipKey}
            />
            <PromptComponent
                title={timeTitle}
                onConfirm={(v) => setIqiyiOPTime(parseInt(v))}
                onClose={onTimeClose}
                showDialog={timePrompt}
                validate={validateTime}
                inputValue={iqiyiOPTime.toString()}
            />
        </>
    );
};

const iqiyiMountInterval = setInterval(() => {
    const success = appendComponentToElement(App, "#block-header");
    if (success) {
        clearInterval(iqiyiMountInterval);
    }
}, 2000);

// import { ref, createApp, defineComponent, onMounted, onUnmounted } from "vue";
// import { PromptComponent } from "@/component/prompt";

// import { mountAfter } from "@/lib/vue-mount-after";

// import { useGmValue } from "@/composable/use-value";
// import { useGmMenu } from "@/composable/use-menu";

// const App = defineComponent({
//     setup() {
//         const iqiyiVideo = ref<HTMLVideoElement>();
//         const iqiyiInterval = ref<NodeJS.Timeout>();

//         const { data: iqiyiSkipKey, updateData: updateKey } = useGmValue("iqiyiSkipKey", "j");
//         const { data: iqiyiOPTime, updateData: updateTime } = useGmValue("iqiyiOPTime", 90);

//         const keyTitle = "設定快轉鍵";
//         const timeTitle = "設定快轉時間";

//         const keyPrompt = ref(false);
//         useGmMenu(
//             keyTitle,
//             () => { keyPrompt.value = true; }
//         );
//         const timePrompt = ref(false);
//         useGmMenu(
//             timeTitle,
//             () => { timePrompt.value = true; }
//         );

//         function onKeyClose() {
//             keyPrompt.value = false;
//         }

//         function onTimeClose() {
//             timePrompt.value = false;
//         }

//         function validateKey(input: string) {
//             if (input.length > 1) {
//                 return '只能輸入一個字元';
//             }
//             return true;
//         }

//         function validateTime(input: string) {
//             const time = parseInt(input);
//             if (isNaN(time)) {
//                 return '請輸入數字';
//             }
//             return true;
//         }

//         function tirggerMoveTime(event: KeyboardEvent) {
//             if (event.key.toLocaleLowerCase() === iqiyiSkipKey.value && iqiyiVideo.value) {
//                 iqiyiVideo.value.currentTime += iqiyiOPTime.value!;
//             }
//         }

//         onMounted(() => {
//             document.addEventListener('keydown', tirggerMoveTime);

//             iqiyiInterval.value = setInterval(() => {
//                 var playerContainer = document.querySelector('.iqp-player-g.iqp-player.iqp-player-pc');
//                 var selectorVideo = playerContainer ? playerContainer.querySelector('video') : null;

//                 if (selectorVideo && iqiyiInterval.value) {
//                     iqiyiVideo.value = selectorVideo;
//                     clearInterval(iqiyiInterval.value);
//                 }
//             }, 1000);
//         })
//         onUnmounted(() => {
//             document.removeEventListener('keydown', tirggerMoveTime)

//             if (iqiyiInterval.value) {
//                 clearInterval(iqiyiInterval.value);
//             }
//         })

//         return () => <>
//             <PromptComponent
//                 title={keyTitle}
//                 onConfirm={updateKey}
//                 onClose={onKeyClose}
//                 showDialog={keyPrompt.value}
//                 validate={validateKey}
//                 inputValue={iqiyiSkipKey.value!}
//             />
//             <PromptComponent
//                 title={timeTitle}
//                 onConfirm={(v) => updateTime(parseInt(v))}
//                 onClose={onTimeClose}
//                 showDialog={timePrompt.value}
//                 validate={validateTime}
//                 inputValue={iqiyiOPTime.value!.toString()}
//             />
//         </>
//     },
// });

// const app = createApp(App);
// const iqiyiMountInterval = setInterval(() => {
//     const success = mountAfter(app, "#block-header");
//     if (success) {
//         clearInterval(iqiyiMountInterval);
//     }
// }, 2000);