// ==UserScript==
// @name         ani gamer tools
// @version      1.0.0
// @description  動畫瘋, 自動撥放, J 鍵跳過 90S, 自動設定影片速度
// @author       Vanisoul
// @match        https://ani.gamer.com.tw/*
// @license      MIT
// @namespace    https://greasyfork.org/users/429936
// @grant        unsafeWindow
// ==/UserScript==

const gamerSkipKey = "j"; //啟動鍵J
const gamerOPTime = 90; //跳過長度
const gamerVideoRate = 1.5; //影片速度

const fullScanKey = "f"; //全螢幕切換
const autoNext = true; //自動切換下一集

let gamerVideo: HTMLVideoElement | undefined = undefined;
let fsi = null;
let snArray: number[] = [];

function initVideo(videoI: HTMLVideoElement) {
    videoI.playbackRate = gamerVideoRate;
    getSnList();
}

function getSnList() {
    snArray = [];
    unsafeWindow.$(".season ul li a").each(function () {
        var href = unsafeWindow.$(this).attr('href');
        var sn = href?.split('=')[1];
        if (sn) {
            snArray.push(parseInt(sn, 10));
        }
    });
}

function goToNextPage() {
    const currentPageIndex = getCurrentPage();
    if (currentPageIndex >= 0 && currentPageIndex < snArray.length - 1) {
        const nextSN = snArray[currentPageIndex + 1];
        window.location.href = '?sn=' + nextSN;
    } else {
        console.log('已經是最後一頁了，無法轉到下一頁。');
    }
}

function getCurrentPage() {
    var currentSN = window.location.search.split('=')[1];
    return snArray.indexOf(parseInt(currentSN, 10));
}

const gamerInterval = setInterval(() => {
    gamerVideo = document.getElementById('ani_video_html5_api') as HTMLVideoElement;
    if (!unsafeWindow.$) {
        return;
    }
    const adultClick = unsafeWindow.$._data(unsafeWindow.$("#adult")[0], "events").click;
    if (gamerVideo && adultClick && adultClick.length !== 0) {
        clearInterval(gamerInterval);
        adultClick[0].handler(); //同意撥放
        gamerVideo.addEventListener('play', function () {
            initVideo(gamerVideo as HTMLVideoElement);
        });
        gamerVideo.addEventListener('ended', function () {
            if (autoNext) {
                goToNextPage();
            }
        });
    }
}, 1000)


document.addEventListener('keydown', function (event) {
    if (event.key.toLocaleLowerCase() === gamerSkipKey && gamerVideo) {
        gamerVideo.currentTime += gamerOPTime;
    }
    if (event.key.toLocaleLowerCase() === fullScanKey) {
        unsafeWindow.$(".vjs-fullscreen-control").trigger("click");
    }
})