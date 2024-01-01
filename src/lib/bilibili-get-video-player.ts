// ==UserScript==
// @grant        unsafeWindow
// ==/UserScript==

import type { DashPlayer } from "../types/dash-player";

class DashPlayerManager {
    public dashPlayer: DashPlayer | undefined;
}

export const dashPlayerManager = new DashPlayerManager();

function stealPlayerByFire(DashPlayer: DashPlayer) {
    const origFire = DashPlayer.prototype.fire;
    if (origFire) {
        DashPlayer.prototype.fire = function (...args) {
            dashPlayerManager.dashPlayer = this;
            DashPlayer.prototype.fire = origFire;
            origFire.apply(this, args);
        }
    }
}

const hackInterval = setInterval(() => {
    const DashPlayer = unsafeWindow.DashPlayer;
    if (DashPlayer) {
        stealPlayerByFire(DashPlayer);
    }
    if (dashPlayerManager.dashPlayer) {
        clearInterval(hackInterval);
    }
}, 1000);