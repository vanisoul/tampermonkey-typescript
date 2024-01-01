// ==UserScript==
// @name         iqiyi tools
// @version      0.1
// @description  iqiyi快轉
// @author       Vanisoul
// @match        https://www.iq.com/*
// @license MIT
// @namespace https://greasyfork.org/users/429936
// ==/UserScript==

const iqiyiSkipKey = "j"; //啟動鍵J
const iqiyiOPTime = 90; //跳過長度

let iqiyiVideo: HTMLVideoElement | undefined = undefined;

const iqiyiInterval = setInterval(() => {
    var playerContainer = document.querySelector('.iqp-player-g.iqp-player.iqp-player-pc');
    var selectorVideo = playerContainer ? playerContainer.querySelector('video') : null;

    if (selectorVideo) {
        iqiyiVideo = selectorVideo;
        clearInterval(iqiyiInterval);
    }
}, 1000)


document.addEventListener('keydown', function (event) {
    if (event.key.toLocaleLowerCase() === iqiyiSkipKey && iqiyiVideo) {
        iqiyiVideo.currentTime += iqiyiOPTime;
    }
})