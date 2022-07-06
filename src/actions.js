const degit = require("degit");
// const fs = require("fs");
var shell = require("shelljs");

async function reactCreate(folder, template = "cra-ts") {
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

module.exports = {
    reactCreate
}