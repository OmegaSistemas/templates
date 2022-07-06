module.exports = {
    env: {
        commonjs: true,
        es6: true,
        node: true,
        browser: false,
        amd: true,
        jest: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:prettier/recommended", // Make sure this is always the last element in the array.
    ],

    settings: {
        "import/resolver": {
            node: {
                paths: ["src"],
                extensions: [".js", ".jsx"],
            },
        },
    },
    plugins: ["prettier"],
    parser: "@babel/eslint-parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
            experimentalObjectRestSpread: true,
        },
        babelOptions: {},
        sourceType: "module",
        requireConfigFile: false,
    },
    rules: {
        "array-bracket-spacing": [1, "never"],
        "block-scoped-var": 0,
        "import/prefer-default-export": "off",
        "prettier/prettier": ["error", {}, { usePrettierrc: true }],
    },
};
