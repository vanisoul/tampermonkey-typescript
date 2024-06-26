// ==UserScript==
// @name         bilibili Video CDN
// @version      1.1.1
// @description  change bilibili video CDN URL
// @author       Vanisoul
// @match        https://www.bilibili.com/*
// @license      MIT
// @namespace    https://greasyfork.org/users/429936
// @updateHistory    1.1.0 (2024-01-13) 改為 react 版本
// @updateHistory    1.1.1 (2024-06-26) 增加 Reset 設定, 方便關閉時不用 disable 腳本, 並增加一個自定義欄位
// ==/UserScript==

import React, { useEffect } from "react";

import { useGmValue } from "@/composable/use-value";
import { useGmMenu } from "@/composable/use-menu";

import { appendComponentToElement } from "@/lib/react-mount-after";

const App = () => {
  const bilivideoRegex = /^https:\/\/[a-z.-\d]*(bilivideo.com)/i;
  const akamaizedRegex = /^https:\/\/upos[a-z.-\d]*(akamaized.net)/i;

  const poolCdns = [
    "upos-sz-mirrorks3.bilivideo.com",
    "upos-sz-mirrorks3b.bilivideo.com",
    "upos-sz-mirrorks3c.bilivideo.com",
    "upos-sz-mirrorks32.bilivideo.com",
    "upos-sz-mirrorcos.bilivideo.com",
    "upos-sz-mirrorcosb.bilivideo.com",
    "upos-sz-mirrorbos.bilivideo.com",
    "upos-sz-mirrorhw.bilivideo.com",
    "upos-sz-mirrorhwb.bilivideo.com",
    "upos-sz-upcdnbda2.bilivideo.com",
    "upos-sz-upcdnws.bilivideo.com",
    "upos-sz-upcdnhw.bilivideo.com",
    "upos-tf-all-js.bilivideo.com",
    "cn-hk-eq-bcache-01.bilivideo.com",
    "upos-hz-mirrorakam.akamaized.net",
    "upos-sz-mirrorali.bilivideo.com",
    "upos-sz-mirroraliov.bilivideo.com",
    "upos-sz-mirror08h.bilivideo.com",
  ];

  const { data: savedCDNs, updateData: updateSavedCDNs } = useGmValue<string[]>(
    "selectedCDNs",
    [],
  );
  useGmMenu("選擇 CDN", () => {
    const dialog = document.createElement("div");
    dialog.style.position = "absolute"; // 絕對定位
    dialog.style.top = "50%"; // 垂直居中
    dialog.style.left = "50%"; // 水平居中
    dialog.style.transform = "translate(-50%, -50%)"; // 調整位置以準確居中
    dialog.style.backgroundColor = "white"; // 背景色
    dialog.style.padding = "20px"; // 內邊距
    dialog.style.border = "1px solid black"; // 邊框
    dialog.style.boxShadow = "0px 0px 10px rgba(0,0,0,0.5)"; // 陰影效果
    dialog.style.zIndex = "1000"; // 確保在最前面

    dialog.innerHTML = "<h3>選擇 CDN</h3>";

    // 根據預設的 cdn 池 建立勾選表單
    poolCdns.forEach((cdn) => {
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.id = cdn;
      checkbox.checked = savedCDNs.includes(cdn);
      const label = document.createElement("label");
      label.htmlFor = cdn;
      label.textContent = cdn;

      dialog.appendChild(checkbox);
      dialog.appendChild(label);
      dialog.appendChild(document.createElement("br"));
    });

    // 最後加入一個自定義欄位 自由輸入
    const customInput = document.createElement("input");
    customInput.type = "text";
    customInput.placeholder = "請輸入自定義 CDN";
    customInput.style.marginTop = "10px"; // 設置上邊距為 10px

    dialog.appendChild(customInput); // 將輸入欄位添加到 dialog 中
    dialog.appendChild(document.createElement("br"));

    // 儲存按鈕行為
    const saveButton = document.createElement("button");
    saveButton.textContent = "保存設置";
    saveButton.onclick = function () {
      const selectedCDNs = poolCdns.filter((cdn) =>
        (document.getElementById(cdn) as HTMLInputElement)?.checked
      );

      // 如果自定義欄位有值 加入 selectedCDNs
      if (customInput.value.trim() !== "") {
        selectedCDNs.push(customInput.value.trim());
      }

      updateSavedCDNs(selectedCDNs);
      alert("設置已保存");
      dialog.remove();
    };
    dialog.appendChild(saveButton);

    // 重置按鈕行為
    const resetButton = document.createElement("button");
    resetButton.textContent = "清空設定";
    resetButton.onclick = function () {
      updateSavedCDNs([]);
      alert("設置已清空");
      dialog.remove();
    };
    dialog.appendChild(resetButton);

    // 附加 dialog
    document.body.appendChild(dialog);
  });

  // 當 savedCDNs 改變時, 重新設定 XMLHttpRequest.prototype.open
  useEffect(() => {
    const httpRequestOriginOpen = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function () {
      const [method, url, async, user, password] = arguments;

      // 不是 bilibili 影片目標
      const isBiliBiliVideo = bilivideoRegex.test(url) ||
        akamaizedRegex.test(url);
      if (!isBiliBiliVideo) {
        return httpRequestOriginOpen.apply(this, [
          method,
          url,
          async,
          user,
          password,
        ]);
      }

      // savedCDNs 為空則不改變目標
      if (savedCDNs.length === 0) {
        return httpRequestOriginOpen.apply(this, [
          method,
          url,
          async,
          user,
          password,
        ]);
      }

      const videoUrl = new URL(url);
      const isGoodUrl = savedCDNs.includes(videoUrl.host);
      if (isGoodUrl) {
        return httpRequestOriginOpen.apply(this, [
          method,
          url,
          async,
          user,
          password,
        ]);
      } else {
        const goodUrl = savedCDNs[Math.floor(Math.random() * savedCDNs.length)];
        videoUrl.host = goodUrl;
        return httpRequestOriginOpen.apply(this, [
          method,
          videoUrl.href,
          async,
          user,
          password,
        ]);
      }
    };
    return () => {
      XMLHttpRequest.prototype.open = httpRequestOriginOpen;
    };
  }, [savedCDNs]);

  return <div />;
};

const mountInterval = setInterval(() => {
  const success = appendComponentToElement(App, "body");
  if (success) {
    clearInterval(mountInterval);
  }
}, 3000);
