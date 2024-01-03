// ==UserScript==
// @grant        GM_registerMenuCommand
// ==/UserScript==

import { ref } from "vue";

export function useGmMenu(menuText: string) {
    const event = ref<() => void>(() => { });

    const setEvent = (fn: () => void) => {
        event.value = fn;
    }

    GM_registerMenuCommand(menuText, () => { event.value() });

    return {
        setEvent
    };
}