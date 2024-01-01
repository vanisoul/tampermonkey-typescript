// ==UserScript==
// @name           rotate-screen
// @namespace      http://tampermonkey.net/
// @version        1.0.0
// @author         Vanisoul
// @description    旋轉網頁, Ctrl + Alt + 方向鍵
// @match          *://*/*
// @grant          none
// ==/UserScript==

!function(){"use strict";function t(t){const e=document.documentElement.clientWidth||window.innerWidth,o=document.documentElement.clientHeight||window.innerHeight;let n=document.querySelector(".rotate-container");if(!n){for(n=document.createElement("div"),n.classList.add("rotate-container");document.body.firstChild;)n.appendChild(document.body.firstChild);document.body.appendChild(n)}n.style.cssText="",90===t||-90===t?(n.style.width=`${o}px`,n.style.height=`${e}px`,n.style.maxWidth="100vh",n.style.maxHeight="100vw",n.style.overflow="auto",n.style.position="absolute",n.style.top="50%",n.style.left="50%",n.style.transform=`translate(-50%, -50%) rotate(${t}deg)`):180!==t&&-180!==t||(n.style.width=`${e}px`,n.style.height=`${o}px`,n.style.overflow="auto",n.style.position="absolute",n.style.top="50%",n.style.left="50%",n.style.transform=`translate(-50%, -50%) rotate(${t}deg)`)}document.addEventListener("keydown",(function(e){const o=e.ctrlKey,n=e.altKey;if(o&&n)switch(e.key){case"ArrowUp":t(180);break;case"ArrowDown":t(0);break;case"ArrowLeft":t(90);break;case"ArrowRight":t(-90)}}))}();
