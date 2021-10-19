import { lJSX } from "../../helpers/languageTools";
import legal from "../../text/legal";

export function privacy(lang: string): JSX.Element {
    return (<div key="terms" className="Ordinary-text">
        {lJSX({
            "en": legal.PrivacyPolicyEn,
            "fr": legal.PrivacyPolicyFr
        }, lang)}
    </div>)
}
