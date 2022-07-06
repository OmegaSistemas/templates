const alert = require("cli-alerts");

module.exports = (type = "warning", ...msg) => {
    alert({
        type,
        name: type,
        msg
    });

};
