// ==UserScript==
// @name           iqiyi tools
// @version        0.1
// @description    iqiyi快轉
// @author         Vanisoul
// @match          https://www.iq.com/*
// @license        MIT
// @namespace      https://greasyfork.org/users/429936
// ==/UserScript==

!function(){"use strict";let e;const t=setInterval((()=>{var r=document.querySelector(".iqp-player-g.iqp-player.iqp-player-pc"),n=r?r.querySelector("video"):null;n&&(e=n,clearInterval(t))}),1e3);document.addEventListener("keydown",(function(t){"j"===t.key.toLocaleLowerCase()&&e&&(e.currentTime+=90)}))}();
