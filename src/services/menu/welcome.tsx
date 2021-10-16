import { l } from "../../helpers/languageTools";
import { changeParameter, newParameters } from "../../helpers/urlTools";
import { getCredits } from "./getCredits";

type Welcome = {
  lang: string;
  queryString: string;
  urlParams: URLSearchParams;
  backendUrl: string
}

export function welcome({ lang, queryString, urlParams, backendUrl }: Welcome): JSX.Element {
  return (
    <div style={{
      height: `450px`,
      overflow: "scroll",
      color: `yellow`
    }} key="welcomeMenuPage">


      <h1 key="greetingsMenu">
        {l({
          "en": `Caballero Software Menu`,
          "fr": `Menu de Caballero Software`
        }, lang)}
      </h1>

      <button className="Menu-button" key="myCredits"
        onClick={async () => {
          const credits = await getCredits(backendUrl);
          alert(l({
            "en": `You have ${credits} credits.`,
            "fr": `Vous avez ${credits} crédites.`
          }, lang))
        }}>
        {l({
          "en": `Show Credits`,
          "fr": `Afficher les Crédits`
        }, lang)}
      </button>

      <br />

      <button className="Menu-button" key="publicEmail"
        onClick={async () => {
          newParameters(
            changeParameter(
              {
                queryString,
                urlParams,
                param: 'page',
                newValue: 'pEmail'
              })
          )
        }}>
        {l({
          "en": `Public Email`,
          "fr": `Courrier électronique public`
        }, lang)}
      </button>


    </div>
  )
}

