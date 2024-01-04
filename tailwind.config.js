/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    preflight: false, // 暫不用清除, 因為使用權重問題, 會讓外部的 css 被覆蓋
  },
}

