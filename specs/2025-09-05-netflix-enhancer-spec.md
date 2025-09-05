# Netflix 增強腳本開發規格書

**日期**: 2025-09-05
**版本**: 1.0.0
**作者**: Vanisoul

## 📋 功能規格 (Feature Specifications)

### 1. 自動操作功能

- **跳過簡介 (Skip Intro)**: 自動偵測並點擊 Netflix 的「跳過簡介」按鈕
- **下一集 (Next Episode)**: 自動偵測並點擊「下一集」按鈕

### 2. 播放速度設定

- 支援播放速度選項: 0.5x, 0.75x, 1x, 1.25x, 1.5x
- 可透過選單設定預設播放速度
- 自動套用到新載入的影片

### 3. 使用者介面

- Tampermonkey 選單整合（GM_registerMenuCommand）
- 各功能獨立開關控制
- 播放速度設定選單

## 🏗️ 技術架構設計

### 檔案結構

```
src/netflix-enhancer.tsx
```

### 核心組件架構

1. **NetflixEnhancer 主組件**

   - 使用 React hooks 進行狀態管理
   - 整合現有的 `useGmValue` 和 `useGmMenu` composables

2. **功能模組**

   - `useAutoSkipIntro`: 自動跳過簡介邏輯
   - `useAutoNextEpisode`: 自動下一集邏輯
   - `usePlaybackSpeed`: 播放速度控制邏輯

3. **DOM 觀察系統**
   - 使用 MutationObserver 監聽 DOM 變化
   - 智能選擇器匹配不同 Netflix 介面狀態

### 設定管理

- `skipIntroEnabled`: 是否啟用自動跳過簡介 (預設: true)
- `nextEpisodeEnabled`: 是否啟用自動下一集 (預設: true)
- `defaultPlaybackSpeed`: 預設播放速度 (預設: 1)
- `speedControlEnabled`: 是否啟用播放速度控制 (預設: true)

## 🎯 開發步驟

1. **建立基礎腳本架構** - 設定 UserScript metadata、匯入必要 composables
2. **實作設定選單系統** - 使用 `useGmMenu` 建立功能開關選單
3. **開發 DOM 偵測機制** - 建立通用的按鈕偵測與點擊邏輯
4. **實作播放速度控制** - 整合 Netflix video player API
5. **整合與測試** - 確保各功能間協調運作

## 📱 適用範圍

- `@match https://*.netflix.com/*`
- 支援不同地區的 Netflix 網域

## 🔧 技術細節

### UserScript Metadata

```javascript
// @name         Netflix 增強器
// @version      1.0.0
// @description  Netflix 自動跳過簡介、下一集，以及播放速度控制
// @author       Vanisoul
// @match        https://*.netflix.com/*
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_registerMenuCommand
// @grant        GM_unregisterMenuCommand
```

### 選單結構

1. **功能開關選單**

   - 自動跳過簡介 開/關
   - 自動下一集 開/關
   - 播放速度控制 開/關

2. **播放速度設定選單**
   - 0.5x 倍速
   - 0.75x 倍速
   - 1x 正常速度
   - 1.25x 倍速
   - 1.5x 倍速

### DOM 選擇器策略

將根據提供的 HTML 結構進行精確的選擇器定義：

- 跳過簡介按鈕選擇器
- 下一集按鈕選擇器
- 影片播放器選擇器

## 📊 實作檢核清單

- [ ] 基礎腳本架構建立
- [ ] 設定選單系統實作
- [ ] DOM 偵測機制開發
- [ ] 自動跳過簡介功能
- [ ] 自動下一集功能
- [ ] 播放速度控制功能
- [ ] 整合測試完成

## 🚀 後續擴展規劃

- 支援更多播放速度選項
- 添加快捷鍵支援
- 自動跳過片尾字幕功能
- 支援其他串流平台

## 附加資訊

### 當頁面有 跳過簡介 時的部分結構

```
<div class="watch-video--skip-content default-ltr-iqcdef-cache-gpipej" style="align-items: center; justify-content: flex-end;"><button class="button-primary watch-video--skip-content-button medium hasLabel default-ltr-iqcdef-cache-1mjzmhv" data-uia="player-skip-intro" type="button"><span class="default-ltr-iqcdef-cache-bf8b0m">跳过简介</span></button></div>
```

### 當頁面有 下一集 時的結構

```
<button class="hasLabel hasIcon default-ltr-iqcdef-cache-v5z301" data-uia="next-episode-seamless-button-draining" type="button"><div class="default-ltr-iqcdef-cache-13u5nr8"><div class="inner" style="transition: transform 5s linear; transform: translate(0px);"></div></div><div class="default-ltr-iqcdef-cache-5hykvn"><div class="medium default-ltr-iqcdef-cache-iyulz3" role="presentation"><svg viewBox="0 0 24 24" width="24" height="24" data-icon="PlayMedium" data-icon-id=":r68:" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" role="img">
<path d="M5 2.69127C5 1.93067 5.81547 1.44851 6.48192 1.81506L23.4069 11.1238C24.0977 11.5037 24.0977 12.4963 23.4069 12.8762L6.48192 22.1849C5.81546 22.5515 5 22.0693 5 21.3087V2.69127Z" fill="currentColor"></path>

</svg></div></div><div class="default-ltr-iqcdef-cache-1npqywr" style="width: 0.8rem;"></div><span class="default-ltr-iqcdef-cache-ick94x">下一集</span></button>
```

### 影片播放器當滑鼠移動到下列節點時會出現播放速度選單

```
<svg viewBox="0 0 24 24" width="24" height="24" data-icon="InternetSpeedMedium" data-icon-id=":rv9:" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" role="img">
<path fill-rule="evenodd" clip-rule="evenodd" d="M19.0569 6.27006C15.1546 2.20629 8.84535 2.20629 4.94312 6.27006C1.01896 10.3567 1.01896 16.9985 4.94312 21.0852L3.50053 22.4704C-1.16684 17.6098 -1.16684 9.7454 3.50053 4.88481C8.18984 0.0013696 15.8102 0.0013696 20.4995 4.88481C25.1668 9.7454 25.1668 17.6098 20.4995 22.4704L19.0569 21.0852C22.981 16.9985 22.981 10.3567 19.0569 6.27006ZM15 14.0001C15 15.6569 13.6569 17.0001 12 17.0001C10.3431 17.0001 9 15.6569 9 14.0001C9 12.3432 10.3431 11.0001 12 11.0001C12.4632 11.0001 12.9018 11.105 13.2934 11.2924L16.2929 8.29296L17.7071 9.70717L14.7076 12.7067C14.895 13.0983 15 13.5369 15 14.0001Z" fill="currentColor"></path>

</svg>
```

### 播放速度選單

```
<div class="popup-content default-ltr-iqcdef-cache-7nqpcu" data-uia="playback-speed" tabindex="0"><div class="default-ltr-iqcdef-cache-wajl2m">播放速度</div><div class="default-ltr-iqcdef-cache-zjik7"><div data-uia="playback-speed-item" role="button" tabindex="0" class="default-ltr-iqcdef-cache-12mzr8v"><div data-uia="playback-speed-indicator" class="default-ltr-iqcdef-cache-95e4d"><svg viewBox="0 0 8 8" class="default-ltr-iqcdef-cache-1baed2t"><circle cx="4" cy="4" fill="#d8d8d8" r="4"></circle></svg><div data-uia="playback-speed-label" class="default-ltr-iqcdef-cache-1v49hso">0.5x</div></div></div><div data-uia="playback-speed-item" role="button" tabindex="0" class="default-ltr-iqcdef-cache-12mzr8v"><div data-uia="playback-speed-indicator" class="default-ltr-iqcdef-cache-fzck5g"><svg viewBox="0 0 8 8" class="default-ltr-iqcdef-cache-1wlhduc"><circle cx="4" cy="4" fill="#d8d8d8" r="4"></circle></svg><div data-uia="playback-speed-label" class="default-ltr-iqcdef-cache-w0hsd2">0.75x</div></div></div><div data-uia="playback-speed-item-active" role="button" tabindex="0" class="default-ltr-iqcdef-cache-12mzr8v"><div data-uia="playback-speed-indicator" class="default-ltr-iqcdef-cache-fzck5g"><svg viewBox="0 0 26 26" class="default-ltr-iqcdef-cache-16o1560"><circle cx="13" cy="13" fill="#232323" r="12" stroke="#b3b3b3" stroke-width="2"></circle><circle cx="13" cy="13" fill="#ffffff" r="6"></circle></svg><div data-uia="playback-speed-label" class="default-ltr-iqcdef-cache-ktvr51">1x（正常）</div></div></div><div data-uia="playback-speed-item" role="button" tabindex="0" class="default-ltr-iqcdef-cache-12mzr8v"><div data-uia="playback-speed-indicator" class="default-ltr-iqcdef-cache-fzck5g"><svg viewBox="0 0 8 8" class="default-ltr-iqcdef-cache-1wlhduc"><circle cx="4" cy="4" fill="#d8d8d8" r="4"></circle></svg><div data-uia="playback-speed-label" class="default-ltr-iqcdef-cache-w0hsd2">1.25x</div></div></div><div data-uia="playback-speed-item" role="button" tabindex="0" class="default-ltr-iqcdef-cache-12mzr8v"><div data-uia="playback-speed-indicator" class="default-ltr-iqcdef-cache-t6dl5a"><svg viewBox="0 0 8 8" class="default-ltr-iqcdef-cache-1jpasrp"><circle cx="4" cy="4" fill="#d8d8d8" r="4"></circle></svg><div data-uia="playback-speed-label" class="default-ltr-iqcdef-cache-2dgtj4">1.5x</div></div></div></div></div>
```
