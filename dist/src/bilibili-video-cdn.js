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

(function () {
    'use strict';

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
    const defaultSelectedCDNs = [
        'upos-sz-mirror08h.bilivideo.com',
    ];
    GM_registerMenuCommand('選擇 CDN', chooseCDNs);
    function chooseCDNs() {
        const savedCDNs = GM_getValue('selectedCDNs', defaultSelectedCDNs);
        const dialog = document.createElement('div');
        dialog.style.position = 'absolute';
        dialog.style.top = '50%';
        dialog.style.left = '50%';
        dialog.style.transform = 'translate(-50%, -50%)';
        dialog.style.backgroundColor = 'white';
        dialog.style.padding = '20px';
        dialog.style.border = '1px solid black';
        dialog.style.boxShadow = '0px 0px 10px rgba(0,0,0,0.5)';
        dialog.style.zIndex = "1000";
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
            let selectedCDNs = poolCdns.filter(cdn => { var _a; return (_a = document.getElementById(cdn)) === null || _a === void 0 ? void 0 : _a.checked; });
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
        }
        else {
            const goodUrl = savedCDNs[Math.floor(Math.random() * savedCDNs.length)];
            videoUrl.host = goodUrl;
            return httpRequestOriginOpen.apply(this, [method, videoUrl.href, async, user, password]);
        }
    };

})();
