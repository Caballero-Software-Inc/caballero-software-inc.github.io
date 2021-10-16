import { l } from "../../helpers/languageTools";
import { register } from "../main/register";
import { signInCode } from "../main/signInCode";
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
    const postRegistration = () => {
        window.location.reload();
    }

    const unSignedJSX =
        (<div key="divEmail">
            <p key="pEmailUnsigned">{l({
                "en": "To find your email address and send your this public email, please log in (or register if you haven't already). We follow Canada's anti-span regulations and will only email you when you give us your consent. The only exception is for updates to our terms and conditions and privacy policy.",
                "fr": "Pour trouver votre adresse e-mail et vous envoyer ce courrier électronique public, veuillez vous connecter (ou vous inscrire si vous ne l'avez pas déjà fait). Nous suivons les réglementations anti-travée du Canada et ne vous enverrons un e-mail que lorsque vous nous donnerez votre consentement. La seule exception concerne les mises à jour de nos conditions générales et de notre politique de confidentialité."
            }, lang)}</p>

            <p>{">>> " + l({
                "en": "If you are already registered, please enter your identifier",
                "fr": "Si vous êtes déjà inscrit, veuillez saisir votre identifiant"
            }, lang) + " <<<"}</p>

            <label>
                {l({
                    "en": "Your email",
                    "fr": "Votre courrier électronique"
                }, lang)}
            </label> <br />

            <input id="signinInput1" key="signinInput1" type="text" className="Ordinary-text"
                style={{
                    backgroundColor: `black`,
                    color: `GreenYellow`
                }}
                size={30}
                maxLength={320}
            />

            <br /><br />

            <label>
                {l({
                    "en": "Your identifier",
                    "fr": "Votre identifiant"
                }, lang)}
            </label>

            <br />

            <input id="signinInput2" key="signinInput2" type="text" className="Ordinary-text"
                style={{
                    backgroundColor: `black`,
                    color: `GreenYellow`
                }}
                size={30}
                maxLength={320}
            />

            <br /><br />


            <button key="signinButton" className="Lang-button"
                onClick={() => signInCode({
                    email: (document.getElementById("signinInput1") as HTMLInputElement).value,
                    id: (document.getElementById("signinInput2") as HTMLInputElement).value,
                    lang,
                    queryString,
                    urlParams,
                    backendUrl,
                    postSignIn: () => {
                        localStorage.setItem('email', (document.getElementById("signinInput1") as HTMLInputElement).value);
                        localStorage.setItem('id', (document.getElementById("signinInput2") as HTMLInputElement).value);
                        window.location.reload();
                    }
                })}>
                {l({
                    "en": "Sign in",
                    "fr": "S'identifier"
                }, lang)}
            </button>

            <br /><br />

            <label>
                {">>> " + l({
                    "en": "If you have not yet registered, please do so below",
                    "fr": "Si vous n'êtes pas encore inscrit, veuillez le faire ci-dessous"
                }, lang) + " <<<"}
            </label>

            <br /><br />

            {register({ lang, queryString, urlParams, backendUrl, officialEmail, postRegistration })}
        </div>);

    const signedJSX = (<div key="divEmail">
        <p key="pEmail">{l({
            "en": "To receive this public email, please click on the following button. Please note that Caballero Software is not responsible for the content of this email.",
            "fr": "Pour recevoir ce courrier électronique public, veuillez cliquer sur le bouton suivant. Veuillez noter que Caballero Software n'est pas responsable du contenu de ce courrier électronique."
        }, lang)}</p>

        <button className="Menu-button" key="buttonEmail"
            onClick={() => sendPublicEmail(lang, backendUrl, urlParams.get('page')!, officialEmail)}
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

