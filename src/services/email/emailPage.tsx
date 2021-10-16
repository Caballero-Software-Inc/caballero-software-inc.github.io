import { l } from "../../helpers/languageTools";
import { sendPublicEmail } from "./sendPublicEmail";

type EmailPage = {
    lang: string;
    queryString: string, 
    urlParams: URLSearchParams,
    backendUrl: string;
    officialEmail: string;
    unsigned: boolean
}


export function emailPage({ lang, queryString, urlParams, backendUrl, officialEmail, unsigned }: EmailPage): JSX.Element {

    const unSignedJSX = (<p key="pEmailUnsigned">{l({
        "en": "To find your email address and send yourself this public email, please log in (or register if you haven't already). We follow Canada's anti-span regulations and will only email you when you give us your consent. The only exception is for updates to our terms and conditions and privacy policy.",
        "fr": "Pour trouver votre adresse e-mail et vous envoyer cet e-mail public, veuillez vous connecter (ou vous inscrire si vous ne l'avez pas déjà fait). Nous suivons les réglementations anti-travée du Canada et ne vous enverrons un e-mail que lorsque vous nous donnerez votre consentement. La seule exception concerne les mises à jour de nos conditions générales et de notre politique de confidentialité."

    }, lang)}</p>);

    const signedJSX = (<div key="divEmail">
        <p key="pEmail">{l({
            "en": "To receive this public email, please click on the following button. Please note that Caballero Software is not responsible for the content of this email.",
            "fr": "Pour recevoir ce courrier électronique public, veuillez cliquer sur le bouton suivant. Veuillez noter que Caballero Software n'est pas responsable du contenu de ce courrier électronique."
        }, lang)}</p>

        <button className="Menu-button" key="buttonEmail"
        onClick={() => sendPublicEmail( lang, backendUrl, urlParams.get('page')! )}
        >{l({
            "en": "Send me this public email",
            "fr": "Envoyez-moi ce courriel public"
        }, lang)}</button>

    </div>)

    return (
        <div
            style={{
                height: `600px`,
                overflow: "scroll",
                color: `yellow`,
            }} key="welcomePage">

            <h1 key="greetings">
                {l({
                    "en": "Welcome to Caballero Software's public messaging service",
                    "fr": "Bienvenue sur le service de messagerie publique de Caballero Software"
                }, lang)}
            </h1>

            {unsigned ? unSignedJSX : signedJSX}

        </div>
    )
}

