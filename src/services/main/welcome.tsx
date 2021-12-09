import { l } from '../../helpers/languageTools';

export function welcome(lang: string): JSX.Element {
    return (
        <div
            style={{
                height: `600px`,
                color: `yellow`,
            }} key="welcomePage">

            <h1 key="greetings">
                {l({
                    "en": "Welcome to Caballero Software!",
                    "fr": "Bienvenue chez Caballero Software!"
                }, lang)}
            </h1>

            <div className="iframe-container" key="video">
                <iframe width="560" height="315"
                    src={l({
                        "en": "https://www.youtube.com/embed/dC0fSSdQCJ8",
                        "fr": "https://www.youtube.com/embed/2cRwbX6HY4k"
                    }, lang)}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen>
                </iframe>
            </div>

            <h3 key="goal">
                {l({
                    "en": "Where others have given up, we start our journey.",
                    "fr": "Là où d'autres ont abandonné, nous commençons notre voyage."
                }, lang
                )}
            </h3>
        </div>
    )
}

