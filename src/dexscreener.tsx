// ==UserScript==
// @name         dexscreener tools
// @version      0.0.1
// @description  dexscreener tools
// @author       Vanisoul
// @match        https://dexscreener.com/*
// @license      MIT
// @namespace    https://greasyfork.org/users/429936
// @updateHistory    0.0.2 (2024-03-24) 增加標籤對應地址紀錄功能
// ==/UserScript==

import React, { useEffect, useState } from "react";
import { appendComponentToElement } from "@/lib/react-mount-after";

import { useGmValue } from "@/composable/use-value";
import { useGmMenu } from "@/composable/use-menu";

import Dialog from '@mui/material/Dialog';

import { RecordTable } from "@/component/record-table";

import './css/tailwind.css';

const App = () => {
    type label = string;
    type address = string;

    // 預設地址的參數與改變地址的函數
    const defaultMakerAddress: address = "";
    const { data: makerAddress, updateData: setMakerAddress } =
        useGmValue<address>("maker", defaultMakerAddress);

    useGmMenu("快速選定 maker 地址", () => {
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

    // 紀錄地址大全的參數與改變紀錄地址的函數
    const [showRecordTableDialog, setShowRecordTableDialog] = useState(false);

    const defaultMakerRecord: Record<label, address> = {
        "自己": "ESQBJbEKRW7qvBY4YARpCvY7EEfimKX8xzdzMAn9fvZE",
        "big1": "DCAKuApAuZtVNYLk3KTAVW9GLWVvPbnb5CxxRRmVgcTr"
    };
    const { data: makerRecord, updateData: setMakerRecord } =
        useGmValue<Record<label, address>>("makerRecord", defaultMakerRecord);

    useGmMenu("管理 maker 紀錄", () => {
        setShowRecordTableDialog(true);
    });

    function renderRecordTableDialog() {
        return <RecordTable
            onChoose={(key) => {
                const newAddress = makerRecord[key];
                setMakerAddress(newAddress);
                setShowRecordTableDialog(false);
                changeMaker(newAddress, true);
            }}
            // onDelete={(key) => {
            //     const newMakerRecord = { ...makerRecord };
            //     delete newMakerRecord[key];
            //     setMakerRecord(newMakerRecord);
            // }}
            records={makerRecord}
        ></RecordTable>;
    }

    function changeMaker(maker: string, force = false) {
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

    return <>
        {
            showRecordTableDialog ? <Dialog
                title={`管理 maker, 目前選擇: ${makerAddress}`}
                className='tailwind'
                PaperProps={{
                    className: "max-w-4xl w-full p-4 overflow-auto",
                }}
                open={showRecordTableDialog}
                onClose={() => setShowRecordTableDialog(false)}
            >
                {renderRecordTableDialog()}
            </Dialog> : <></>
        }
    </>;
}

const mountInterval = setInterval(() => {
    const success = appendComponentToElement(App, 'body');
    if (success) {
        clearInterval(mountInterval);
    }
}, 500);


