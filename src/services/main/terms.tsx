import { lJSX } from "../../helpers/languageTools";
import legal from "../../text/legal";


export function terms(lang: string): JSX.Element {
    return (<div key="terms" className="Ordinary-text">
        {lJSX({
            "en": legal.TermsAndConditionsEn,
            "fr": legal.TermsAndConditionsFr
        }, lang)}
    </div>)
}
