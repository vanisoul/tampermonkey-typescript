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

!function(){"use strict";let n,e=[];function t(n){n.playbackRate=1.5,e=[],unsafeWindow.$(".season ul li a").each((function(){var n=unsafeWindow.$(this).attr("href"),t=null==n?void 0:n.split("=")[1];t&&e.push(parseInt(t,10))}))}function o(){const n=(t=window.location.search.split("=")[1],e.indexOf(parseInt(t,10)));var t;if(n>=0&&n<e.length-1){const t=e[n+1];window.location.href="?sn="+t}else console.log("已經是最後一頁了，無法轉到下一頁。")}const a=setInterval((()=>{if(n=document.getElementById("ani_video_html5_api"),!unsafeWindow.$)return;const e=unsafeWindow.$._data(unsafeWindow.$("#adult")[0],"events").click;n&&e&&0!==e.length&&(clearInterval(a),e[0].handler(),n.addEventListener("play",(function(){t(n)})),n.addEventListener("ended",(function(){o()})))}),1e3);document.addEventListener("keydown",(function(e){"j"===e.key.toLocaleLowerCase()&&n&&(n.currentTime+=90),"f"===e.key.toLocaleLowerCase()&&unsafeWindow.$(".vjs-fullscreen-control").trigger("click")}))}();
