import "./index.scss";
import "omega-ui";

import ReactDOM from "react-dom/client";

import getClarityApi from "utils/getClarityApi";

import * as Sentry from "@sentry/browser";

import "./i18n";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

if (process.env.NODE_ENV !== "development") {
    if (process.env.REACT_APP_GLITCHTIP_DSN !== "") {
        Sentry.init({
            dsn: process.env.REACT_APP_GLITCHTIP_DSN,
            async beforeSend(event) {
                if (event.exception) {
                    Sentry.showReportDialog({
                        eventId: event.event_id,
                        title: "Parece que estamos com problemas...",
                        subtitle: "Nossa equipe foi avisada. Se você puder ajudar, conte-nos o que aconteceu abaixo.",
                        subtitle2: "Obrigado por sua colaboração, a Omega Sistemas agradece!",
                        labelName: "Nome",
                        labelEmail: "E-mail",
                        labelComments: "O que aconteceu?",
                        labelClose: "Fechar",
                        labelSubmit: "Enviar",
                        successMessage: "Obrigado por sua colaboração!",
                        errorFormEntry: "Por favor, preencha todos os campos.",
                    });
                }
                return event;
            },
        });
    }

    const clarityApiUrl = process.env.REACT_APP_CLARITY_API;

    if (clarityApiUrl && clarityApiUrl !== "") {
        getClarityApi(clarityApiUrl);
    }
}

root.render(
    // <React.StrictMode>
    <>
        <App />
    </>,
    // </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
