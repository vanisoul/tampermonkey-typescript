// ==UserScript==
// @name           aliyun-swagger tools
// @version        0.0.1
// @description    私人服務 aliyun-swagger tools
// @author         Vanisoul
// @match          https://aliyun.vanisoul.com/*
// @license        MIT
// @namespace      https://greasyfork.org/users/429936
// ==/UserScript==

(function() {
    "use strict";
    function bindingClickTrigger(querySelector = ".opblock-control-arrow", triggerFunction) {
        const elements = document.querySelectorAll(querySelector);
        elements.forEach((element => {
            element.addEventListener("click", (() => {
                console.log(`clicked : ${querySelector}`);
                triggerFunction();
            }));
        }));
        return elements.length !== 0;
    }
    function changeApiKey(apiKey, selector = 'input[placeholder="xApiKey"]') {
        const inputElements = document.querySelectorAll(selector);
        inputElements.forEach((inputElement => {
            inputElement.value = apiKey;
            inputElement.setAttribute("value", apiKey);
        }));
        return inputElements.length !== 0;
    }
    const bindingChangeApiKey = () => {
        const urlParams = new URLSearchParams(window.location.search);
        const xApiKey = urlParams.get("xApiKey") || "";
        const interval = setInterval((() => {
            const success = changeApiKey(xApiKey);
            if (success) {
                clearInterval(interval);
            }
        }), 1500);
    };
    const initInterval = setInterval((() => {
        const success = bindingClickTrigger(".opblock-control-arrow, .opblock-summary-control", (() => {
            const tryBtnInterval = setInterval((() => {
                const success = bindingClickTrigger(".try-out__btn", bindingChangeApiKey);
                if (success) {
                    clearInterval(tryBtnInterval);
                }
            }));
        }));
        if (success) {
            clearInterval(initInterval);
        }
    }), 1500);
})();
