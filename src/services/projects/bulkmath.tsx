import { l } from "../../helpers/languageTools"

type BulkmathPage = {
    lang: string;
}

export function bulkmath({ lang }: BulkmathPage): JSX.Element {
    return (
        <div key="bulkmathPage" className="Ordinary-text" style={{
            textAlign: `center`}}>
            <h1>
                {l({
                    "en": "Bulk Metamathematical Limit",
                    "fr": "Limite Métamathématique en Vrac"
                }, lang)}
            </h1>
            
            
            <h2 style={{
                    textAlign: `left`,
                    color: `white`,
                    margin: `10pt`}}>
                {l({
                    "en": "Abstract",
                    "fr": "Résumé"
                }, lang)}
            </h2>

            <p style={{
                    textAlign: `left`,
                    color: `white`,
                    margin: `10pt`}}>
                {l({
                    "en": "Stephen Wolfram conjectured the existence of an attractor for the evolution of mathematics, which he calls the bulk metamathematical limit. In the same style of his computational equivalence principle, Wolfram conjectured that this attractor should be essentially the same for all branches of mathematics when considered separately. In this data science project, we study the evolution of mathematics according to a dataset (big data) consisting of mathematical proofs written in Isabelle/HOL (Archive of Formal Proofs). We will try to establish to what extent this dataset manifests the statistical properties conjectured by Wolfram.",
                    "fr": "Stephen Wolfram a conjecturé l'existence d'un attracteur pour l'évolution des mathématiques, qu'il appelle la limite métamathématique globale. Dans le même style de son principe d'équivalence informatique, Wolfram a conjecturé que cet attracteur devrait être essentiellement le même pour toutes les branches des mathématiques lorsqu'elles sont considérées séparément. Dans ce projet de science des données, nous étudions l'évolution des mathématiques selon un ensemble de données (big data) constitué de preuves mathématiques écrites en Isabelle/HOL (Archive of Formal Proofs). Nous tenterons d'établir dans quelle mesure ce jeu de données manifeste les propriétés statistiques conjecturées par Wolfram."
                }, lang)}
            </p>

            
            <div style={{
                    textAlign: `left`,                    
                    margin: `10pt`}}>

                {l({
                    "en": "Company developing the project: ",
                    "fr": "Société développant le projet : "
                }, lang)} <a href="https://caballero.software/">Caballero Software Inc.</a>

            <br/><br/>
            
            {l({
                    "en": "Description of the Project: ",
                    "fr": "Descriptif du projet : "
                }, lang)} <a href="https://github.com/Caballero-Software-Inc/bulkmath/blob/main/description/description.pdf">See description.pdf</a>

            <br/><br/>
            
            {l({
                    "en": "GitHub repository of the project: ",
                    "fr": "Référentiel GitHub du projet : "
                }, lang)} <a href="https://github.com/Caballero-Software-Inc/bulkmath">Go to GitHub</a>


            </div>

            <br/><br/>

        </div>
    )
}
