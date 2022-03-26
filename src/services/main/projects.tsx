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

            <h2>
                {l({
                    "en": "Project 1",
                    "fr": "Projet 1"
                }, lang)}
            </h2>

            <button key="see1" className="Cute-button" 
            onClick={() => {
                const queryStringServ: string = changeParameter({
                    queryString,
                    urlParams,
                    param: 'serv',
                    newValue: 'projects'
                })
                newParameters(changeParameter({
                    queryString: queryStringServ,
                    urlParams,
                    param: 'page',
                    newValue: 'bulkmath'
                }))

            }}>{l({
                        "en": "See",
                        "fr": "voir"
                    }, lang)}</button>  {l(
                    {
                        "en": "Bulk Metamathematical Limit",
                        "fr": "Limite Métamathématique en Vrac"
                    }, lang)} <br></br>

                    <div key="project1" className="Ordinary-text" style={{
                    textAlign: `left`,
                    color: `white`,
                    margin: `10pt`}}>
                    {l(
                    {
                        "en": "Abstract: Stephen Wolfram conjectured the existence of an attractor for the evolution of mathematics, which he calls the bulk metamathematical limit. In the same style of his computational equivalence principle, Wolfram conjectured that this attractor should be essentially the same for all branches of mathematics when considered separately. In this data science project, we study the evolution of mathematics according to a dataset (big data) consisting of mathematical proofs written in Isabelle/HOL (Archive of Formal Proofs). We will try to establish to what extent this dataset manifests the statistical properties conjectured by Wolfram.",
                        "fr": "Résumé : Stephen Wolfram a conjecturé l'existence d'un attracteur pour l'évolution des mathématiques, qu'il appelle la limite métamathématique globale. Dans le même style de son principe d'équivalence informatique, Wolfram a conjecturé que cet attracteur devrait être essentiellement le même pour toutes les branches des mathématiques lorsqu'elles sont considérées séparément. Dans ce projet de science des données, nous étudions l'évolution des mathématiques selon un ensemble de données (big data) constitué de preuves mathématiques écrites en Isabelle/HOL (Archive of Formal Proofs). Nous tenterons d'établir dans quelle mesure ce jeu de données manifeste les propriétés statistiques conjecturées par Wolfram."
                    }, lang)} <br></br> <br></br>
                    {l(
                    {
                        "en": "Keywords: Wolfram Physics Project; Data Science; Proof Assistants; Foundations of Mathematics; Eternal Inflation.",
                        "fr": "Mots clés: Wolfram Physics Project; science des données; Assistants de Démonstrations; Fondements des Mathématiques; Inflation Éternelle."
                    }, lang)}
                
                    </div>
                    

           
        </div>
    )
}
