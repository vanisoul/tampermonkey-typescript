// ==UserScript==
// @name         ani-gamer-question
// @version      1.3.0
// @description  巴哈頁面新增動畫瘋答題按鈕，點擊後會跳出動畫瘋答題視窗
// @author       Vanisoul
// @match        https://www.gamer.com.tw/*
// @match        https://forum.gamer.com.tw/*
// @license      MIT
// @namespace    https://greasyfork.org/users/429936
// @updateHistory    1.0.1 (2024-01-04) 封裝 API, 邏輯未改變
// @updateHistory    1.1.0 (2024-01-12) 改為 react 版本 & 第三方元件使用 MUI
// @updateHistory    1.2.0 (2025-05-30) 適配巴哈姆特新版網站，更新掛載點到左側選單動畫瘋項目附近
// @updateHistory    1.2.1 (2025-05-30) 優化 UX
// @updateHistory    1.3.0 (2025-05-30) 多網站適配：支援主站和論壇站不同的掛載方式
// ==/UserScript==

import React, { useState, useCallback } from "react";

import { appendComponentToElement, insertItemAfterElement } from "@/lib/react-mount-after";
import { ButtonDialog } from "@/component/button-dialog";
import { notify } from "@/component/notification";

import { GamerAPI } from "@/service/gamer-api";

import { SelectOptionComponent } from "@/component/select-option-component";
import AnimeIcon from './assets/serviceicon_anime.svg';

// 狀態管理介面
interface QuestionState {
    loading: boolean;
    error: string | null;
    success: string | null;
    questionTitle: string;
    question: string;
    options: string[];
    questionToken: string;
}

function ButtonDialogApp(mode: "gamer" | "forum") {
    const gamerAPI = new GamerAPI();

    // 統一的狀態管理
    const [state, setState] = useState<QuestionState>({
        loading: false,
        error: null,
        success: null,
        questionTitle: "",
        question: "",
        options: [],
        questionToken: ""
    });

    // 更新狀態的輔助函數
    const updateState = useCallback((updates: Partial<QuestionState>) => {
        setState(prev => ({ ...prev, ...updates }));
    }, []);

    // 選擇選項處理
    const selectOption = useCallback(async (idx: number, _: string) => {
        if (state.loading || !state.questionToken) return;

        updateState({ loading: true, error: null, success: null });

        try {
            const result = await gamerAPI.sendAnswer(state.questionToken, idx + 1);

            if ('error' in result) {
                updateState({
                    loading: false,
                    error: result.msg,
                    questionTitle: "",
                    question: "",
                    options: [],
                    questionToken: ""
                });
            } else {
                updateState({
                    loading: false,
                    success: result.gift,
                    questionTitle: "",
                    question: "",
                    options: [],
                    questionToken: ""
                });

                // 成功後延遲清除成功訊息
                setTimeout(() => {
                    updateState({ success: null });
                }, 5000);
            }
        } catch (error) {
            updateState({
                loading: false,
                error: "網路錯誤，請稍後再試",
                questionTitle: "",
                question: "",
                options: [],
                questionToken: ""
            });
        }
    }, [state.loading, state.questionToken, gamerAPI, updateState]);

    // 渲染對話框內容
    const renderDialog = useCallback(() => (
        <SelectOptionComponent
            onSelectOption={selectOption}
            renderTitle={() => (
                <>
                    <b><div>{state.questionTitle}</div></b>
                    <br />
                    <div>{state.question}</div>
                    <br />
                </>
            )}
            options={state.options}
            loading={state.loading}
            error={state.error}
            success={state.success}
            questionTitle={state.questionTitle}
            question={state.question}
        />
    ), [selectOption, state]);

    const buttonLabel = "動畫瘋答題";

    // 載入問題
    const updateQuestion = useCallback(async () => {
        updateState({
            loading: true,
            error: null,
            success: null,
            questionTitle: "",
            question: "",
            options: [],
            questionToken: ""
        });

        try {
            const result = await gamerAPI.getQuestion();

            if ('error' in result) {
                updateState({
                    loading: false,
                    error: result.msg,
                    questionTitle: "",
                    question: "",
                    options: [],
                    questionToken: ""
                });
            } else {
                updateState({
                    loading: false,
                    questionTitle: result.game,
                    question: result.question,
                    options: [result.a1, result.a2, result.a3, result.a4],
                    questionToken: result.token
                });
            }
        } catch (error) {
            updateState({
                loading: false,
                error: "載入問題失敗，請檢查網路連線",
                questionTitle: "",
                question: "",
                options: [],
                questionToken: ""
            });
        }
    }, [gamerAPI, updateState]);

    // 清理問題狀態
    const cleanQuestion = useCallback(() => {
        setState({
            loading: false,
            error: null,
            success: null,
            questionTitle: "",
            question: "",
            options: [],
            questionToken: ""
        });
    }, []);

    return (
        <ButtonDialog
            onCloseDialog={cleanQuestion}
            onOpenDialog={updateQuestion}
            renderDialog={renderDialog}
            buttonLabel={buttonLabel}
            title="動畫瘋答題"
            maxWidth="md"
            fullWidth={true}
            useScopedCssBaseline={false}
            CustomButtonRender={({ onClick }) => (
                <>
                    {mode === "forum" ? (
                        <a
                            href="javascript:void(0)"
                            className="topb5"
                            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClick={(e) => { e.preventDefault(); onClick() }}
                            data-tooltiptext="動畫瘋答題"
                        >
                            <AnimeIcon />
                            <span className="text-tooltip">動畫瘋答題</span>
                        </a>
                    ) : (
                        <a
                            href="#"
                            className="sidenav-section__link hover:bg-gray-50 transition-colors duration-200 rounded-lg"
                            onClick={(e) => { e.preventDefault(); onClick() }}
                            style={{ textDecoration: 'none' }}
                        >
                            <div className="sidenav__icon service__icon icon-ani"></div>
                            <p className="sidenav-section__title">動畫瘋答題</p>
                        </a>
                    )}
                </>
            )}
        />
    );
}

// 網站類型檢測
function detectSiteType(): 'main' | 'forum' | 'unknown' {
    const hostname = window.location.hostname;
    if (hostname === 'www.gamer.com.tw') return 'main';
    if (hostname === 'forum.gamer.com.tw') return 'forum';
    return 'unknown';
}

// 主站掛載邏輯
function mountToMainSite(): boolean {
    const parentElement = document.createElement('li');
    parentElement.className = 'sidenav-section__item';

    // 方案1: 尋找動畫瘋項目並在其後插入
    const aniGamerLink = document.querySelector('a[href="https://ani.gamer.com.tw"]');
    const aniGamerItem = aniGamerLink?.closest('li');

    if (aniGamerItem && aniGamerItem.parentNode) {
        const success = insertItemAfterElement(() => ButtonDialogApp("gamer"), parentElement, aniGamerItem);
        if (success) {
            console.log('[動畫瘋答題] 主站：已成功掛載到動畫瘋項目後');
            notify.success(
                '動畫瘋答題功能已成功載入！點擊左側選單中的「動畫瘋答題」開始答題。',
                '功能載入成功'
            );
            return true;
        }
    }

    // 方案2: 備選位置 - 服務列表末尾
    const serviceList = document.querySelector('.sidenav-section__row');
    if (serviceList) {
        const success = appendComponentToElement(() => ButtonDialogApp("gamer"), ".sidenav-section__row");
        if (success) {
            console.log('[動畫瘋答題] 主站：已成功掛載到服務列表末尾');
            notify.success(
                '動畫瘋答題功能已成功載入！點擊左側選單中的「動畫瘋答題」開始答題。',
                '功能載入成功'
            );
            return true;
        }
    }

    return false;
}

// 論壇站掛載邏輯
function mountToForumSite(): boolean {
    const topBtnArea = document.querySelector('.TOP-btn');
    if (!topBtnArea) {
        console.log('[動畫瘋答題] 論壇站：找不到 TOP-btn 區域');
        return false;
    }

    // 直接使用 appendComponentToElement 添加到 TOP-btn 區域
    const success = appendComponentToElement(() => ButtonDialogApp("forum"), ".TOP-btn");

    if (success) {
        console.log('[動畫瘋答題] 論壇站：已成功掛載到頂部導航欄');
        notify.success(
            '動畫瘋答題功能已成功載入！點擊頂部導航欄中的動畫瘋答題按鈕開始答題。',
            '功能載入成功'
        );
        return true;
    }

    return false;
}

// 通用回退掛載邏輯
function mountToGenericFallback(): boolean {
    // 嘗試一些通用的掛載點
    const fallbackSelectors = [
        'body',
        '#main',
        '.container',
        'header'
    ];

    for (const selector of fallbackSelectors) {
        const element = document.querySelector(selector);
        if (element) {
            const success = appendComponentToElement(() => ButtonDialogApp("gamer"), selector);
            if (success) {
                console.log(`[動畫瘋答題] 通用回退：已成功掛載到 ${selector}`);
                notify.success(
                    '動畫瘋答題功能已成功載入！',
                    '功能載入成功'
                );
                return true;
            }
        }
    }

    return false;
}

// 統一的掛載邏輯
const siteType = detectSiteType();
console.log(`[動畫瘋答題] 檢測到網站類型: ${siteType}`);

const insertBtnInterval = setInterval(() => {
    let success = false;

    switch (siteType) {
        case 'main':
            success = mountToMainSite();
            break;
        case 'forum':
            success = mountToForumSite();
            break;
        default:
            console.log('[動畫瘋答題] 未知網站類型，嘗試通用掛載方式');
            success = mountToGenericFallback();
            break;
    }

    if (success) {
        clearInterval(insertBtnInterval);
        return;
    }

    console.log(`[動畫瘋答題] 正在尋找 ${siteType} 網站的合適掛載點...`);
}, 3000);
