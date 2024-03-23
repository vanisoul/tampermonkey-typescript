// ==UserScript==
// @name         dexscreener tools
// @version      0.0.1
// @description  dexscreener tools
// @author       Vanisoul
// @match        https://dexscreener.com/*
// @license      MIT
// @namespace    https://greasyfork.org/users/429936
// ==/UserScript==

import React, { useEffect } from "react";
import { appendComponentToElement } from "@/lib/react-mount-after";

import { useGmValue } from "@/composable/use-value";
import { useGmMenu } from "@/composable/use-menu";

const App = () => {
    const defaultMakerAddress = "";
    const { data: makerAddress, updateData: setMakerAddress } =
        useGmValue("maker", defaultMakerAddress);

    useGmMenu("設定自動 maker 地址", () => {
        const newMaker = prompt("輸入 maker 地址 (留空代表取消自動 maker 功能):", makerAddress);
        if (newMaker === null) {
            return;
        }

        if (newMaker) {
            alert("已設定 maker 地址為：" + newMaker);
            setMakerAddress(newMaker);
            changeMaker(newMaker, true);
        } else {
            alert("已取消自動 maker 功能");
            setMakerAddress("");
        }
    });

    function changeMaker(maker:string, force = false) {
        // 解析當前 URL
        const url = new URL(window.location.href);

        // 強制模式
        if (force) {
            // 添加 maker 參數, 如果 maker 為空則移除 maker 參數
            if (maker) {
                url.searchParams.set('maker', maker);
            } else {
                url.searchParams.delete('maker');
            }
            // 重定向到新的 URL
            window.location.href = url.toString();
            return;
        }

        // 一般模式
        if (!url.searchParams.has('maker') && maker) {
            // 如果沒有，添加 maker 參數
            url.searchParams.append('maker', maker);
            // 重定向到新的 URL
            window.location.href = url.toString();
        }
    }

    useEffect(() => {
        changeMaker(makerAddress);
    }, [makerAddress]);

    return <div />;
}

const mountInterval = setInterval(() => {
    const success = appendComponentToElement(App, 'body');
    if (success) {
        clearInterval(mountInterval);
    }
}, 500);


