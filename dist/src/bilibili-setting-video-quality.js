// ==UserScript==
// @name           bilibili Setting Video Quality
// @version        1.0.0
// @description    Setting Video Quality
// @author         Vanisoul
// @match          https://www.bilibili.com/*
// @license        MIT
// @namespace      https://greasyfork.org/users/429936
// @grant          GM_registerMenuCommand
// @grant          GM_setValue
// @grant          GM_getValue
// @grant          unsafeWindow
// ==/UserScript==

!function(){"use strict";const t=new class{};const e=setInterval((()=>{const r=unsafeWindow.DashPlayer;r&&function(e){const r=e.prototype.fire;r&&(e.prototype.fire=function(...i){t.dashPlayer=this,e.prototype.fire=r,r.apply(this,i)})}(r),t.dashPlayer&&clearInterval(e)}),1e3),r=GM_getValue("targetQualitys",[1080,720,480,360]),i=GM_getValue("highBitratePriority",!0);function o(){const e=setInterval((()=>{const o=t.dashPlayer;if(o){const t=o.player.getBitrateInfoListFor("video").map(((t,e)=>{const i=r.indexOf(t.height);return Object.assign(Object.assign({},t),{index:e,priority:i})})).filter((t=>-1!==t.priority)).sort(((t,e)=>i?e.bitrate-t.bitrate:t.bitrate-e.bitrate)).sort(((t,e)=>t.priority-e.priority));if(0===t.length)return;const a=t[0].index;o.player.setQualityFor("video",a),o.player.setDefaultQualityFor("video",a),console.log(`hook set Quality ${JSON.stringify(t[0])}`),clearInterval(e)}}))}GM_registerMenuCommand("設置目標品質",(function(){const t=prompt("請輸入目標品質優先序, 逗點分隔（1080, 720, 480, 360）:",r.join(","));t&&(GM_setValue("targetQualitys",t.split(",").map((t=>parseInt(t,10)))),o(),alert("目標品質已設置為："+t))})),GM_registerMenuCommand("設置高比特率優先",(function(){const t=confirm("是否要設置高比特率優先？");GM_setValue("highBitratePriority",t),o(),alert("高比特率優先已"+(t?"開啟":"關閉"))})),o()}();
