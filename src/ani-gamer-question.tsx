// ==UserScript==
// @name         ani-gamer-question
// @version      1.2.0
// @description  巴哈頁面新增動畫瘋答題按鈕，點擊後會跳出動畫瘋答題視窗
// @author       Vanisoul
// @match        https://www.gamer.com.tw/*
// @match        https://forum.gamer.com.tw/*
// @license      MIT
// @namespace    https://greasyfork.org/users/429936
// @updateHistory    1.0.1 (2024-01-04) 封裝 API, 邏輯未改變
// @updateHistory    1.1.0 (2024-01-12) 改為 react 版本 & 第三方元件使用 MUI
// @updateHistory    1.2.0 (2025-05-30) 適配巴哈姆特新版網站，更新掛載點到左側選單動畫瘋項目附近
// ==/UserScript==

import React, { useState } from "react";

import { appendComponentToElement, insertItemAfterElement } from "@/lib/react-mount-after";
import { ButtonDialog } from "@/component/button-dialog";

import { GamerAPI } from "@/service/gamer-api";

import { SelectOptionComponent } from "@/component/select-option-component";

function ButtonDialogApp() {
    const gamerAPI = new GamerAPI();
    const [questionTitle, setQuestionTitle] = useState("載入中............");
    const [question, setQuestion] = useState("");
    const [options, setOptions] = useState<string[]>([]);
    const [questionToken, setQuestionToken] = useState("");

    const selectOption = async (idx: number, _: string) => {
        const result = await gamerAPI.sendAnswer(questionToken, idx + 1);
        if ('error' in result) {
            setQuestionTitle("");
            setQuestion(result.msg);
            setOptions([]);
            setQuestionToken("");
        } else {
            setQuestionTitle("");
            setQuestion(result.gift);
            setOptions([]);
            setQuestionToken("");
        }
    };

    const renderDialog = () => (
        <li className="sidenav-section__item">
            <SelectOptionComponent
                onSelectOption={selectOption}
                renderTitle={() => (
                    <>
                        <b><div>{questionTitle}</div></b>
                        <br />
                        <div>{question}</div>
                        <br />
                    </>
                )}
                options={options}
            />
        </li>
    );

    const buttonLabel = "動畫瘋答題";

    const updateQuestion = async () => {
        const result = await gamerAPI.getQuestion();
        if ('error' in result) {
            setQuestionTitle("");
            setQuestion(result.msg);
            setOptions([]);
            setQuestionToken("");
        } else {
            setQuestionTitle(result.game);
            setQuestion(result.question);
            setOptions([result.a1, result.a2, result.a3, result.a4]);
            setQuestionToken(result.token);
        }
    };

    const cleanQuestion = () => {
        setQuestionTitle("載入中............");
        setQuestion("");
        setOptions([]);
        setQuestionToken("");
    };

    return (
        <ButtonDialog
            onCloseDialog={cleanQuestion}
            onOpenDialog={updateQuestion}
            renderDialog={renderDialog}
            buttonLabel={buttonLabel}
            useScopedCssBaseline={false}
            customButtonRender={() => (
                <a href="#" className="sidenav-section__link" onClick={(e) => e.preventDefault()} style={{ textDecoration: 'none' }}>
                    <div className="sidenav__icon service__icon icon-ani"></div>
                    <p className="sidenav-section__title">動畫瘋答題</p>
                </a>
            )}
        />
    );
}

const parentElement = document.createElement('li');
parentElement.className = 'sidenav-section__item';

const insertBtnInterval = setInterval(() => {
    // 方案1: 尋找動畫瘋項目並在其後插入
    const aniGamerLink = document.querySelector('a[href="https://ani.gamer.com.tw"]');
    const aniGamerItem = aniGamerLink?.closest('li');

    if (aniGamerItem && aniGamerItem.parentNode) {
        const success = insertItemAfterElement(ButtonDialogApp, parentElement, aniGamerItem);
        if (success) {
            clearInterval(insertBtnInterval);
            console.log('動畫瘋答題按鈕已成功掛載到動畫瘋項目後');
            return;
        }
    }

    // 方案2: 備選位置 - 服務列表末尾
    const serviceList = document.querySelector('.sidenav-section__row');
    if (serviceList) {
        const success = appendComponentToElement(ButtonDialogApp, ".sidenav-section__row");
        if (success) {
            clearInterval(insertBtnInterval);
            console.log('動畫瘋答題按鈕已成功掛載到服務列表末尾');
            return;
        }
    }

    console.log('正在尋找合適的掛載點...');
}, 3000);

