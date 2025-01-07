// ==UserScript==
// @name           line tv skip ad
// @version        0.0.1
// @description    line tv skip ad
// @author         Vanisoul
// @match          https://www.linetv.tw/*
// @license        MIT
// @namespace      https://greasyfork.org/users/429936
// ==/UserScript==

(function() {
    "use strict";
    function removeElementsByClass() {
        var _a, _b;
        var adContainers = document.getElementsByClassName("player_ima-ad-container");
        while (adContainers.length > 0) {
            (_a = adContainers[0].parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(adContainers[0]);
        }
        var overlayAds = document.getElementsByClassName("vjs-overlay-pause-ad-pc");
        while (overlayAds.length > 0) {
            (_b = overlayAds[0].parentNode) === null || _b === void 0 ? void 0 : _b.removeChild(overlayAds[0]);
        }
    }
    setInterval(removeElementsByClass, 1e3);
})();
