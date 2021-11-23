import { l } from '../../helpers/languageTools';
import { changeParameter, newParameters } from '../../helpers/urlTools';

type Team = { 
    lang: string; 
    queryString: string; 
    urlParams: URLSearchParams; 
}

export function team({ lang, queryString, urlParams }: Team): JSX.Element {
    return (
        <div key="teamPage" className="Ordinary-text">
            <h1>
                {l({
                    "en": "Team",
                    "fr": "Équipe"
                }, lang)}
            </h1>

            
            <button key="see1" className="Cute-button" 
            onClick={() => {
                const queryStringServ: string = changeParameter({
                    queryString,
                    urlParams,
                    param: 'serv',
                    newValue: 'people'
                })
                newParameters(changeParameter({
                    queryString: queryStringServ,
                    urlParams,
                    param: 'page',
                    newValue: 'JoseCaballero'
                }))

            }}>{l({
                        "en": "See",
                        "fr": "voir"
                    }, lang)}</button> 
            José Manuel Rodríguez Caballero ({l(
                    {
                        "en": "Director",
                        "fr": "Directeur"
                    }, lang)}) 
            
        </div>
    )
}
