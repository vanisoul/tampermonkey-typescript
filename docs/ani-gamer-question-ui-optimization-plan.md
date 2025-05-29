# 動畫瘋答題 UI 優化計劃

## 📋 專案概述

基於 Context7 查詢到的 Material UI 官方文件，對 `ani-gamer-question.tsx` 中的 UI
Dialog 介面進行全面優化。

## 🎯 優化目標

### 現況問題分析

1. **UI 設計不夠現代化** - 缺乏視覺層次和互動回饋
2. **無障礙性不足** - 缺少適當的 ARIA 標籤和鍵盤導航
3. **響應式設計不完整** - 在不同螢幕尺寸下可能顯示不佳
4. **載入狀態處理不佳** - 用戶體驗可以改善
5. **錯誤處理 UI 不夠友善** - 缺乏視覺化的錯誤提示

### 優化方向

- 採用 Material Design 3.0 設計語言
- 提升用戶體驗和互動回饋
- 改善響應式設計和無障礙性
- 增強錯誤處理和狀態管理

## 🎨 設計架構

### Dialog 結構優化

```
Dialog
├── DialogTitle (問題標題 + 載入狀態)
├── DialogContent
│   ├── 問題內容 (Typography)
│   ├── 選項列表 (Card + Grid)
│   └── 錯誤/成功提示 (Alert)
└── DialogActions (關閉按鈕)
```

## 🔧 技術實作

### 1. ButtonDialog 組件優化

**新增功能：**

- 使用 `DialogTitle`, `DialogContent`, `DialogActions` 標準結構
- 添加 `sx` prop 進行響應式設計
- 改善關閉行為和鍵盤導航
- 支援 `maxWidth` 和 `fullWidth` 屬性

**Material UI 組件使用：**

- `Dialog` - 主要對話框容器
- `DialogTitle` - 標題區域
- `DialogContent` - 內容區域
- `DialogActions` - 操作按鈕區域
- `IconButton` - 關閉按鈕
- `CloseIcon` - 關閉圖標

### 2. SelectOptionComponent 組件優化

**新增功能：**

- 使用 `Card` 和 `CardContent` 提升視覺層次
- 添加 `LinearProgress` 載入指示器
- 使用 `Alert` 組件顯示錯誤和成功訊息
- 改善按鈕佈局和間距
- 支援不同的載入狀態

**Material UI 組件使用：**

- `Card` - 卡片容器
- `CardContent` - 卡片內容
- `Typography` - 文字排版
- `Button` - 操作按鈕
- `Grid` - 佈局系統
- `LinearProgress` - 載入進度條
- `Alert` - 提示訊息
- `Box` - 佈局容器

### 3. 狀態管理改善

**新增狀態：**

```typescript
interface QuestionState {
  loading: boolean;
  error: string | null;
  success: string | null;
  questionData: QuestionData | null;
}
```

**狀態處理：**

- 載入中：顯示 `LinearProgress` 和禁用按鈕
- 錯誤：顯示 `Alert` 錯誤訊息
- 成功：顯示 `Alert` 成功訊息和獎勵內容

## 📱 響應式設計

### 斷點設計

- **xs (0px+)**: 全螢幕 Dialog，垂直排列選項
- **sm (600px+)**: 固定寬度 Dialog，2列選項佈局
- **md (900px+)**: 較大 Dialog，4列選項佈局

### 使用 Material UI 響應式功能

```javascript
// 使用 useMediaQuery 檢測螢幕尺寸
const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

// 使用 sx prop 進行響應式樣式
sx={{
  width: { xs: '100%', sm: 600, md: 800 },
  maxHeight: { xs: '90vh', sm: '80vh' }
}}
```

## 🎯 用戶體驗改善

### 載入狀態

- 問題載入時顯示骨架屏或進度條
- 按鈕點擊後顯示載入狀態
- 禁用重複點擊

### 錯誤處理

- 網路錯誤：顯示重試按鈕
- 答題錯誤：顯示正確答案提示
- 系統錯誤：顯示友善的錯誤訊息

### 成功回饋

- 答對題目：顯示慶祝動畫
- 獲得獎勵：突出顯示獎勵內容
- 自動關閉：成功後延遲關閉對話框

## 🔍 無障礙性改善

### ARIA 標籤

- `aria-labelledby` - Dialog 標題
- `aria-describedby` - Dialog 內容描述
- `role="dialog"` - 對話框角色
- `aria-modal="true"` - 模態對話框

### 鍵盤導航

- `Tab` 鍵在選項間切換
- `Enter` 鍵選擇選項
- `Escape` 鍵關閉對話框
- 焦點管理和陷阱

## 📊 效能優化

### 組件優化

- 使用 `React.memo` 避免不必要的重渲染
- 使用 `useCallback` 優化事件處理函數
- 懶載入非關鍵組件

### 樣式優化

- 使用 `sx` prop 而非內聯樣式
- 利用 Material UI 的主題系統
- 避免樣式重複計算

## 🧪 測試計劃

### 功能測試

- [ ] Dialog 開啟/關閉功能
- [ ] 問題載入和顯示
- [ ] 選項選擇和提交
- [ ] 錯誤處理和重試
- [ ] 成功狀態顯示

### 響應式測試

- [ ] 手機端顯示 (320px - 767px)
- [ ] 平板端顯示 (768px - 1023px)
- [ ] 桌面端顯示 (1024px+)

### 無障礙性測試

- [ ] 鍵盤導航
- [ ] 螢幕閱讀器相容性
- [ ] 色彩對比度
- [ ] 焦點管理

### 相容性測試

- [ ] Chrome/Edge
- [ ] Firefox
- [ ] Safari
- [ ] 巴哈姆特網站整合

## 📈 預期效果

### 用戶體驗提升

- ✅ 現代化的 Material Design 風格
- ✅ 清晰的視覺層次和資訊架構
- ✅ 流暢的載入和互動體驗
- ✅ 友善的錯誤處理和回饋

### 技術改善

- ✅ 響應式設計適配各種螢幕
- ✅ 更好的無障礙性支援
- ✅ 優化的效能和載入速度
- ✅ 易於維護的程式碼結構

## 🚀 實作時程

### Phase 1: 核心組件重構 (預計 2-3 小時)

- ButtonDialog 組件優化
- SelectOptionComponent 組件優化
- 基本功能測試

### Phase 2: 功能增強 (預計 1-2 小時)

- 載入狀態處理
- 錯誤和成功訊息
- 響應式設計調整

### Phase 3: 用戶體驗優化 (預計 1 小時)

- 動畫和過渡效果
- 無障礙性改善
- 效能優化

### Phase 4: 整合測試 (預計 30 分鐘)

- 巴哈姆特網站測試
- 跨瀏覽器測試
- 最終調整

## 📚 參考資料

### Material UI 文件參考

- [Dialog Component](https://mui.com/material-ui/react-dialog/)
- [Button Component](https://mui.com/material-ui/react-button/)
- [Grid System](https://mui.com/material-ui/react-grid/)
- [Typography](https://mui.com/material-ui/react-typography/)
- [Alert Component](https://mui.com/material-ui/react-alert/)
- [Card Component](https://mui.com/material-ui/react-card/)
- [Progress Components](https://mui.com/material-ui/react-progress/)

### 設計參考

- [Material Design 3.0](https://m3.material.io/)
- [Material UI Design Kits](https://mui.com/design-kits/)
- [Accessibility Guidelines](https://mui.com/material-ui/guides/accessibility/)
