import { newParameters } from '../../helpers/urlTools';

import { terms } from '../legal/terms';
import { privacy } from '../legal/privacy';

type IndexLegal = {
    lang: string,
    urlParams: URLSearchParams
};

export function legalPage({ lang, urlParams }: IndexLegal): JSX.Element {
    const page = urlParams.get('page')!;
    switch (page) {
        case "terms":
            return terms(lang)
        case "privacy":
            return privacy(lang)
        default:
            newParameters(`?serv=main&page=welcome&lang=en`);
            return <noscript />
    }
}

