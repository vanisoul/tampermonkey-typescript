import fs from 'fs';
import path from 'path';
import { rollup } from "rollup";
import postcss from 'rollup-plugin-postcss';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';

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
            // 排除 nodemodules 資料夾下檔案 & 虛擬模塊 & 非字串
            if (id.startsWith('\x00') || typeof id !== "string" || id.includes('node_modules')) {
                return {
                    code,
                    map: null
                };
            }

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

export function replaceEnvPlugin() {
    return {
        name: 'replace-env', // 插件名稱
        transform(code, id) {
            const replacedCode = code.replace(/process\.env\.NODE_ENV/g, '"production"');
            return {
                code: replacedCode,
                map: null // 如果您不需要 source map，可以將此設置為 null
            };
        }
    };
}

function replaceExtToJs(filePath) {
    const parsedPath = path.parse(filePath);
    return path.join(parsedPath.dir, parsedPath.name + '.js');
}

async function buildFile(filePath) {
    console.log(`開始建構: ${filePath}`);

    const bundle = await rollup({
        input: filePath,
        plugins: [
            postcss({
                extract: false,
                inject: true
            }),
            customPreservePlugin(),
            resolve(),
            commonjs(),
            babel({
                presets: ["@babel/preset-typescript"],
                plugins: ["@vue/babel-plugin-jsx"],
                babelHelpers: 'bundled',
                extensions: ['.jsx', '.tsx'],
            }),
            typescript(),
            replaceEnvPlugin(),
            // terser() // 禁止壓縮
        ],
        onwarn(warning, warn) {
            warn(warning);
        }
    });

    console.log(`建構完成: ${filePath}`);

    const outputPath = `dist/${replaceExtToJs(filePath)}`;
    await bundle.write({
        file: outputPath,
        format: 'iife',
        name: 'tempermonkey'
    });

    console.log(`寫入完成: ${outputPath}`);

    await bundle.close();

    console.log(`========================================`);
}

async function main() {
    const files = findTypescriptFiles('src');
    for (const file of files) {
        await buildFile(file);
    }
}

main().catch(err => {
    console.error(`建構失敗: ${err}`);
});

// export default inputFiles.map(file => ({
//     input: file,
//     output: {
//         file: `dist/${replaceExtToJs(file)}`,  // 保留原始的資料夾結構
//         format: 'iife',
//         name: 'tempermonkey'
//     },
//     plugins: [
//         postcss({       // 處理 import .css 檔案, 透過 js 注入到 html 中
//             extract: false,
//             inject: true
//         }),
//         customPreservePlugin(), // 自定義插件，用於保留 UserScript 註解
//         resolve(),      // 抓入第三方套件引用 node_modules 內容
//         commonjs(),     // 處理第三方套件引用時 commonjs 導入語法問題
//         babel({         // 處理 .tsx 檔案
//             presets: ["@babel/preset-typescript"],
//             plugins: ["@vue/babel-plugin-jsx"],
//             babelHelpers: 'bundled',
//             extensions: ['.jsx', '.tsx'],
//         }),
//         typescript(),   // 處理 .ts 檔案
//         replaceEnvPlugin(),     // 替換 process.env.NODE_ENV 為 production
//         terser()            // 壓縮 js
//     ]
// }));
