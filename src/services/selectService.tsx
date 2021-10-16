import { newParameters } from '../helpers/urlTools';
import { pageStructure } from './pageStructure';
import { mainPage } from './main/index';
import { mainHead } from './main/head';

import { menuPage } from './menu/index';
import { menuHead } from './menu/head';
import { emailPage } from './email/emailPage';


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
        case "email":
            return pageStructure({
                head: mainHead({ lang, queryString, urlParams, backendUrl, officialEmail, unsigned }),
                page: emailPage({ lang, queryString, urlParams, backendUrl, officialEmail, unsigned })
            })
        default:
            newParameters(`?serv=main&page=welcome&lang=en`);
            return <noscript />
    }
}

