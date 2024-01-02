import { App } from "vue";

export function mountAfter(app: App<Element>, selector: string) {
    const tempDiv = document.createElement('div'); // 創建一個臨時的 div 元素
    app.mount(tempDiv as any);

    const targetElement = document.querySelector(selector);
    if (targetElement) {
        // 將臨時 div 插入到目標元素之後
        targetElement.insertAdjacentElement('afterend', tempDiv);
    } else {
        console.error('Specified selector not found in the document.');
    }
}
