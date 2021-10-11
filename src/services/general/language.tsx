import { l } from '../../helpers/languageTools';
import { newParameters, changeParameter } from '../../helpers/urlTools';


type LangType = {
    lang: string;
    queryString: string;
    urlParams: URLSearchParams;
}

export function language({ lang, queryString, urlParams }: LangType): JSX.Element {
    return (
        <div key="languagePage" className="Ordinary-text" >
            <h1>
                {l({
                    "en": "Select your language",
                    "fr": "Choisissez votre langue"
                }, lang)}
            </h1>

            <div style={{
                textAlign: `center`
            }}>
                <button className="Lang-button" key="EnglishLang"
                    onClick={() => {
                        newParameters(changeParameter({
                            queryString,
                            urlParams,
                            param: "lang",
                            newValue: "en"
                        }))}}>
                    English
                </button>

                <br />

                <button className="Lang-button" key="frenchLang"
                    onClick={() => {
                        newParameters(changeParameter({
                            queryString,
                            urlParams,
                            param: "lang",
                            newValue: "fr"
                        }))}}>
                    Français
                </button>
            </div>
        </div >
    )

}
