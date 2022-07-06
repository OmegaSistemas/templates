const meow = require("meow");
const meowHelp = require("cli-meow-help");

const flags = {
    debug: {
        type: `boolean`,
        default: false,
        alias: `d`,
        desc: `Print debug info`,
    },
    version: {
        type: `boolean`,
        alias: `v`,
        desc: `Print CLI version`,
    },
    template: {
        type: `string`,
        alias: `t`,
        desc: `Nome do template, por padrão é utilizado o 'cra-ts'`,
        default: "cra-ts",
    },
};

const commands = {
    create: {
        desc: `Cria o template semelhante ao CRA porém com todos os artefatos necessários da omega`,        
    },
};

const helpText = meowHelp({
    name: `@omegaeduc/obiwan`,
    flags,
    commands,
});

const options = {
    inferType: true,
    description: false,
    hardRejection: false,
    flags,
    commands
};

module.exports = meow(helpText, options);
