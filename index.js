#!/usr/bin/env node

/**
 * @omegaeduc/obiwan
 * Projeto para start de aplicações react
 *
 * @author Team Web - Omega Sistemas <https://github.com/OmegaSistemas>
 */

const init = require("./bin/utils/init");
const cli = require("./bin/utils/cli");
const debugLog = require("./bin/utils/debug");
const msg = require("./bin/utils/msg");
const actions = require("./bin/actions");
const input = cli.input
const flags = cli.flags;
const { clear, debug } = flags;

(async () => {
    init({ clear });
    input.includes(`help`) && cli.showHelp(0);
    debug && debugLog(flags);
    
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
