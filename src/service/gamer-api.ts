// ==UserScript==
// @grant        GM_xmlhttpRequest
// @connect      ani.gamer.com.tw
// ==/UserScript==

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
    // 也是獲取題目 但是使用 GM_xmlhttpRequest
    async getQuestionByGM() {
        return new Promise<GamerErrorResult | QuestionResult>((resolve, reject) => {
            GM_xmlhttpRequest({
                method: 'GET',
                url: 'https://ani.gamer.com.tw/ajax/animeGetQuestion.php',
                onload: function (res) {
                    const json = JSON.parse(res.responseText);
                    console.log(`getQuestionByGM Success: ${res.responseText}`);
                    resolve(json);
                },
                onerror: function (err) {
                    console.log(`getQuestionByGM Error: ${err}`);
                    reject(err);
                }
            })
        })
    }

    // 送出答案的方法 但是使用 GM_xmlhttpRequest
    async sendAnswerByGM(token: string, ans: number) {
        return new Promise<GamerErrorResult | AnswerResult>((resolve, reject) => {
            GM_xmlhttpRequest({
                method: 'POST',
                url: 'https://ani.gamer.com.tw/ajax/animeAnsQuestion.php',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                data: `token=${token}&ans=${ans}`,
                onload: function (res) {
                    const json = JSON.parse(res.responseText);
                    console.log(`sendAnswerByGM Success: ${res.responseText}`);
                    resolve(json);
                },
                onerror: function (err) {
                    console.log(`sendAnswerByGM Error: ${err}`);
                    reject(err);
                }
            })
        })
    }
}