// ==UserScript==
// @grant        GM_setValue
// @grant        GM_getValue
// ==/UserScript==

import { useState } from 'react';

export function useGmValue<T>(key: string, defaultValue: T) {
    const [data, setValue] = useState<T>(GM_getValue<T>(key, defaultValue));

    function updateData(input: T) {
        GM_setValue(key, input);
        setValue(input);
    }

    return { data, updateData };
}

