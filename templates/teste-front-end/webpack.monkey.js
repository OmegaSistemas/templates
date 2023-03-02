/* eslint-disable */
const path = require("path");

function findRule(webpackConfig, callback) {
    const rules = webpackConfig.module.rules[1].oneOf;
    const index = rules.findIndex(callback);
    if (index === -1) throw Error("Loader not found");
    return rules[index];
}
const loaderOptions = {
    sassOptions: {
        quietDeps: true,
    },
};

module.exports = function (webpackConfig, isDevelopment) {
    findRule(webpackConfig, (element, index) => {
        let rule = element.use?.find((row) => {
            return row.loader?.indexOf("sass-loader") > 1;
        });

        if (rule) {
            rule.options = {
                ...rule.options,
                ...loaderOptions,
            };
            return index;
        }
    });

    webpackConfig.resolve.alias = {
        ...webpackConfig.resolve.alias,
        "@": path.resolve(__dirname, "src", ""),
    };

    if (!webpackConfig.ignoreWarnings) {
        webpackConfig.ignoreWarnings = [];
    }
    // axios extensions foi compilado com source map incorreto necessitando dessa configuração para ignorar warnings desse pacote.
    webpackConfig.ignoreWarnings.push({ message: /axios-extensions/ });
    webpackConfig.ignoreWarnings.push({ message: /autoprefixer/ });

    return webpackConfig;
};
