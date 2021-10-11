import { l } from '../../helpers/languageTools';


export function projects(lang: string): JSX.Element {
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

            {/* project 1  */}

            <h2>{l({
                "en": "Project 1: Caballero|Pigeon",
                "fr": "Projet 1 : Caballero|Pigeon"
            }, lang)}
            </h2>

            <div key="proj2" style={{
                marginLeft: `30px`,
                marginRight: `30px`,
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                textAlign: `left`
            }}>
                <h4 key="polemicalDescription">
                    {l({
                        "en": "An email marketing tool that allows one person to send messages to anyone else who clicks on a link. Messages can include advertising, personalized by the sender. This service is like mailing lists, but the recipient, not the sender, controls when to receive the email.",
                        "fr": "Un outil de marketing par e-mail qui permet à une personne d'envoyer des messages à toute autre personne qui clique sur un lien. Les messages peuvent inclure de la publicité, personnalisée par l'expéditeur. Ce service est comme les listes de diffusion, mais le destinataire, et non l'expéditeur, contrôle quand recevoir l'e-mail."
                    }, lang)}
                </h4>
            </div>            
        </div>
    )
}
