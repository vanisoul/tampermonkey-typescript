// ==UserScript==
// @name         ani-gamer-question
// @version      1.1.0
// @description  巴哈頁面新增動畫瘋答題按鈕，點擊後會跳出動畫瘋答題視窗
// @author       Vanisoul
// @match        https://www.gamer.com.tw/*
// @match        https://forum.gamer.com.tw/*
// @license      MIT
// @namespace    https://greasyfork.org/users/429936
// @updateHistory    1.0.1 (2024-01-04) 封裝 API, 邏輯未改變
// @updateHistory    1.1.0 (2024-01-12) 改為 react 版本 & 第三方元件使用 MUI
// ==/UserScript==

import React, { useState } from "react";

import { appendComponentToElement } from "@/lib/react-mount-after";
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
        <li>
            <ButtonDialog
                onCloseDialog={cleanQuestion}
                onOpenDialog={updateQuestion}
                renderDialog={renderDialog}
                buttonLabel={buttonLabel}
            />
        </li>
    );
}

const insertBtnInverval = setInterval(() => {
    const success = appendComponentToElement(ButtonDialogApp, ".TOP-my ul");
    if (success) {
        clearInterval(insertBtnInverval);
    }
}, 3000);

