// ==UserScript==
// @name           bilibili Video Skip
// @version        3.0.0
// @description    bilibili Video Skip by press J key, default skip 90 seconds, you can change it in the menu.
// @author         Vanisoul
// @match          https://www.bilibili.com/*
// @license        MIT
// @namespace      https://greasyfork.org/users/429936
// @grant          GM_registerMenuCommand
// @grant          GM_setValue
// @grant          GM_getValue
// @grant          unsafeWindow
// ==/UserScript==

!function(){"use strict";const e=new class{};const t=setInterval((()=>{const r=unsafeWindow.DashPlayer;r&&function(t){const r=t.prototype.fire;r&&(t.prototype.fire=function(...o){e.dashPlayer=this,t.prototype.fire=r,r.apply(this,o)})}(r),e.dashPlayer&&clearInterval(t)}),1e3);let r=GM_getValue("triggerKey","j");let o=GM_getValue("OPTime",90);GM_registerMenuCommand("設置觸發按鈕",(function(){var e=prompt("請輸入新的觸發按鈕:",r);e&&(GM_setValue("triggerKey",e.toLocaleLowerCase()),r=e.toLocaleLowerCase(),alert("觸發按鈕已更改為: "+r))})),GM_registerMenuCommand("設置跳過時間",(function(){var e=prompt("請輸入新的跳過時間:",o.toString());e&&(GM_setValue("OPTime",e),o=parseInt(e),alert("跳過時間已更改為: "+o))})),document.addEventListener("keydown",(function(t){const n=e.dashPlayer;if(n&&t.key.toLocaleLowerCase()===r&&n){const e=n.getCurrentTime();n.seek(e+o)}}))}();
