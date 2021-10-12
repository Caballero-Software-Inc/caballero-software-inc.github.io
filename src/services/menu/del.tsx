import { l } from "../../helpers/languageTools";
import { delCode } from "./delCode";

type Del = { 
    lang: string; 
    queryString: string; 
    urlParams: URLSearchParams; 
    backendUrl: string; 
}

export function del({ lang, queryString, urlParams, backendUrl }: Del): JSX.Element {
    const email: string = localStorage.getItem('email')!;
    const id: string = localStorage.getItem('id')!;

    return (
        <div key="deletePage" className="Ordinary-text"
          style={{
            textAlign: `center`
          }}>
    
          <h1>
            {l({
                "en": "Are you sure you want to delete your account?",
                "fr": "Êtes-vous sûr de vouloir supprimer votre compte ?"
            }, lang)}
          </h1>
    
          <button className="Lang-button" key="EnglishLang"
            onClick={() => delCode(email, id, backendUrl)}
          >
            {l({
                "en": "Delete",
                "fr": "Supprimer"
            }, lang)}
          </button>
        </div>
      )
}