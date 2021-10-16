import { l } from "../../helpers/languageTools";
import { changeParameter, newParameters } from "../../helpers/urlTools";
import { signInCode } from "./signInCode";

type SignIn = { 
    lang: string; 
    queryString: string; 
    urlParams: URLSearchParams; 
    backendUrl: string; 
}

export function signIn({ lang, queryString, urlParams, backendUrl }: SignIn): JSX.Element {
    return (
        <div key="signinPage" className="Ordinary-text"
            style={{
                textAlign: `center`
            }}>

            <label>
                {l({
                    "en": "Your email",
                    "fr": "Votre courrier électronique"
                }, lang)}
            </label>
            <br />

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
                        const queryStringInner = changeParameter({
                            queryString,
                            urlParams,
                            param: 'serv',
                            newValue: 'menu'
                        });
                        localStorage.setItem('email', (document.getElementById("signinInput1") as HTMLInputElement).value);
                        localStorage.setItem('id', (document.getElementById("signinInput2") as HTMLInputElement).value);
                    
                        newParameters(changeParameter({
                            queryString: queryStringInner,
                            urlParams,
                            param: 'page',
                            newValue: 'welcome'
                        }));
                     }
                })}>
                {l({
                    "en": "Sign in",
                    "fr": "S'identifier"
                }, lang)}
            </button>

            <br /><br />

            <label>{l({
                "en": "New user? Do not hesitate to register.",
                "fr": "Nouvel utilisateur? N'hésitez pas à vous inscrire."
            }, lang)}</label>

            <br />

            <button className="Cute-button" onClick={() => {
                newParameters(changeParameter({
                    queryString,
                    urlParams,
                    param: 'page',
                    newValue: 'register'
                }))
            }} key="buttonRegister">
                {l({
                    "en": "Register",
                    "fr": "S'inscrire"
                }, lang)}
            </button>
            <br />
        </div>
    )
}

