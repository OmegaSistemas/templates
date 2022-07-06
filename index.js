#!/usr/bin/env node

/**
 * @omegaeduc/obiwan
 * Projeto para start de aplicações react
 *
 * @author Team Web - Omega Sistemas <https://github.com/OmegaSistemas>
 */

const init = require("./src/utils/init");
const cli = require("./src/utils/cli");
const debugLog = require("./src/utils/debug");
const msg = require("./src/utils/msg");
const actions = require("./src/actions");
const input = cli.input
const flags = cli.flags;
const { clear, debug } = flags;

(async () => {
    init({ clear });
    input.includes(`help`) && cli.showHelp(0);
    debug && debugLog(flags);
    console.log(input);
    
    switch (input[0]) {
        case "create": {
            const folder = input[1] ?? flags.template;
            actions.reactCreate(`${__dirname}/${folder}`, flags.template);
            break;
        }
        default: {
            msg("error", "Informe uma opção, atualmente apenas está disponível 'create'");
        }
    }
})();
