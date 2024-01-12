// ==UserScript==
// @grant        GM_registerMenuCommand
// @grant        GM_unregisterMenuCommand
// ==/UserScript==

import { useEffect } from 'react';

export const useGmMenu = (menuText: string, onTriggerMenu: () => void) => {
    useEffect(() => {
        const id = GM_registerMenuCommand(menuText, onTriggerMenu);
        return () => {
            GM_unregisterMenuCommand(id);
        };
    }, [menuText, onTriggerMenu]);
};