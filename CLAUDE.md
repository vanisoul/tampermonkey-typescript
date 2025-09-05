# CLAUDE.md

使用英語思考，但是始終最終用繁體中文表達。
如果是規劃模式建立 specs 時檔案名稱需要 YYYY-MM-DD-<計劃主題>.md
This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 🎯 Project Overview

This is a TypeScript-based Tampermonkey userscript development environment that enables modern JavaScript/TypeScript development with full ES6+ support, React integration, and automated bundling for browser userscripts.

## ⚙️ Development Commands

### Build Commands

- `yarn build` - Build all TypeScript files without exports in src/ to userscripts
- `yarn build [file]` - Build specific TypeScript file to userscript
- `yarn tailwind` - Generate Tailwind CSS output from config

### Code Quality

- Use Biome for formatting and linting: `npx biome format .` and `npx biome lint .`
- Biome config: 120 character line width, space indentation, double quotes for JS

### Project Structure

```
src/
├── *.ts, *.tsx          # Main userscript files (no exports = will be built)
├── composable/          # Reusable hooks and utilities
├── component/          # React components
├── lib/                # Utility libraries
├── service/            # API and data services
├── types/              # TypeScript type definitions
└── css/                # Stylesheets including Tailwind config
dist/                   # Built userscripts output
```

## 🏗️ Architecture Patterns

### Userscript Structure

- Files without `export` statements in src/ are automatically built as userscripts
- Each userscript manages its own UserScript metadata block with @grant directives
- Custom Rollup plugin preserves UserScript metadata during build process

### React Integration

- React components mount using `appendComponentToElement()` from `@/lib/react-mount-after`
- Material UI (MUI) for UI components with scoped CSS to avoid conflicts
- Tailwind CSS with `.tailwind` prefix to prevent style conflicts with host sites

### Composable Patterns

- `useGmValue()` - Tampermonkey GM_getValue/GM_setValue wrapper with React state
- `useGmMenu()` - Tampermonkey GM_registerMenuCommand integration
- `useFetch()` - HTTP request utilities for userscripts

### Cross-Site Compatibility

- Scripts detect different site environments (e.g., www.gamer.com.tw vs forum.gamer.com.tw)
- Dynamic DOM mounting strategies based on site structure
- CSS scoping prevents conflicts with host site styles

## 📦 Build System Details

### Custom Rollup Configuration

- Only processes TypeScript files without exports in src/
- Preserves and formats UserScript metadata blocks
- Bundles dependencies with proper IIFE format for userscripts
- CSS processing with PostCSS and automatic injection
- SVG processing with @svgr/rollup
- Development-friendly output (beautified, no mangling)

### Key Build Features

- Automatic UserScript metadata preservation and formatting
- CSS scoping with postcss-prefix-selector
- React JSX/TSX processing via Babel
- Third-party library bundling from node_modules
- Environment variable replacement (process.env.NODE_ENV)

## 🎨 Styling Strategy

### Tailwind CSS Setup

- Source: `src/css/tailwind.config.css`
- Output: `src/css/tailwind.css`
- Scoped with `.tailwind` prefix to avoid host site conflicts
- Build command: `yarn tailwind` (runs automatically with `yarn build`)

### Material UI Integration

- Used for complex UI components (dialogs, forms, etc.)
- Emotion-based styling system
- Scoped to prevent conflicts with host site styles

## 📋 Common Development Patterns

### Userscript Development

1. Create .ts/.tsx file in src/ without exports
2. Add UserScript metadata block at top of file
3. Import required composables and components
4. Use React for complex UI or vanilla JS for simple scripts
5. Build with `yarn build` and install in Tampermonkey

### Cross-Site Scripting

- Detect site using `window.location.hostname`
- Use different DOM selectors and mounting strategies per site
- Implement fallback mechanisms for different site versions

### Video Enhancement Scripts

- Common pattern: DOM observation for video players
- Integration with video.js, HLS.js, and other media libraries
- Custom overlay and control injection techniques
