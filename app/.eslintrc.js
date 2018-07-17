module.exports = {
  env: {
    browser: true,
    es6: true,
    amd: true
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true
    },
    sourceType: "module"
  },
  plugins: ["react"],
  rules: {
    indent: [
      "error",
      2,
      {
        SwitchCase: 1
      }
    ],
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "double"],
    semi: ["error", "always"],
    "no-console": "off",
    "react/no-unescaped-entities": ["error", { forbid: [">", "}"] }],
    "react/prop-types": 0
  }
};
