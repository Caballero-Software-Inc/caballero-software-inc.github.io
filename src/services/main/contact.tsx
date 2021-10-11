import { l } from '../../helpers/languageTools';


export function contact(lang: string): JSX.Element {
    return (
        <div key="contactPage">
            <h1>
                {l({
                    "en": "Contact",
                    "fr": "Nous Joindre"
                }, lang)}
            </h1>

            <p className="Ordinary-text" key="contactText">
                {l({
                    "en": "Address: ",
                    "fr": "Adresse : "
                }, lang)} 2-34 Columbia St W, Waterloo, ON, Canada, N2L 3K5 <br /><br />
                {l({
                    "en": "Email: ",
                    "fr": "Courrier électronique : "
                }, lang)} caballero@caballero.software <br /><br />
                {l({
                    "en": "Phone: ",
                    "fr": "Téléphone : "
                }, lang)} +1 (438) 993-2054
            </p>
        </div>
    )
}
