// ==UserScript==
// @name         bilibili Video CDN
// @version      1.0.0
// @description  change bilibili video CDN URL
// @author       Vanisoul
// @match        https://www.bilibili.com/*
// @license      MIT
// @namespace    https://greasyfork.org/users/429936
// @grant        GM_registerMenuCommand
// @grant        GM_setValue
// @grant        GM_getValue
// ==/UserScript==

const bilivideoRegex = /^https:\/\/[a-z.-\d]*(bilivideo.com)/i;
const akamaizedRegex = /^https:\/\/upos[a-z.-\d]*(akamaized.net)/i;

const poolCdns = [
    'upos-sz-mirrorks3.bilivideo.com',
    'upos-sz-mirrorks3b.bilivideo.com',
    'upos-sz-mirrorks3c.bilivideo.com',
    'upos-sz-mirrorks32.bilivideo.com',
    'upos-sz-mirrorcos.bilivideo.com',
    'upos-sz-mirrorcosb.bilivideo.com',
    'upos-sz-mirrorbos.bilivideo.com',
    'upos-sz-mirrorhw.bilivideo.com',
    'upos-sz-mirrorhwb.bilivideo.com',
    'upos-sz-upcdnbda2.bilivideo.com',
    'upos-sz-upcdnws.bilivideo.com',
    'upos-sz-upcdnhw.bilivideo.com',
    'upos-tf-all-js.bilivideo.com',
    'cn-hk-eq-bcache-01.bilivideo.com',
    'upos-hz-mirrorakam.akamaized.net',
    'upos-sz-mirrorali.bilivideo.com',
    'upos-sz-mirroraliov.bilivideo.com',
    'upos-sz-mirror08h.bilivideo.com',
];

// 預設選中的 CDN
const defaultSelectedCDNs = [
    'upos-sz-mirror08h.bilivideo.com',  // 假設這是預設選中的 CDN
];

// 註冊菜單命令
GM_registerMenuCommand('選擇 CDN', chooseCDNs);

function chooseCDNs() {
    const savedCDNs = GM_getValue('selectedCDNs', defaultSelectedCDNs);

    const dialog = document.createElement('div');
    dialog.style.position = 'absolute';        // 絕對定位
    dialog.style.top = '50%';                  // 垂直居中
    dialog.style.left = '50%';                 // 水平居中
    dialog.style.transform = 'translate(-50%, -50%)'; // 調整位置以準確居中
    dialog.style.backgroundColor = 'white';    // 背景色
    dialog.style.padding = '20px';             // 內邊距
    dialog.style.border = '1px solid black';   // 邊框
    dialog.style.boxShadow = '0px 0px 10px rgba(0,0,0,0.5)'; // 陰影效果
    dialog.style.zIndex = "1000";                // 確保在最前面

    dialog.innerHTML = '<h3>選擇 CDN</h3>';

    poolCdns.forEach(cdn => {
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = cdn;
        checkbox.checked = savedCDNs.includes(cdn);
        const label = document.createElement('label');
        label.htmlFor = cdn;
        label.textContent = cdn;

        dialog.appendChild(checkbox);
        dialog.appendChild(label);
        dialog.appendChild(document.createElement('br'));
    });

    const saveButton = document.createElement('button');
    saveButton.textContent = '保存設置';
    saveButton.onclick = function () {
        let selectedCDNs = poolCdns.filter(cdn => (document.getElementById(cdn) as HTMLInputElement)?.checked);
        GM_setValue('selectedCDNs', selectedCDNs);
        alert('設置已保存');
        dialog.remove();
    };
    dialog.appendChild(saveButton);
    document.body.appendChild(dialog);
}

const httpRequestOriginOpen = XMLHttpRequest.prototype.open;
XMLHttpRequest.prototype.open = function () {
    const savedCDNs = GM_getValue('selectedCDNs', defaultSelectedCDNs);

    const [method, url, async, user, password] = arguments;
    const isBiliBiliVideo = bilivideoRegex.test(url) || akamaizedRegex.test(url);
    if (!isBiliBiliVideo) {
        return httpRequestOriginOpen.apply(this, [method, url, async, user, password]);
    }
    const videoUrl = new URL(url);
    const isGoodUrl = savedCDNs.includes(videoUrl.host);
    if (isGoodUrl) {
        return httpRequestOriginOpen.apply(this, [method, url, async, user, password]);
    } else {
        const goodUrl = savedCDNs[Math.floor(Math.random() * savedCDNs.length)];
        videoUrl.host = goodUrl;
        return httpRequestOriginOpen.apply(this, [method, videoUrl.href, async, user, password]);
    }
};