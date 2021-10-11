import { newParameters } from '../../helpers/urlTools';
import { language } from '../general/language';
import { welcome } from './welcome';


type MenuPage = { 
    lang: string; 
    queryString: string; 
    urlParams: URLSearchParams; 
    backendUrl: string; 
    officialEmail: string
}

export function menuPage({ lang, queryString, urlParams, backendUrl, officialEmail }: MenuPage): JSX.Element {
    const page = urlParams.get('page')!;
    switch (page) {
        case "welcome":
            return welcome({ lang, queryString, urlParams });
        case "language":
            return language({ lang, queryString, urlParams });
        default:
            newParameters(`?serv=main&page=welcome&lang=en`);
            return <noscript />
    }
}

