// ==UserScript==
// @name         auto-qidian-login
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @author       Vanisoul
// @match        https://www.qidian.com/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=qidian.com
// @grant        none
// ==/UserScript==

(function () {
    const qiduanInterval = setInterval(() => {
        const signE = document.querySelector(".sign-out");
        if (!signE?.classList.contains("hidden")) {
            (document.querySelector("#login-btn") as HTMLInputElement).click();
            clearInterval(qiduanInterval);
        }
    }, 1000);
})();