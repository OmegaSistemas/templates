#!/usr/bin/env node
const { Command } = require("commander");
const degit = require("degit");
const fs = require("fs");
var shell = require("shelljs");
const program = new Command();

program.name("obiwan").description("CLI para start de aplicações Omega").version("0.8.0");

program
    .command("create:react")
    .description("Cria o template semelhante ao CRA porém com todos os artefatos necessários da omega,")
    .argument("<pasta>", "pasta de destino")
    .option("--template <template>", "Nome do template, por padrão é utilizado o 'cra-ts'", 'cra-ts')
    .action((folder, options) => {
        console.log(options);
        actionReactCreate(folder, options.template);
    });

program.parse();

async function actionReactCreate(folder, template = "cra-ts") {
    const emitter = degit(`OmegaSistemas/templates/templates/${template}`, {
        cache: true,
        force: true,
        verbose: true,
    });
    // console.log("dir", __dirname);
    emitter.clone(folder).then(() => {
        shell.cd(folder);
        shell.exec("yarn");
        console.log("done");
    });
}
