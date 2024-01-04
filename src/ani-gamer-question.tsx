// ==UserScript==
// @name         ani-gamer-question
// @version      1.0.1
// @description  巴哈頁面新增動畫瘋答題按鈕，點擊後會跳出動畫瘋答題視窗
// @author       Vanisoul
// @match        https://www.gamer.com.tw/*
// @match        https://forum.gamer.com.tw/*
// @license      MIT
// @namespace    https://greasyfork.org/users/429936
// @updateHistory    1.0.1 (2024-01-04) 封裝 API, 邏輯未改變
// ==/UserScript==

import { createApp, ref } from "vue";

import { mountAfter } from "@/lib/vue-mount-after";
import { ButtonDialog } from "@/component/button-dialog";

import { GamerAPI } from "@/service/gamer-api";

import { SelectOptionComponent } from "@/component/select-option-component";

const buttonDialog = createApp({
    setup() {
        const gamerAPI = new GamerAPI();

        const questionTitle = ref("載入中............");
        const question = ref("");
        const options = ref<string[]>([]);
        const questionToken = ref("");

        async function selectOption(idx: number, _: string) {
            const result = await gamerAPI.sendAnswer(questionToken.value, idx + 1);
            if ('error' in result) {
                // GamerErrorResult
                questionTitle.value = "";
                question.value = result.msg;
                options.value = [];
                questionToken.value = "";
            } else {
                // AnswerResult
                questionTitle.value = "";
                question.value = result.gift;
                options.value = [];
                questionToken.value = "";
            }
        }

        const renderDialog = () => (
            <SelectOptionComponent
                onSelectOption={selectOption}
                renderTitle={() => <><b><div>{questionTitle.value}</div></b><br /><div>{question.value}</div><br /></>}
                options={options.value} />
        );
        const buttonLabel = "動畫瘋答題";

        async function updateQuestion() {
            const result = await gamerAPI.getQuestion();
            if ('error' in result) {
                // GamerErrorResult
                questionTitle.value = "";
                question.value = result.msg;
                options.value = [];
                questionToken.value = "";
            } else {
                // QuestionResult
                questionTitle.value = result.game;
                question.value = result.question;
                options.value = [result.a1, result.a2, result.a3, result.a4];
                questionToken.value = result.token;
            }
        }

        function cleanQuestion() {
            questionTitle.value = "載入中............";
            question.value = "";
            options.value = [];
            questionToken.value = "";
        }

        return () => <li><ButtonDialog onCloseDialog={cleanQuestion} onOpenDialog={updateQuestion} renderDialog={renderDialog} buttonLabel={buttonLabel}></ButtonDialog></li>
    },
});

const insertBtnInverval = setInterval(() => {
    const success = mountAfter(buttonDialog, ".TOP-my ul > li:last-child");
    if (success) {
        clearInterval(insertBtnInverval);
    }
}, 3000);

