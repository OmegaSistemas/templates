import { initReactI18next } from "react-i18next";

import i18n from "i18next";

import ptBr from "./pt_br.json";

const resources = {
    pt_br: ptBr,
};

i18n.use(initReactI18next) // passes i18n down to react-i18next
    .init(
        {
            resources,
            lng: "pt_br",
            keySeparator: ".",
            interpolation: {
                escapeValue: false,
                format(value, format) {
                    if (format === "uppercase") {
                        return value.toUpperCase();
                    }
                    return value;
                },
            },
        },
        () => console.log("translate loaded"),
    );

export default i18n;
