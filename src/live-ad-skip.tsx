// ==UserScript==
// @name         line tv skip ad
// @version      0.0.1
// @description  line tv skip ad
// @author       Vanisoul
// @match        https://www.linetv.tw/*
// @license      MIT
// @namespace    https://greasyfork.org/users/429936
// ==/UserScript==

function removeElementsByClass() {
  // 獲取所有 class 為 player_ima-ad-container 的元素
  const adContainers = document.getElementsByClassName(
    "player_ima-ad-container",
  ) as HTMLCollectionOf<HTMLElement>;
  while (adContainers.length > 0) {
    adContainers[0].parentNode?.removeChild(adContainers[0]);
  }

  // 獲取所有 class 為 vjs-overlay-pause-ad-pc 的元素
  const overlayAds = document.getElementsByClassName(
    "vjs-overlay-pause-ad-pc",
  ) as HTMLCollectionOf<HTMLElement>;
  while (overlayAds.length > 0) {
    overlayAds[0].parentNode?.removeChild(overlayAds[0]);
  }
}

// 每秒檢查一次
setInterval(removeElementsByClass, 1000);
