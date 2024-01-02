import { App } from "vue";

export function mountAfter(app: App<Element>, selector: string) {
    const fragment = document.createDocumentFragment();
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-explicit-any
    app.mount(fragment as any);

    const targetElement = document.querySelector(selector);
    if (targetElement && targetElement.parentNode) {
        const nextSibling = targetElement.nextSibling;
        targetElement.parentNode.insertBefore(fragment, nextSibling);
        return true;
    } else {
        console.error('Specified selector not found in the document.');
        return false;
    }
}