// ==UserScript==
// @name             iqiyi video tools
// @version          1.0.0
// @description      iqiyi 快轉
// @author           Vanisoul
// @match            https://www.iq.com/*
// @license          MIT
// @namespace        https://greasyfork.org/users/429936
// @updateHistory    1.0.0 (2024-01-03) 增加快捷鍵功能 & 新增時間設定選項
// ==/UserScript==

import { ref, createApp, defineComponent, onMounted, onUnmounted } from "vue";
import { PromptComponent } from "./component/prompt";

import { mountAfter } from "./lib/vue-mount-after";

import { useGmValue } from "./composable/use-value";
import { useGmMenu } from "./composable/use-menu";

const App = defineComponent({
    setup() {
        const iqiyiVideo = ref<HTMLVideoElement>();
        const iqiyiInterval = ref<NodeJS.Timeout>();

        const { data: iqiyiSkipKey, updateData: updateKey } = useGmValue("iqiyiSkipKey", "j");
        const { data: iqiyiOPTime, updateData: updateTime } = useGmValue("iqiyiOPTime", 90);

        const keyTitle = "設定快轉鍵";
        const { setEvent: setKeyEvent } = useGmMenu(keyTitle);
        const timeTitle = "設定快轉時間";
        const { setEvent: setTimeEvent } = useGmMenu(timeTitle);

        const keyPrompt = ref(false);
        const timePrompt = ref(false);

        setKeyEvent(() => { keyPrompt.value = true; });
        setTimeEvent(() => { timePrompt.value = true; });

        function onKeyClose() {
            keyPrompt.value = false;
        }

        function onTimeClose() {
            timePrompt.value = false;
        }

        function validateKey(input: string) {
            if (input.length > 1) {
                return '只能輸入一個字元';
            }
            return true;
        }

        function validateTime(input: string) {
            const time = parseInt(input);
            if (isNaN(time)) {
                return '請輸入數字';
            }
            return true;
        }

        function tirggerMoveTime(event: KeyboardEvent) {
            if (event.key.toLocaleLowerCase() === iqiyiSkipKey.value && iqiyiVideo.value) {
                iqiyiVideo.value.currentTime += iqiyiOPTime.value!;
            }
        }

        onMounted(() => {
            document.addEventListener('keydown', tirggerMoveTime);

            iqiyiInterval.value = setInterval(() => {
                var playerContainer = document.querySelector('.iqp-player-g.iqp-player.iqp-player-pc');
                var selectorVideo = playerContainer ? playerContainer.querySelector('video') : null;

                if (selectorVideo && iqiyiInterval.value) {
                    iqiyiVideo.value = selectorVideo;
                    clearInterval(iqiyiInterval.value);
                }
            }, 1000);
        })
        onUnmounted(() => {
            document.removeEventListener('keydown', tirggerMoveTime)

            if (iqiyiInterval.value) {
                clearInterval(iqiyiInterval.value);
            }
        })

        return () => <>
            <PromptComponent
                title={keyTitle}
                onConfirm={updateKey}
                onClose={onKeyClose}
                showDialog={keyPrompt.value}
                validate={validateKey}
                inputValue={iqiyiSkipKey.value!}
            />
            <PromptComponent
                title={timeTitle}
                onConfirm={(v) => updateTime(parseInt(v))}
                onClose={onTimeClose}
                showDialog={timePrompt.value}
                validate={validateTime}
                inputValue={iqiyiOPTime.value!.toString()}
            />
        </>
    },
});

const app = createApp(App);
const iqiyiMountInterval = setInterval(() => {
    const success = mountAfter(app, "#block-header");
    if (success) {
        clearInterval(iqiyiMountInterval);
    }
}, 2000);