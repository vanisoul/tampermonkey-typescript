import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
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
        } else if ((file.endsWith('.ts') || file.endsWith('.tsx')) && !file.endsWith(".d.ts") && !containsExport(filePath)) {
            fileList.push(filePath);
        }
    });

    return fileList;
}


function customPreservePlugin() {
    // 匹配 UserScript 開頭、結尾和所有 "// @" 開頭的註解
    // 移除 ==UserScript==|==\/UserScript==|
    const userScriptRegex = /^\/\/\s*(\@)/;
    const preservedLines = [];
    return {
        name: 'custom-preserve',

        transform(code, id) {
            // 將代碼分割成單獨的行
            const lines = fs.readFileSync(id, 'utf-8').split('\n');

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
        generateBundle(_, bundle, __) {
            for (const fileName in bundle) {
                if (bundle[fileName].type === 'chunk') {
                    const regex = /@(\S+)\s+(.+)/;
                    const keyLength = 15;
                    const preservedLinesFormat = preservedLines.map(str => {
                        const match = str.match(regex);
                        const key = match[1].trim().padEnd(keyLength, " ");
                        const value = match[2].trim();
                        return `// @${key}${value}`
                    });

                    const preservedLinesString = `// ==UserScript==\n${preservedLinesFormat.join('\n')}\n// ==/UserScript==`;
                    bundle[fileName].code = `${preservedLinesString}\n\n${bundle[fileName].code}`
                }
            }
        }
    };
}

function replaceExtToJs(filePath) {
    const parsedPath = path.parse(filePath);
    return path.join(parsedPath.dir, parsedPath.name + '.js');
}

// 獲取所有沒有 export 的 TypeScript 文件
const inputFiles = findTypescriptFiles('src');

export default inputFiles.map(file => ({
    input: file,
    output: {
        file: `dist/${replaceExtToJs(file)}`,  // 保留原始的資料夾結構
        format: 'iife',
        name: 'tempermonkey'
    },
    plugins: [

        babel({
            presets: ["@babel/preset-typescript"],
            plugins: ["@vue/babel-plugin-jsx"],
            babelHelpers: 'bundled',
            extensions: ['.jsx', '.tsx'],
        }),
        customPreservePlugin(),
        resolve(),
        typescript(),
        terser()
    ]
}));
