// ==UserScript==
// @name         ani gamer video
// @version      1.1.3
// @description  動畫瘋, 自動撥放, J 鍵跳過 90S, 自動設定影片速度, 隱藏觀看歷史
// @author       Vanisoul
// @match        https://ani.gamer.com.tw/*
// @license      MIT
// @namespace    https://greasyfork.org/users/429936
// @grant        unsafeWindow
// @updateHistory    1.0.1 (2024-01-04) 增加各種快捷鍵功能 & 新增時間設定選項 & 自動撥放啟用提示
// @updateHistory    1.0.2 (2024-01-06) 增加隱藏歷史觀看紀錄功能, 但是畫面會先出現在隱藏, 只是方便隱藏試看影片
// @updateHistory    1.1.0 (2024-01-13) 改為 react 版本 & 第三方元件使用 MUI
// @updateHistory    1.1.1 (2025-09-07) 修正自動同意問題 & 減少初始化時間 & 修正 lint 錯誤
// @updateHistory    1.1.2 (2025-09-07) 自動同意功能只要出現就點擊取消只執行一次 & 切換下一集功能採用點擊影片結束時的下一集按鈕
// @updateHistory    1.1.3 (2025-09-15) 下一集 改用每秒觸發
// ==/UserScript==

import React, { useEffect, useState } from "react";

import { appendComponentToElement } from "@/lib/react-mount-after";

import { useGmMenu } from "@/composable/use-menu";
import { useGmValue } from "@/composable/use-value";

const App = () => {
  const defaultGamerSkipKey = "j"; //啟動鍵J
  const { data: gamerSkipKey, updateData: updateGamerSkipKey } = useGmValue("gamerSkipKey", defaultGamerSkipKey);
  useGmMenu("設定跳過觸發鍵", () => {
    const key = prompt("請輸入跳過觸發鍵", gamerSkipKey);
    if (key) {
      // 判斷只可以輸入一個字
      if (key.length > 1) {
        alert("只能輸入一個字");
        return;
      }
      updateGamerSkipKey(key);
      alert(`已設定跳過觸發鍵為 ${key}`);
    }
  });

  const defaultGamerOPTime = 90; //跳過長度
  const { data: gamerOPTime, updateData: updateGamerOPTime } = useGmValue("gamerOPTime", defaultGamerOPTime);
  useGmMenu("設定跳過長度", () => {
    const time = prompt("請輸入跳過長度", gamerOPTime.toString());
    if (time) {
      // 判斷需要數字
      if (Number.isNaN(Number.parseInt(time, 10))) {
        alert("請輸入數字");
        return;
      }
      updateGamerOPTime(Number.parseInt(time, 10));
      alert(`已設定跳過長度為 ${time}`);
    }
  });

  const gamerVideoRatePool = [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2];
  const defaultGamerVideoRate = 1.5; //影片速度
  const { data: gamerVideoRate, updateData: updateGamerVideoRate } = useGmValue(
    "gamerVideoRate",
    defaultGamerVideoRate,
  );
  useGmMenu("設定影片速度", () => {
    const rate = prompt(`請輸入影片速度 [${gamerVideoRatePool.toString()}]`, gamerVideoRate.toString());
    if (rate) {
      // 判斷是否在 pool
      const rateNumber = Number.parseFloat(rate);
      if (gamerVideoRatePool.includes(rateNumber)) {
        updateGamerVideoRate(rateNumber);
        alert(`已設定影片速度為 ${rate}`);
      } else {
        alert(`請輸入正確的速度 [${gamerVideoRatePool.toString()}]`);
      }
    }
  });

  const defaultFullScanKey = "f"; //全螢幕切換
  const { data: fullScanKey, updateData: updateFullScanKey } = useGmValue("fullScanKey", defaultFullScanKey);
  useGmMenu("設定全螢幕切換鍵", () => {
    const key = prompt("請輸入全螢幕切換鍵", fullScanKey);
    if (key) {
      // 判斷只可以輸入一個字
      if (key.length > 1) {
        alert("只能輸入一個字");
        return;
      }
      updateFullScanKey(key);
      alert(`已設定全螢幕切換鍵為 ${key}`);
    }
  });

  const defaultAutoNext = true; //自動切換下一集
  const { data: autoNext, updateData: updateAutoNext } = useGmValue("autoNext", defaultAutoNext);
  useGmMenu("設定自動切換下一集", () => {
    const isAutoNext = confirm("是否啟用自動切換下一集");
    updateAutoNext(isAutoNext);
    alert(`已設定自動切換下一集功能 ${isAutoNext}`);
  });

  const defaultHideHistoryIds: number[] = []; //隱藏觀看紀錄
  const { data: hideHistoryIds, updateData: updateHideHistoryIds } = useGmValue(
    "hideHistoryIds",
    defaultHideHistoryIds,
  );
  useGmMenu("設定隱藏觀看紀錄", () => {
    const ids = prompt("請輸入要隱藏的觀看紀錄 影片 Sn , 分隔, EX : 12345, 54321", hideHistoryIds.join(","));
    if (ids === null) {
      return;
    }
    if (ids) {
      const idsArray = ids.split(",").map((id) => Number.parseInt(id.trim(), 10));
      updateHideHistoryIds(idsArray);
      alert(`已設定隱藏觀看紀錄 ${idsArray.toString()}`);
    } else {
      updateHideHistoryIds([]);
      alert("已取消隱藏觀看紀錄");
    }
  });

  const defaultAutoPlay = false; //自動同意撥放
  const { data: autoPlay, updateData: updateAutoPlay } = useGmValue("autoPlay", defaultAutoPlay);
  useGmMenu("設定自動同意撥放", () => {
    const isAutoPlay = confirm("是否啟用自動同意撥放");
    updateAutoPlay(isAutoPlay);
    alert(`已設定自動同意撥放功能 ${isAutoPlay}`);
  });

  // 雖然與渲染無關, 但是許多 useEffect 需要其依賴, 重新執行, 所以使用 useState
  const [aniVideo, setAniVidoe] = useState<HTMLVideoElement | undefined>(undefined);

  // 初始化 取得 video, 使用 setInterval 確保取得
  useEffect(() => {
    const interval = setInterval(() => {
      const video = document.getElementById("ani_video_html5_api") as HTMLVideoElement;
      if (video) {
        setAniVidoe(video);
        clearInterval(interval);
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  // 處理影片結束跳轉下一集
  useEffect(() => {
    function clickNextEpisodeButton() {
      const nextEpisodeButton = document.getElementById("nextEpisode") as HTMLButtonElement;
      if (nextEpisodeButton && nextEpisodeButton.offsetParent !== null) {
        nextEpisodeButton.click();
        return true;
      }
      return false;
    }

    function checkAndClickNext() {
      if (!aniVideo) {
        return;
      }

      // 檢查影片是否已結束或接近結束
      const duration = aniVideo.duration;
      const currentTime = aniVideo.currentTime;

      // 當影片剩餘時間少於 1 秒時觸發
      // if (duration && currentTime && duration - currentTime <= 1) {
      // 先嘗試點擊下一集按鈕
      if (clickNextEpisodeButton()) {
        return;
      }

      // 如果沒有找到下一集按鈕，顯示提醒
      console.log("未找到下一集按鈕");
      // }
    }

    if (autoNext && aniVideo) {
      // 每秒檢查一次
      const interval = setInterval(checkAndClickNext, 1000);

      return () => {
        clearInterval(interval);
      };
    }

    return () => {};
  }, [autoNext, aniVideo]);

  // 處理影片速度
  useEffect(() => {
    if (aniVideo) {
      aniVideo.playbackRate = gamerVideoRate;
    }
  }, [gamerVideoRate, aniVideo]);

  // 處理自動同意撥放
  useEffect(() => {
    function autoPlayMethod() {
      // 直接尋找並點擊「同意」按鈕
      const adultButton = document.getElementById("adult") as HTMLButtonElement;
      if (adultButton && adultButton.style.display !== "none") {
        adultButton.click();
        return true;
      }
      return false;
    }

    if (!autoPlay) {
      return;
    }

    // 持續監控，每 1 秒檢查一次是否出現同意按鈕
    autoPlayMethod();
    const interval = setInterval(() => {
      autoPlayMethod();
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [autoPlay]);

  // 處理隱藏觀看紀錄
  useEffect(() => {
    function triggerHideHistoryIds() {
      //  unsafeWindow.$ 是 jQuery
      // .user-watch-list .click-area 是觀看紀錄的 class 其中有 href 其 query string 有 sn
      // 符合隱藏條件 .user-watch-list 整個隱藏

      // 開始實作
      // 1. 先取得所有的觀看紀錄
      // 2. 判斷是否有要隱藏的
      // 3. 隱藏

      const historyList = unsafeWindow.$(".user-watch-list .click-area");
      if (historyList.length === 0) {
        return false;
      }
      if (hideHistoryIds.length === 0) {
        // 為 0 就把已隱藏都顯示
        historyList.each(function () {
          unsafeWindow.$(this).closest(".user-watch-list").show();
        });
        return false;
      }
      historyList.each(function () {
        const href = unsafeWindow.$(this).attr("href");
        const sn = Number.parseInt(href?.split("=")[1].trim() ?? "", 10);
        if (sn && hideHistoryIds.includes(sn)) {
          unsafeWindow.$(this).closest(".user-watch-list").hide();
        }
      });

      return true;
    }

    // 每 10 豪秒設定一次, 避免外部 DOM 還不存在
    const interval = setInterval(() => {
      triggerHideHistoryIds();
    }, 10);

    // 3 秒後停止
    setTimeout(() => {
      clearInterval(interval);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [hideHistoryIds]);

  // 影片跳過
  useEffect(() => {
    function skipVideo() {
      if (!aniVideo) {
        return;
      }
      aniVideo.currentTime += gamerOPTime;
    }

    function keyDownHandler(e: KeyboardEvent) {
      if (e.key === gamerSkipKey) {
        skipVideo();
      }
    }

    document.addEventListener("keydown", keyDownHandler);

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, [gamerSkipKey, gamerOPTime, aniVideo]);

  return <div />;
};

const mountInterval = setInterval(() => {
  const success = appendComponentToElement(App, "body");
  if (success) {
    clearInterval(mountInterval);
  }
}, 500);
