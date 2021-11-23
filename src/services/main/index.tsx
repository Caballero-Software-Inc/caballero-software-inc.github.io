import { changeParameter, newParameters } from '../../helpers/urlTools';

import { welcome } from './welcome';
import { projects } from './projects';
import { contact } from './contact';
import { team } from './team';
import { language } from '../general/language';
import { signIn } from './signIn';
import { register } from './register';

type IndexMain = {
    lang: string;
    queryString: string;
    urlParams: URLSearchParams;
    backendUrl: string;
    officialEmail: string;
};

export function mainPage({ lang, queryString, urlParams, backendUrl, officialEmail }: IndexMain): JSX.Element {
    const page = urlParams.get('page')!;
    switch (page) {
        case "welcome":
            return welcome(lang)
        case "projects":
            return projects(lang);
        case "team":
            return team({ lang, queryString, urlParams });
        case "contact":
            return contact(lang);
        case "language":
            return language({ lang, queryString, urlParams });
        case "signIn":
            return signIn({ lang, queryString, urlParams, backendUrl });
        case "register":
            const postRegistration = () => {
                const innerQueryString: string = changeParameter({
                    queryString,
                    urlParams,
                    param: 'serv',
                    newValue: 'main'
                });
                newParameters(changeParameter({
                    queryString: innerQueryString,
                    urlParams,
                    param: 'page',
                    newValue: 'signIn'
                }))
            };
            return register({ lang, queryString, urlParams, backendUrl, officialEmail, postRegistration });
        default:
            newParameters(`?serv=main&page=welcome&lang=en`);
            return <noscript />
    }
}

