import { l } from "../../helpers/languageTools"
import image from "./JoseCaballeroPic1.jpg";


type PeoplePage = {
    lang: string;

}

export function JoseCaballero({ lang }: PeoplePage): JSX.Element {
    return (
        <div key="JoseCaballeroPage" className="Ordinary-text">
            <h1>
                {l({
                    "en": "Page of José Manuel Rodríguez Caballero",
                    "fr": "Page de José Manuel Rodríguez Caballero"
                }, lang)}
            </h1>
            <div key="mainDiv" style={{
                textAlign: `center`
            }}>
                <img src={image} alt="Jose Caballero" key="picture"
                    style={{ width: `40%` }}
                />

                <br />

                <h2 key="credentials"> {l({
                    "en": "Digital Credentials",
                    "fr": "Certificats Numériques"
                }, lang)} </h2>

                <a href="https://www.credly.com/badges/8df30bc9-9157-4362-bc13-1e1eaa001830/linked_in">Fundamentals of Scalable Data Science</a>

                <br></br> <br></br>

                <a href="https://www.credly.com/earner/earned/badge/4e51b587-5d0c-4d05-82a1-c26d6de1f443">Advanced Machine Learning and Signal Processing</a>


                <h2 key="publications"> {l({
                    "en": "Publications and Preprints",
                    "fr": "Publications et Prépublications "
                }, lang)} </h2>

                <a href="https://scholar.google.ca/citations?user=D8zDZ7IAAAAJ">Google Scholar</a>

                <h2 key="projects"> {l({
                    "en": "Projects",
                    "fr": "Projets"
                }, lang)} </h2>

                <a href="https://caballero.software/">Startup: Caballero Software Inc</a>

                <h2 key="miscellaneous"> {l({
                    "en": "Miscellaneous",
                    "fr": "divers"
                }, lang)} </h2>

                <a href="https://www.wolframphysics.org/people/jose-manuel-rodriguez-caballero/">Wolfram Physics Project</a>

                <h2 key="contact"> {l({
                    "en": "To contact please write to: ",
                    "fr": "Pour contacter, s'il vous plaît écrivez à :"
                }, lang)} </h2>

                <p>
                    josephcmac at gmail dot com
                </p>


            </div>

            <br></br><br></br><br></br><br></br><br></br>

        </div>
    )
}
