import type { VideoJsPlayer } from "video.js";

class GamerPlayer {
    init: boolean = false;
    player: VideoJsPlayer = null!;
    videoJs: any = null!;
}

export const gamerPlayer = new GamerPlayer();

setInterval(() => {
    if (!gamerPlayer.init) {
        loadVideoJsPlayer();
    }
}, 4000);

async function loadVideoJsPlayer() {
    if (typeof require !== 'function') {
        console.log('videojs 模組尚未加載');
        return;
    } else {
        require(['videojs'], function (videojs: any) {
            const playerInstance = videojs("ani_video");
            if (!playerInstance) {
                console.log('videojs player 尚未加載');
                return;
            }
            gamerPlayer.init = true;
            gamerPlayer.videoJs = videojs;
            gamerPlayer.player = playerInstance;
        });
    }
}



// window.gamerPlayer.player.bufferedEnd()

// window.gamerPlayer.player.on("progress",function(){
//     debugger
//     console.log("正在请求数据 ");
// })

// const tech = window.gamerPlayer.player.tech_.el();
// tech.dispatchEvent(new Event('progress'));