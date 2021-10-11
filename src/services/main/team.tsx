import { l } from '../../helpers/languageTools';

export function team(lang: string): JSX.Element {
    return (
        <div key="teamPage" className="Ordinary-text">
            <h1>
                {l({
                    "en": "Team",
                    "fr": "Équipe"
                }, lang)}
            </h1>

            <li>
                José Manuel Rodríguez Caballero ({l(
                    {
                        "en": "Director",
                        "fr": "Directeur"
                    }, lang)})
            </li>
        </div>
    )
}
