import { newParameters } from '../helpers/urlTools';
import { pageStructure } from './pageStructure';
import { mainPage } from './main/index';
import { mainHead } from './main/head';

import { menuPage } from './menu/index';
import { menuHead } from './menu/head';

type ServiceParams = {
    lang: string;
    queryString: string;
    urlParams: URLSearchParams;
    backendUrl: string;
    officialEmail: string;
    signed: boolean;
};

export function selectService({ lang, queryString, urlParams, backendUrl, officialEmail, signed }: ServiceParams): JSX.Element {

    const service: string = urlParams.get('serv')!;
    switch (service) {
        case "main":
            return pageStructure({
                head: mainHead({ lang, queryString, urlParams, backendUrl, officialEmail, signed }),
                page: mainPage({ lang, queryString, urlParams, backendUrl, officialEmail })
            })
        case "menu":
            return pageStructure({
                head: menuHead({ lang, queryString, urlParams, backendUrl, officialEmail }),
                page: menuPage({ lang, queryString, urlParams, backendUrl, officialEmail })
            })
        default:
            newParameters(`?serv=main&page=welcome&lang=en`);
            return <noscript />
    }


}

