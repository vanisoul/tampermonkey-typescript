import fs from "fs";
import path from "path";
import { rollup } from "rollup";
import postcss from "rollup-plugin-postcss";
import prefixSelector from "postcss-prefix-selector";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";
import svgr from '@svgr/rollup';

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

                    const uniquePreservedLinesFormat = [...new Set(preservedLinesFormat)];

                    const preservedLinesString = `// ==UserScript==\n${uniquePreservedLinesFormat.join('\n')}\n// ==/UserScript==`;
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

function createPostCssPrefixSelectorPlugin(prefixValue) {
    return prefixSelector({
        prefix: prefixValue,
        transform(prefix, selector, prefixedSelector, filePath) {
            // 匹配 node_modules 下的檔案
            const nodeModulesRegex = /node_modules\/[^\/]+\//;
            // 檢查是否為 * 或 :: 開頭的選擇器
            const isSpecialSelector = selector.startsWith('*') || selector.startsWith('::');

            // 如果是 node_modules 下的檔案或是 * 或 :: 開頭的選擇器，就不要加前綴, 避免影響第三方套件
            return nodeModulesRegex.test(filePath) || isSpecialSelector ? selector : prefixedSelector;
        },
    });
}

const addImportantToNodeModulesPlugin = (opts = {}) => {
    return {
        postcssPlugin: 'add-important-to-node-modules',
        Once(root, { result }) {
            // 檢查當前處理的 CSS 文件是否來自 node_modules
            if (result.opts.from && result.opts.from.includes('node_modules')) {
                root.walkDecls(decl => {
                    // 給每個聲明添加 !important
                    decl.important = true;
                });
            }
        }
    }
}
addImportantToNodeModulesPlugin.postcss = true;


async function buildFile(filePath) {
    console.log(`開始建構: ${filePath}`);

    const bundle = await rollup({
        input: filePath,
        plugins: [
            svgr(),
            postcss({
                plugins: [
                    createPostCssPrefixSelectorPlugin(".tailwind"),
                ],
                extract: false,
                inject: true
            }),
            customPreservePlugin(),
            resolve(),
            commonjs(),
            babel({
                presets: ["@babel/preset-typescript", "@babel/env", "@babel/preset-react"],
                babelHelpers: 'bundled',
                extensions: ['.jsx', '.tsx'],
            }),
            typescript(),
            replaceEnvPlugin(),
            terser({
                compress: false, // 禁用壓縮
                mangle: false,    // 禁用變量名和函數名的修改（模糊）
                format: {
                    beautify: true, // 讓生成的代碼更加易於閱讀
                },
            })
        ],
        onwarn(warning, warn) {
            // 忽略 use client was ignored 警告
            if (warning.message.includes("use client") && warning.message.includes("was ignored")) {
                // 不调用 warn 函数，从而忽略这个警告
                return;
            }
            // 忽略 /*#__PURE__*/ 警告, 註解無法解析警告
            if (warning.message.includes("/*#__PURE__*/")) {
                return;
            }

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
    // 取得第一個參數 如果有檔案就只處理該檔案
    const inputFiles = process.argv.slice(2);
    if (inputFiles.length > 0) {
        for (const file of inputFiles) {
            await buildFile(file);
        }
        return;
    }

    // 沒有參數就處理 src 資料夾下所有檔案
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
