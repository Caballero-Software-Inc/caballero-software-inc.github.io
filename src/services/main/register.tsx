import { l, lJSX } from "../../helpers/languageTools";
import legal from "../../text/legal";
import { registerCode } from "./registerCode";

type Register = {
  lang: string;
  queryString: string;
  urlParams: URLSearchParams;
  backendUrl: string;
  officialEmail: string;
}

export function register({ lang, queryString, urlParams, backendUrl, officialEmail }: Register): JSX.Element {
  return (
    <div key="registerPage" className="Ordinary-text"
      style={{
        textAlign: `center`
      }}>

      <label key="registerLabel">
        {l({
          "en": "Your email",
          "fr": "Votre courrier électronique"
        }, lang)}
      </label>

      <br />

      <input id="registerInput" key="registerInput" type="text" className="Ordinary-text"
        style={{
          backgroundColor: `black`,
          color: `GreenYellow`
        }}
        size={30}
        maxLength={320}
      />

      <br /><br />

      <label key="downloadLabel">
        {l({
          "en": "Please read our terms and conditions and privacy policy. Don't forget to scroll down.",
          "fr": "Prière de lire nos conditions générales et notre politique de confidentialité. N'oubliez pas de faire défiler vers le bas."
        }, lang)}
      </label>

      <br /><br /><br />

      <div style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        height: `450px`,
        width: `60%`,
        overflow: "scroll",
        color: `yellow`,
        border: `solid green`,
        textAlign: `left`
      }}
        key="termsandconditions">

        {lJSX({
          "en": legal.TermsAndConditionsEn,
          "fr": legal.TermsAndConditionsFr
        }, lang)}
      </div>

      <br /><br />

      <div style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        height: `450px`,
        width: `60%`,
        overflow: "scroll",
        color: `yellow`,
        border: `solid green`,
        textAlign: `left`
      }} key="privacypolicy">

        {lJSX({
          "en": legal.PrivacyPolicyEn,
          "fr": legal.PrivacyPolicyFr
        }, lang)}

      </div>

      <br /><br />

      <label key="agreementLabel">{l({
        "en": "The act of registration implies that the user agrees with our terms and conditions and our privacy policy.",
        "fr": "L'acte d'inscription implique que l'utilisateur accepte nos conditions générales et notre politique de confidentialité."
      }, lang)}
      </label>

      <br /><br /><br />

      <button key="registerButton" className="Lang-button"
        onClick={() => registerCode({
          email: (document.getElementById("registerInput") as HTMLInputElement).value,
          lang, 
          queryString, 
          urlParams, 
          backendUrl, 
          officialEmail })}>
        {l({
          "en": "Register",
          "fr": "S'inscrire"
        }, lang)}
      </button>

      <br /><br />

    </div>
  )
}


