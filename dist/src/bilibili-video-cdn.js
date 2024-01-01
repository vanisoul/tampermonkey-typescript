// ==UserScript==
// @name           bilibili Video CDN
// @version        1.0.0
// @description    change bilibili video CDN URL
// @author         Vanisoul
// @match          https://www.bilibili.com/*
// @license        MIT
// @namespace      https://greasyfork.org/users/429936
// @grant          GM_registerMenuCommand
// @grant          GM_setValue
// @grant          GM_getValue
// ==/UserScript==

!function(){"use strict";const e=/^https:\/\/[a-z.-\d]*(bilivideo.com)/i,o=/^https:\/\/upos[a-z.-\d]*(akamaized.net)/i,i=["upos-sz-mirrorks3.bilivideo.com","upos-sz-mirrorks3b.bilivideo.com","upos-sz-mirrorks3c.bilivideo.com","upos-sz-mirrorks32.bilivideo.com","upos-sz-mirrorcos.bilivideo.com","upos-sz-mirrorcosb.bilivideo.com","upos-sz-mirrorbos.bilivideo.com","upos-sz-mirrorhw.bilivideo.com","upos-sz-mirrorhwb.bilivideo.com","upos-sz-upcdnbda2.bilivideo.com","upos-sz-upcdnws.bilivideo.com","upos-sz-upcdnhw.bilivideo.com","upos-tf-all-js.bilivideo.com","cn-hk-eq-bcache-01.bilivideo.com","upos-hz-mirrorakam.akamaized.net","upos-sz-mirrorali.bilivideo.com","upos-sz-mirroraliov.bilivideo.com","upos-sz-mirror08h.bilivideo.com"],t=["upos-sz-mirror08h.bilivideo.com"];GM_registerMenuCommand("選擇 CDN",(function(){const e=GM_getValue("selectedCDNs",t),o=document.createElement("div");o.style.position="absolute",o.style.top="50%",o.style.left="50%",o.style.transform="translate(-50%, -50%)",o.style.backgroundColor="white",o.style.padding="20px",o.style.border="1px solid black",o.style.boxShadow="0px 0px 10px rgba(0,0,0,0.5)",o.style.zIndex="1000",o.innerHTML="<h3>選擇 CDN</h3>",i.forEach((i=>{const t=document.createElement("input");t.type="checkbox",t.id=i,t.checked=e.includes(i);const s=document.createElement("label");s.htmlFor=i,s.textContent=i,o.appendChild(t),o.appendChild(s),o.appendChild(document.createElement("br"))}));const s=document.createElement("button");s.textContent="保存設置",s.onclick=function(){let e=i.filter((e=>{var o;return null===(o=document.getElementById(e))||void 0===o?void 0:o.checked}));GM_setValue("selectedCDNs",e),alert("設置已保存"),o.remove()},o.appendChild(s),document.body.appendChild(o)}));const s=XMLHttpRequest.prototype.open;XMLHttpRequest.prototype.open=function(){const i=GM_getValue("selectedCDNs",t),[r,l,c,n,d]=arguments;if(!(e.test(l)||o.test(l)))return s.apply(this,[r,l,c,n,d]);const p=new URL(l);if(i.includes(p.host))return s.apply(this,[r,l,c,n,d]);{const e=i[Math.floor(Math.random()*i.length)];return p.host=e,s.apply(this,[r,p.href,c,n,d])}}}();
