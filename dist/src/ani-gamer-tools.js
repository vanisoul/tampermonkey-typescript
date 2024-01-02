// ==UserScript==
// @name           ani gamer tools
// @version        1.0.0
// @description    動畫瘋, 自動撥放, J 鍵跳過 90S, 自動設定影片速度
// @author         Vanisoul
// @match          https://ani.gamer.com.tw/*
// @license        MIT
// @namespace      https://greasyfork.org/users/429936
// @grant          unsafeWindow
// ==/UserScript==

!function(){"use strict";let e,n=[];function t(e){e.playbackRate=1.5,n=[],unsafeWindow.$(".season ul li a").each((function(){var e=unsafeWindow.$(this).attr("href"),t=e?.split("=")[1];t&&n.push(parseInt(t,10))}))}function o(){const e=(t=window.location.search.split("=")[1],n.indexOf(parseInt(t,10)));var t;if(e>=0&&e<n.length-1){const t=n[e+1];window.location.href="?sn="+t}else console.log("已經是最後一頁了，無法轉到下一頁。")}const a=setInterval((()=>{if(e=document.getElementById("ani_video_html5_api"),!unsafeWindow.$)return;const n=unsafeWindow.$._data(unsafeWindow.$("#adult")[0],"events").click;e&&n&&0!==n.length&&(clearInterval(a),n[0].handler(),e.addEventListener("play",(function(){t(e)})),e.addEventListener("ended",(function(){o()})))}),1e3);document.addEventListener("keydown",(function(n){"j"===n.key.toLocaleLowerCase()&&e&&(e.currentTime+=90),"f"===n.key.toLocaleLowerCase()&&unsafeWindow.$(".vjs-fullscreen-control").trigger("click")}))}();
