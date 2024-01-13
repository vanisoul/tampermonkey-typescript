// ==UserScript==
// @grant        unsafeWindow
// ==/UserScript==

import type { DashPlayer } from "@/types/dash-player";

import { useState, useEffect } from "react";

export function useBilibiliGetVideoPlayer() {
    const [dashPlayer, setDashPlayer] = useState<DashPlayer | undefined>(undefined);

    function stealPlayerByFire(DashPlayer: DashPlayer) {
        const origFire = DashPlayer.prototype.fire;
        if (origFire) {
            DashPlayer.prototype.fire = function (...args) {
                setDashPlayer(this);
                DashPlayer.prototype.fire = origFire;
                origFire.apply(this, args);
            }
        }
    }

    useEffect(() => {
        const hackInterval = setInterval(() => {
            if (dashPlayer) {
                clearInterval(hackInterval);
            }

            const DashPlayer = unsafeWindow.DashPlayer;
            if (DashPlayer) {
                stealPlayerByFire(DashPlayer);
            }
        }, 1000);
    }, [])

    return { dashPlayer };
}