import { l } from "../../helpers/languageTools"
import { changeParameter, newParameters } from "../../helpers/urlTools"
import { saveEmail } from "./saveEmail"

type PEmail = {
    email: string, 
    id: string,
    lang: string;
    queryString: string;
    urlParams: URLSearchParams;
    backendUrl: string;
}

export function pEmail({ email, id, lang, queryString, urlParams, backendUrl }: PEmail): JSX.Element {
    return (
        <div key="pEmailPage" className="Ordinary-text"
            style={{
                textAlign: `center`
            }}>

            <h1>
                {l({
                    "en": "Write your public email here.",
                    "fr": "Écrivez votre courriel public ici."
                }, lang)}
            </h1>

            <h2>
                {l({
                    "en": "From",
                    "fr": "De"
                }, lang)}
            </h2>

            <input key="messageFrom" id="messageFrom" type="text"
                placeholder={l({
                    "en": "example: José Caballero",
                    "fr": "exemple : José Caballero"
                }, lang)}
                style={{
                    marginLeft: `auto`,
                    marginRight: `auto`,
                    height: `auto`,
                    width: `70%`,
                    overflow: "scroll",
                    color: `#0d42ba`,
                    border: `solid green`,
                    textAlign: `left`
                }}
            />

            <br />

            <h2>
                {l({
                    "en": "Subject",
                    "fr": "Objet"
                }, lang)}
            </h2>

            <input key="messageSubject" id="messageSubject" type="text"
                placeholder={l({
                    "en": "example: What I think about pets",
                    "fr": "exemple : Ce que je pense des animaux de compagnie"
                }, lang)}
                style={{
                    marginLeft: `auto`,
                    marginRight: `auto`,
                    height: `auto`,
                    width: `70%`,
                    overflow: "scroll",
                    color: `#0d42ba`,
                    border: `solid green`,
                    textAlign: `left`
                }}
            />

            <br />

            <h2>
                {l({
                    "en": "Body (ordinary text or HTML)",
                    "fr": "Corps (texte ordinaire ou HTML)"
                }, lang)}
            </h2>

            <br />


            <textarea key="messageInput" id="messageInput"
                placeholder={l({
                    "en": "example: I would like to express why I think dogs have been overrated as the smartest pet ever. I think cats deserve this position. Indeed, dogs are not able to feed themselves, while cats can hunt for life... blah blah blah...",
                    "fr": "exemple : Dans cet courriel, je voudrais exprimer pourquoi je pense que les chiens ont été surestimés en tant qu'animal de compagnie le plus intelligent de tous les temps. Je pense que les chats méritent cette position. En effet, les chiens ne sont pas capables de se nourrir, tandis que les chats peuvent chasser pour la vie... bla bla bla..."
                }, lang)}
                style={{
                    marginLeft: `auto`,
                    marginRight: `auto`,
                    height: `auto`,
                    width: `70%`,
                    overflow: "scroll",
                    color: `#0d42ba`,
                    border: `solid green`,
                    textAlign: `left`
                }}
                cols={40} rows={10}
            />

            <br />

            <h1>
                {l({
                    "en": "Display",
                    "fr": "Affichage"
                }, lang)}
            </h1>

            <br />

            <div key="showHere" id="showHere" style={{
                marginLeft: `auto`,
                marginRight: `auto`,
                height: `auto`,
                width: `70%`,
                overflow: "scroll",
                color: "black",
                backgroundColor: "white",
                border: `solid green`,
                textAlign: `left`
            }} />

            <br />

            <button className="Lang-button" key="show"
                onClick={() => {
                    (document.getElementById("showHere") as HTMLInputElement).innerHTML = (document.getElementById("messageInput") as HTMLInputElement).value
                }}

            >
                {l({
                    "en": "Show",
                    "fr": "Montrer"
                }, lang)}
            </button>

            <br />

            <button className="Lang-button" key="submit"

                onClick={async (): Promise<void> => {
                    const emailId: string = await saveEmail({
                        email,
                        id,
                        from: (document.getElementById("messageFrom") as HTMLInputElement).value,
                        subject: (document.getElementById("messageSubject") as HTMLInputElement).value,
                        html: (document.getElementById("messageInput") as HTMLInputElement).value,
                        backendUrl
                    });
                    alert(l({
                        "en": "Your public email has been saved. To share it on social media, just copy the link on the next page.",
                        "fr": "Votre courrier électronique public a été enregistré. Pour le partager sur les réseaux sociaux, copiez simplement le lien sur la page suivante."
                    }, lang));
                    const innerQueryString: string = changeParameter(
                        {
                            queryString,
                            urlParams, 
                            param: 'serv', 
                            newValue: `email`
                        })
                    newParameters(changeParameter(
                        {
                            queryString: innerQueryString, 
                            urlParams, 
                            param: 'page', 
                            newValue: emailId
                        }));
                }}>
                {l({
                    "en": "Submit",
                    "fr": "Soumettre"
                }, lang)}
            </button>
        </div>
    )
}

