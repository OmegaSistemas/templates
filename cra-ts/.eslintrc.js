module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
        "plugin:@typescript-eslint/recommended",
        "plugin:jsx-a11y/recommended",
        "plugin:prettier/recommended", // Make sure this is always the last element in the array.
    ],
    settings: {
        react: {
            version: "detect",
            pragma: "React", // Pragma to use, default to "React"
            // You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
        },
        "import/resolver": {
            node: {
                paths: ["src"],
                extensions: [".js", ".jsx", ".ts", ".tsx"],
            },
        },
    },
    plugins: ["react", "simple-import-sort", "@typescript-eslint", "prettier"],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
            experimentalObjectRestSpread: true,
        },
        babelOptions: {
            presets: ["@babel/preset-react"],
        },
        ecmaVersion: "latest",
        sourceType: "module",
        requireConfigFile: false,
    },
    rules: {
        "react/react-in-jsx-scope": "off",
        "array-bracket-spacing": [1, "never"],
        "block-scoped-var": 0,
        "react/jsx-filename-extension": ["warn", { extensions: [".tsx", ".jsx"] }],
        "import/prefer-default-export": "off",
        "prettier/prettier": ["error", {}, { usePrettierrc: true }],
        "jsx-a11y/accessible-emoji": "off",
        "react/prop-types": "off",
        "simple-import-sort/imports": "error",
        "simple-import-sort/exports": "error",
        "jsx-a11y/anchor-is-valid": [
            "error",
            {
                components: ["Link"],
                specialLink: ["hrefLeft", "hrefRight"],
                aspects: ["invalidHref", "preferButton"],
            },
        ],
    },
};
