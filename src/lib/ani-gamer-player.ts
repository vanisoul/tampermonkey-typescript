import type { VideoJsPlayer } from "video.js";

class GamerPlayer {
    player: VideoJsPlayer = null!;
}

const gamerPlayer = new GamerPlayer();


require(['videojs'], function (videojs: any) {
    const playerInstance = videojs('ani_video') as VideoJsPlayer;
    gamerPlayer.player = playerInstance
});

