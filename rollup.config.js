import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import fs from 'fs';
import path from 'path';

// 檢查文件是否包含 export 語句
function containsExport(filePath) {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    return /export\s+/.test(fileContent);
}

// 遞迴搜索指定目錄下的所有 TypeScript 文件
function findTypescriptFiles(dir, fileList = []) {
    const files = fs.readdirSync(dir);

    files.forEach(file => {
        const filePath = path.join(dir, file);
        const fileStat = fs.statSync(filePath);

        if (fileStat.isDirectory()) {
            findTypescriptFiles(filePath, fileList);
        } else if (file.endsWith('.ts') && !containsExport(filePath)) {
            fileList.push(filePath);
        }
    });

    return fileList;
}

function customPreservePlugin() {
    // 匹配 UserScript 開頭、結尾和所有 "// @" 開頭的註解
    const userScriptRegex = /^\/\/ (==UserScript==|==\/UserScript==|\@)/;
    const preservedLines = [];

    return {
        name: 'custom-preserve',
        transform(code, _) {
            // 將代碼分割成單獨的行
            const lines = code.split('\n');

            // 處理每一行
            lines.forEach(line => {
                if (userScriptRegex.test(line)) {
                    preservedLines.push(line);
                }
            });

            return {
                code,
                map: null
            };
        },
        generateBundle(_, bundle, _) {
            for (const fileName in bundle) {
                if (bundle[fileName].type === 'chunk') {
                    bundle[fileName].code = `${preservedLines.join('\n')}\n\n${bundle[fileName].code}`
                }
            }
        }
    };
}


// 獲取所有沒有 export 的 TypeScript 文件
const inputFiles = findTypescriptFiles('src');

export default inputFiles.map(file => ({
    input: file,
    output: {
        file: `dist/${file.replace('.ts', '.js')}`,  // 保留原始的資料夾結構
        format: 'iife',
        name: 'tempermonkey'
    },
    plugins: [
        customPreservePlugin(),
        typescript(),
        terser()
    ]
}));
