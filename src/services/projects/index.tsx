import { l } from "../../helpers/languageTools"
import { changeParameter, newParameters } from "../../helpers/urlTools"
import { bulkmath } from "./bulkmath"


type projectsPage = {
    lang: string;
    urlParams: URLSearchParams
}

export function projectsPage({ lang, urlParams }: projectsPage): JSX.Element {
    const page = urlParams.get('page')!;
    switch (page) {
        case "bulkmath":
            return bulkmath({ lang });
        default:
            newParameters(`?serv=main&page=welcome&lang=en`);
            return <noscript />
    }
}



