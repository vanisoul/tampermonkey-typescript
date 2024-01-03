// ==UserScript==
// @grant        GM_setValue
// @grant        GM_getValue
// ==/UserScript==

import { computed, ref } from "vue";

export function useGmValue<T>(key: string, defaultValue: T) {
    const refValue = ref<T>();
    refValue.value = GM_getValue<T>(key, defaultValue);

    const data = computed({
        get() {
            return refValue.value
        },
        set(val) {
            GM_setValue(key, val);
            refValue.value = val;
        }
    })

    function updateData(input: T) {
        data.value = input;
    }

    return { data, updateData };
}

