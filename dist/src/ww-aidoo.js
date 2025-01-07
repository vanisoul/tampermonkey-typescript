// ==UserScript==
// @name         研究
// @namespace    http://tampermonkey.net/
// @version      1.0
// @match        none
// @grant        GM_registerMenuCommand
// @license MIT
// ==/UserScript==

(function () {
  "use strict";

  let lastId = 0;
  GM_registerMenuCommand('changeVideo', () => {
    const videoId = prompt("Enter video Id");
    if (videoId && videoId != lastId) {

      // 獲取 video 節點的父節點
      var parent = document.getElementById('video').parentNode;
      // 刪除 video 節點
      var oldVideoDiv = document.getElementById('video');
      parent.removeChild(oldVideoDiv);
      // 創建新的 video 節點
      var newVideoDiv = document.createElement('div');
      newVideoDiv.id = 'video';
      newVideoDiv.className = 'dplayer dplayer-no-danmaku dplayer-paused';
      // 將新的 video 節點添加到父節點中原來的位置
      parent.appendChild(newVideoDiv);

      // 紀錄上一次影片
      lastId = videoId;

      // 發送 API
      Boot.getVod({
        "id": videoId,
        "line": 1,
      }, function (vod) {
        Boot.getCover(vod.vodPic, function (picUrl) {
          if (isIOS(vod, picUrl)) {
            initVideo(vod, picUrl);
          } else {
            initDPlayer(vod, picUrl);
          }
        });
      });
    }
  });
})();
