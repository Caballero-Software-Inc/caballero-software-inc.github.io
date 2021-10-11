import { l } from "../../helpers/languageTools";

type Welcome = {
    lang: string; 
    queryString: string; 
    urlParams: URLSearchParams; 
}

export function welcome({ lang, queryString, urlParams }: Welcome): JSX.Element {
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
                /*
              const credits = await getCredits(backendUrl, email, id);
              alert(l([`You have ${credits} credits.`, `Vous avez ${credits} crédites.`], lang))
              */
            }}>
            {l({
                "en": `Show Credits`,
                "fr": `Afficher les Crédits`
            }, lang)}
          </button>
    
          <br />
    
          <button className="Menu-button" key="polemicalButton"
            onClick={() => {
             // newParameters(changeParameter(queryString, urlParams, 'page', 'email'));
            }}>
            {l({
                "en": `Email Marketing`,
                "fr": `Marketing par Courriel `
            }, lang)}
          </button>
    
        </div>
      )
}
