import { newParameters } from '../helpers/urlTools';
import { pageStructure } from './pageStructure';
import { mainPage } from './main/index';
import { mainHead } from './main/head';

import { menuPage } from './menu/index';
import { menuHead } from './menu/head';
import { legalPage } from './legal/index';
import { legalHead } from './legal/legalHead';


type ServiceParams = {
    lang: string;
    queryString: string;
    urlParams: URLSearchParams;
    backendUrl: string;
    officialEmail: string;
    unsigned: boolean;
};

export function selectService({ lang, queryString, urlParams, backendUrl, officialEmail, unsigned }: ServiceParams): JSX.Element {

    const service: string = urlParams.get('serv')!;
    switch (service) {
        case "main":
            return pageStructure({
                head: mainHead({ lang, queryString, urlParams, backendUrl, officialEmail, unsigned }),
                page: mainPage({ lang, queryString, urlParams, backendUrl, officialEmail })
            })
        case "menu":
            return pageStructure({
                head: menuHead({ lang, queryString, urlParams, backendUrl, officialEmail }),
                page: menuPage({ lang, queryString, urlParams, backendUrl, officialEmail })
            })
        case "legal":
            return pageStructure({
                head: legalHead({ lang, queryString, urlParams }),
                page: legalPage({ lang, urlParams })
            })
        default:
            newParameters(`?serv=main&page=welcome&lang=en`);
            return <noscript />
    }
}


