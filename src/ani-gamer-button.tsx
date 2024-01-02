// ==UserScript==
// @name         ani-gamer-button
// @version      1.0.0
// @description  登入旁增加按鈕
// @author       Vanisoul
// @match        https://www.gamer.com.tw/*
// @license      MIT
// @namespace    https://greasyfork.org/users/429936
// ==/UserScript==

import { createApp } from "vue";

import { mountAfter } from "./lib/vue-mount-after";

import { Button } from "./lib/button-base";

const btn = createApp(Button);
mountAfter(btn,".popup-ctrl");
