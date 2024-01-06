// ==UserScript==
// @name         ani gamer video
// @version      1.0.2
// @description  動畫瘋, 自動撥放, J 鍵跳過 90S, 自動設定影片速度, 隱藏觀看歷史
// @author       Vanisoul
// @match        https://ani.gamer.com.tw/*
// @license      MIT
// @namespace    https://greasyfork.org/users/429936
// @grant        unsafeWindow
// @updateHistory    1.0.1 (2024-01-04) 增加各種快捷鍵功能 & 新增時間設定選項 & 自動撥放啟用提示
// @updateHistory    1.0.2 (2024-01-06) 增加隱藏歷史觀看紀錄功能, 但是畫面會先出現在隱藏, 只是方便隱藏試看影片
// ==/UserScript==

import { ref } from "vue";
import { useGmValue } from "@/composable/use-value";
import { useGmMenu } from "@/composable/use-menu";

const defaultGamerSkipKey = "j"; //啟動鍵J
const { data: gamerSkipKey, updateData: updateGamerSkipKey } = useGmValue("gamerSkipKey", defaultGamerSkipKey)
const { onTriggerMenu: onSkipKeyTriggerMenu } = useGmMenu('設定跳過觸發鍵');
onSkipKeyTriggerMenu(() => {
    const key = prompt("請輸入跳過觸發鍵", gamerSkipKey.value);
    if (key) {
        // 判斷只可以輸入一個字
        if (key.length > 1) {
            alert("只能輸入一個字");
            return;
        }
        updateGamerSkipKey(key);
        alert(`已設定跳過觸發鍵為 ${key}`);
    }
})

const defaultGamerOPTime = 90; //跳過長度
const { data: gamerOPTime, updateData: updateGamerOPTime } = useGmValue("gamerOPTime", defaultGamerOPTime)
const { onTriggerMenu: onOPTimeTriggerMenu } = useGmMenu('設定跳過長度');
onOPTimeTriggerMenu(() => {
    const time = prompt("請輸入跳過長度", gamerOPTime.value?.toString());
    if (time) {
        // 判斷需要數字
        if (isNaN(parseInt(time, 10))) {
            alert("請輸入數字");
            return;
        }
        updateGamerOPTime(parseInt(time, 10));
        alert(`已設定跳過長度為 ${time}`);
    }
})

const gamerVideoRatePool = [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2];
const defaultGamerVideoRate = 1.5; //影片速度
const { data: gamerVideoRate, updateData: updateGamerVideoRate } = useGmValue("gamerVideoRate", defaultGamerVideoRate)
const { onTriggerMenu: onVideoRateTriggerMenu } = useGmMenu('設定影片速度');
onVideoRateTriggerMenu(() => {
    const rate = prompt(`請輸入影片速度 [${gamerVideoRatePool.toString()}]`, gamerVideoRate.value?.toString());
    if (rate) {
        // 判斷是否在 pool
        const rateNumber = parseFloat(rate);
        if (gamerVideoRatePool.includes(rateNumber)) {
            updateGamerVideoRate(rateNumber);
            setVideoRate();
            alert(`已設定影片速度為 ${rate}`);
        } else {
            alert(`請輸入正確的速度 [${gamerVideoRatePool.toString()}]`);
        }
    }
})

const defaultFullScanKey = "f"; //全螢幕切換
const { data: fullScanKey, updateData: updateFullScanKey } = useGmValue("fullScanKey", defaultFullScanKey)
const { onTriggerMenu: onFullScanKeyTriggerMenu } = useGmMenu('設定全螢幕切換鍵');
onFullScanKeyTriggerMenu(() => {
    const key = prompt("請輸入全螢幕切換鍵", fullScanKey.value);
    if (key) {
        // 判斷只可以輸入一個字
        if (key.length > 1) {
            alert("只能輸入一個字");
            return;
        }
        updateFullScanKey(key);
        alert(`已設定全螢幕切換鍵為 ${key}`);
    }
})

const defaultAutoNext = true; //自動切換下一集
const { data: autoNext, updateData: updateAutoNext } = useGmValue("autoNext", defaultAutoNext)
const { onTriggerMenu: onAutoNextTriggerMenu } = useGmMenu('設定自動切換下一集');
onAutoNextTriggerMenu(() => {
    const isAutoNext = confirm("是否啟用自動切換下一集");
    updateAutoNext(isAutoNext);
    alert(`已設定自動切換下一集功能 ${isAutoNext}`);
})

const defaultHideHistoryIds: number[] = []; //隱藏觀看紀錄
const { data: hideHistoryIds, updateData: updateHideHistoryIds } = useGmValue("hideHistoryIds", defaultHideHistoryIds)
const { onTriggerMenu: onHideHistoryIdsTriggerMenu } = useGmMenu('設定隱藏觀看紀錄');
onHideHistoryIdsTriggerMenu(() => {
    const ids = prompt("請輸入要隱藏的觀看紀錄 影片 Sn , 分隔, EX : 12345, 54321", hideHistoryIds.value?.join(','));
    if (ids === null) {
        return;
    }
    if (ids) {
        const idsArray = ids.split(',').map(id => parseInt(id.trim(), 10));
        updateHideHistoryIds(idsArray);
        triggerHideHistoryIds();
        alert(`已設定隱藏觀看紀錄 ${idsArray.toString()}`);
    } else {
        updateHideHistoryIds([]);
        triggerHideHistoryIds();
        alert(`已取消隱藏觀看紀錄`);
    }
});

const defaultAutoPlay = false; //自動同意撥放
const { data: autoPlay, updateData: updateAutoPlay } = useGmValue("autoPlay", defaultAutoPlay)
const { onTriggerMenu: onAutoPlayTriggerMenu } = useGmMenu('設定自動同意撥放');
onAutoPlayTriggerMenu(() => {
    const isAutoPlay = confirm("是否啟用自動同意撥放");
    if (isAutoPlay) {
        // 打開 Chrome 瀏覽器。
        // 訪問您想要允許自動播放的網站。
        // 在網址欄左側，點擊鎖頭圖標或信息圖標（取決於網站是否使用 HTTPS）。
        // 在彈出的菜單中選擇「網站設置」。
        // 在「網站設置」頁面，找到「聲音」選項，並將其設置為「允許」。
        alert("要自動撥放，請先設定網站設置")
        alert(`網址欄左側，點擊鎖頭圖標或信息圖標（取決於網站是否使用 HTTPS），在彈出的菜單中選擇「網站設置」，在「網站設置」頁面，找到「聲音」選項，並將其設置為「允許」。`);
    }
    updateAutoPlay(isAutoPlay);
    alert(`已設定自動同意撥放功能 ${isAutoPlay}`);
})


const gamerVideo = ref<HTMLVideoElement | undefined>(undefined)
const videoSnArray = ref<number[]>([]);

function setVideoRate() {
    if (gamerVideoRate.value && gamerVideo.value) {
        gamerVideo.value.playbackRate = gamerVideoRate.value;
    }
}

function initVideo() {
    setVideoRate();
    getSnList();
}

function getSnList() {
    unsafeWindow.$(".season ul li a").each(function () {
        const href = unsafeWindow.$(this).attr('href');
        const sn = href?.split('=')[1];
        if (sn) {
            videoSnArray.value.push(parseInt(sn, 10));
        }
    });
}

function goToNextPage() {
    const currentPageIndex = getCurrentPage();
    if (currentPageIndex >= 0 && currentPageIndex < videoSnArray.value.length - 1) {
        const nextSN = videoSnArray.value[currentPageIndex + 1];
        window.location.href = '?sn=' + nextSN;
    } else {
        console.log('已經是最後一頁了，無法轉到下一頁。');
    }
}

function getCurrentPage() {
    var currentSN = window.location.search.split('=')[1];
    return videoSnArray.value.indexOf(parseInt(currentSN, 10));
}

async function autoPlayMethed() {
    const adultClick = unsafeWindow.$._data(unsafeWindow.$("#adult")[0], "events").click;
    if (adultClick && adultClick.length !== 0) {
        adultClick[0].handler();
    }
}

function triggerHideHistoryIds() {
    //  unsafeWindow.$ 是 jQuery
    // .user-watch-list .click-area 是觀看紀錄的 class 其中有 href 其 query string 有 sn
    // 符合隱藏條件 .user-watch-list 整個隱藏

    // 開始實作
    // 1. 先取得所有的觀看紀錄
    // 2. 判斷是否有要隱藏的
    // 3. 隱藏

    const historyList = unsafeWindow.$('.user-watch-list .click-area');
    if (historyList.length === 0) {
        return false;
    }
    if (hideHistoryIds.value!.length === 0) {
        // 為 0 就把已隱藏都顯示
        historyList.each(function () {
            unsafeWindow.$(this).closest('.user-watch-list').show();
        });
        return false;
    }
    historyList.each(function () {
        const href = unsafeWindow.$(this).attr('href');
        const sn = parseInt(href?.split('=')[1].trim() ?? "", 10);
        if (sn && hideHistoryIds.value!.includes(sn)) {
            unsafeWindow.$(this).closest('.user-watch-list').hide();
        }
    });

    return true;
}


document.addEventListener('keydown', function (event) {
    if (event.key.toLocaleLowerCase() === gamerSkipKey.value && gamerVideo.value && gamerOPTime.value) {
        gamerVideo.value.currentTime += gamerOPTime.value;
    }
    if (event.key.toLocaleLowerCase() === fullScanKey.value) {
        unsafeWindow.$(".vjs-fullscreen-control").trigger("click");
    }
})

const gamerInterval = setInterval(async () => {
    gamerVideo.value = document.getElementById('ani_video_html5_api') as HTMLVideoElement;

    if (!unsafeWindow.$ || !gamerVideo.value) {
        return;
    }

    clearInterval(gamerInterval);
    if (autoPlay.value) {
        void autoPlayMethed();
    }
    gamerVideo.value.addEventListener('play', function () {
        initVideo();
    });
    gamerVideo.value.addEventListener('ended', function () {
        if (autoNext.value) {
            goToNextPage();
        }
    });

}, 2000)

// 隱藏歷史的執行
const hideHistoryIdsInterval = setInterval(() => {
    triggerHideHistoryIds();
}, 10);

// 3秒後停止隱藏歷史的執行
setTimeout(() => {
    clearInterval(hideHistoryIdsInterval);
}, 3000);