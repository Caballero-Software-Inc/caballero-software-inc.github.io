import { l } from '../../helpers/languageTools';

import { changeParameter, newParameters } from '../../helpers/urlTools';


type Projects = { 
    lang: string; 
    queryString: string; 
    urlParams: URLSearchParams; 
}

export function projects({ lang, queryString, urlParams }: Projects): JSX.Element {
    return (
        <div key="teamPage" className="Ordinary-text" style={{
            textAlign: `center`
        }}>
            <h1>
                {l({
                    "en": "Projects",
                    "fr": "Projets"
                }, lang)}
            </h1>

        

                    

           
        </div>
    )
}
