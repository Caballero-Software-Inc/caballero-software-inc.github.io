import { l } from "../../helpers/languageTools"
import { changeParameter, newParameters } from "../../helpers/urlTools"
import { JoseCaballero } from "./JoseCaballero"


type PeoplePage = {
    lang: string;
    urlParams: URLSearchParams
}

export function peoplePage({ lang, urlParams }: PeoplePage): JSX.Element {
    const page = urlParams.get('page')!;
    switch (page) {
        case "JoseCaballero":
            return JoseCaballero({ lang });
        default:
            newParameters(`?serv=main&page=welcome&lang=en`);
            return <noscript />
    }
}



