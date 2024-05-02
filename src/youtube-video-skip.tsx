// ==UserScript==
// @name         youtube Video Skip
// @version      3.1.0
// @description  youtube Video Skip by press H key, default skip 90 seconds, you can change it in the menu.
// @author       Vanisoul
// @match        https://www.youtube.com/*
// @license      MIT
// @namespace    https://greasyfork.org/users/429936
// ==/UserScript==

import React, { useEffect } from "react";
import { appendComponentToElement } from "@/lib/react-mount-after";

import { useGmValue } from "@/composable/use-value";
import { useGmMenu } from "@/composable/use-menu";

const App = () => {
  const { data: triggerKey, updateData: updateTriggerKey } = useGmValue(
    "triggerKey",
    "h",
  );
  const { data: OPTime, updateData: updateOPTime } = useGmValue("OPTime", 90);

  useGmMenu("設置觸發按鈕", () => {
    const setKey = prompt("請輸入觸發鍵", triggerKey);
    if (setKey) {
      // 判斷只可以輸入一個字
      if (setKey.length > 1) {
        alert("只能輸入一個字");
        return;
      }
      updateTriggerKey(setKey);
      alert(`已設定觸發鍵為 ${setKey}`);
    }
  });

  useGmMenu("設置跳過時間", () => {
    var OPTimeString = prompt("請輸入新的跳過時間:", OPTime.toString());
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
      if (event.key.toLocaleLowerCase() === triggerKey) {
        const videoElement = document.querySelector(
          "#movie_player > div.html5-video-container > video",
        ) as HTMLVideoElement;
        videoElement.currentTime += OPTime;
      }
    }

    document.addEventListener("keydown", playerSeek);
    return () => {
      document.removeEventListener("keydown", playerSeek);
    };
  }, [triggerKey, OPTime]);

  return <div />;
};

const mountInterval = setInterval(() => {
  const success = appendComponentToElement(App, "body");
  if (success) {
    clearInterval(mountInterval);
  }
}, 3000);
