// ==UserScript==
// @grant        GM_xmlhttpRequest
// ==/UserScript==

export class UseFetch {
    static async get<T>(url: string) {
        return new Promise<T>((resolve, reject) => {
            GM_xmlhttpRequest({
                method: 'GET',
                url,
                onload: function (res) {
                    const json = JSON.parse(res.responseText);
                    console.log(`Success: ${res.responseText}`);
                    resolve(json);
                },
                onerror: function (err) {
                    console.log(`Error: ${err}`);
                    reject(err);
                }
            })
        })
    }

    static async postJson<T>(url: string, params?: any) {
        return new Promise<T>((resolve, reject) => {
            GM_xmlhttpRequest({
                method: 'POST',
                url,
                headers: {
                    'Content-Type': 'application/json',
                },
                data: JSON.stringify(params),
                onload: function (res) {
                    const json = JSON.parse(res.responseText);
                    console.log(`Success: ${res.responseText}`);
                    resolve(json);
                },
                onerror: function (err) {
                    console.log(`Error: ${err}`);
                    reject(err);
                }
            })
        })
    }

    static async postForm<T>(url: string, params?: Record<string, string>) {
        return new Promise<T>((resolve, reject) => {
            GM_xmlhttpRequest({
                method: 'POST',
                url,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                data: new URLSearchParams(params).toString(),
                onload: function (res) {
                    const json = JSON.parse(res.responseText);
                    console.log(`Success: ${res.responseText}`);
                    resolve(json);
                },
                onerror: function (err) {
                    console.log(`Error: ${err}`);
                    reject(err);
                }
            })
        })
    }
}