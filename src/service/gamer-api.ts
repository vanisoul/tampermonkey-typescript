// ==UserScript==
// @connect      ani.gamer.com.tw
// ==/UserScript==

import { UseFetch } from "../composable/use-fetch";

interface GamerErrorResult {
    msg: string;
    error: number;
}

interface QuestionResult {
    game: string
    question: string
    a1: string
    a2: string
    a3: string
    a4: string
    userid: string
    token: string
}

interface AnswerResult {
    ok: string
    gift: string
}

export class GamerAPI {
    // 也是獲取題目
    async getQuestion() {
        const result = await UseFetch.get<GamerErrorResult | QuestionResult>('https://ani.gamer.com.tw/ajax/animeGetQuestion.php')
        return result;
    }

    // 送出答案的方法
    async sendAnswer(token: string, ans: number) {
        const result = await UseFetch.postForm<GamerErrorResult | AnswerResult>('https://ani.gamer.com.tw/ajax/animeAnsQuestion.php', {
            token,
            ans: ans.toString()
        })
        return result;
    }
}