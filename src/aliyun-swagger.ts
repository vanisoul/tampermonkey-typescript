// ==UserScript==
// @name             aliyun-swagger tools
// @version          0.0.1
// @description      私人服務 aliyun-swagger tools
// @author           Vanisoul
// @match            https://aliyun.vanisoul.com/*
// @license          MIT
// @namespace        https://greasyfork.org/users/429936
// ==/UserScript==

function bindingClickTrigger(
  querySelector: string = ".opblock-control-arrow",
  triggerFunction: () => void,
) {
  // 選取所有 class 為 querySelector 的元素
  const elements = document.querySelectorAll<HTMLElement>(querySelector);

  // 綁定點擊事件
  elements.forEach((element) => {
    element.addEventListener("click", () => {
      console.log(`clicked : ${querySelector}`);
      triggerFunction();
    });
  });
  return elements.length !== 0;
}

function changeApiKey(
  apiKey: string,
  selector: string = 'input[placeholder="xApiKey"]',
) {
  // 選取所有 placeholder 為 xApiKey 的輸入框
  const inputElements = document.querySelectorAll<HTMLInputElement>(selector);

  inputElements.forEach((inputElement) => {
    inputElement.value = apiKey;
    inputElement.setAttribute("value", apiKey);
  });

  return inputElements.length !== 0;
}

const bindingChangeApiKey = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const xApiKey = urlParams.get("xApiKey") || "";

  const interval = setInterval(() => {
    const success = changeApiKey(xApiKey);
    if (success) {
      clearInterval(interval);
    }
  }, 1500);
};

// 綁定 opblock-control-arrow 綁定成功則不再執行
const initInterval = setInterval(() => {
  const success = bindingClickTrigger(
    ".opblock-control-arrow, .opblock-summary-control",
    () => {
      // 當 opblock-control-arrow 點擊, 綁定 try-out__btn, 驅動 bindingChangeApiKey, 綁定成功則不再執行
      const tryBtnInterval = setInterval(() => {
        const success = bindingClickTrigger(
          ".try-out__btn",
          bindingChangeApiKey,
        );
        if (success) {
          clearInterval(tryBtnInterval);
        }
      });
    },
  );
  if (success) {
    clearInterval(initInterval);
  }
}, 1500);
