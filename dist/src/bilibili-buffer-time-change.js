// ==UserScript==
// @name           bilibili BufferTime Change
// @version        1.0.0
// @description    BufferTime Set 250s
// @author         Vanisoul
// @match          https://www.bilibili.com/*
// @license        MIT
// @namespace      https://greasyfork.org/users/429936
// @grant          GM_registerMenuCommand
// @grant          GM_setValue
// @grant          GM_getValue
// @grant          unsafeWindow
// ==/UserScript==

!function(){"use strict";const e=new class{};const t=setInterval((()=>{const r=unsafeWindow.DashPlayer;r&&function(t){const r=t.prototype.fire;r&&(t.prototype.fire=function(...o){e.dashPlayer=this,t.prototype.fire=r,r.apply(this,o)})}(r),e.dashPlayer&&clearInterval(t)}),1e3);let r=GM_getValue("triggerKey","v");let o=GM_getValue("bufferTime",250);function a(t){const r=setInterval((()=>{const o=e.dashPlayer;o&&(o.player.setBufferPruningInterval(3),o.player.setStableBufferTime(t),o.player.setBufferTimeAtTopQuality(t),o.player.setBufferTimeAtTopQualityLongForm(t),o.player.setBufferAheadToKeep(t+10),o.player.setBufferToKeep(3e4),console.log(`hook set buffer time ${t}`),clearInterval(r))}),1e3)}GM_registerMenuCommand("設置Buffer時間",(function(){var e=prompt("請輸入新的Buffer時間:",o.toString());e&&(GM_setValue("bufferTime",e),o=parseInt(e),a(o),alert("Buffer時間已更改為: "+o))})),GM_registerMenuCommand("設置查看目前 Buffer 按鈕",(function(){var e=prompt("請輸入新的觸發按鈕:",r);e&&(GM_setValue("triggerKey",e.toLocaleLowerCase()),r=e.toLocaleLowerCase(),alert("觸發按鈕已更改為: "+r))})),document.addEventListener("keydown",(function(t){if(t.key.toLocaleLowerCase()===r){const t=e.dashPlayer;console.log(`Now BufferLength : ${null==t?void 0:t.getBufferLength("video")}`)}})),a(o)}();
