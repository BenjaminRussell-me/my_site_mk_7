// .eslintrc.js

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  plugins: ["prettier"],
  extends: [
    // add more generic rulesets here, such as:
    "eslint:recommended",
    "plugin:vue/vue3-recommended",
    "plugin:prettier/recommended",
  ],
  rules: {
    // override/add rules settings here, such as:
    "vue/no-unused-vars": "error",
  },
};
