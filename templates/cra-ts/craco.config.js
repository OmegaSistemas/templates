const { isEqual } = require("lodash");
const path = require("path");

module.exports = {
    style: {
        sass: {
            loaderOptions: {
                sassOptions: {
                    quietDeps: true,
                },
            },
        },
    },
    webpack: {
        alias: {
            "@": path.resolve(__dirname, "src", ""),
        },
        configure(webpackConfig) {
            if (!webpackConfig.ignoreWarnings) {
                webpackConfig.ignoreWarnings = [];
            }
            // axios extensions foi compilado com source map incorreto necessitando dessa configuração para ignorar warnings desse pacote.
            webpackConfig.ignoreWarnings.push(/axios-extensions/);

            return webpackConfig;
        },
    },
};
