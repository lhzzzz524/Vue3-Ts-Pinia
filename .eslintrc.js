module.exports = {
  root: true,
  env: {
    node: true,
    'vue/setup-compiler-macros': true // 像defineProps和defineExport这样的编译器宏会生成no-undef警告

  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "plugin:prettier/recommended", // 使eslint和prettier风格保持一致
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "vue/multi-word-component-names": "off", // 新版脚手架文件命名需驼峰
    "prettier/prettier": ["error", { "endOfLine": "auto" }], //错误 Delete ␍eslint(prettier/prettier) 处理
    "@typescript-eslint/no-explicit-any": "off", // 关闭any类型警告配置
    "@typescript-eslint/no-non-null-assertion": "off", // 非空断言
    "@typescript-eslint/no-var-requires": "off", // require报错
  },
};
