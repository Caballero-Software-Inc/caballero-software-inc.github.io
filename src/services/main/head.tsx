import logo from '../../img/logo1.png';
import { l } from '../../helpers/languageTools';
import { newParameters, changeParameter } from '../../helpers/urlTools';

type HeadMain = {
    lang: string;
    queryString: string;
    urlParams: URLSearchParams;
    backendUrl: string;
    officialEmail: string;
    unsigned: boolean;
};

export function mainHead({ lang, queryString, urlParams, backendUrl, officialEmail, unsigned }: HeadMain): JSX.Element {
    return (
        <table style={{ width: `100%` }} key="headOfPages">
            <tbody>
                <tr>
                    <td style={{
                        width: `15%`
                    }}>
                        <input type="image" style={{
                            marginLeft: `10px`
                        }} alt="logo" src={logo} className="Main-logo" key="logo"
                            onClick={() => {
                                newParameters(
                                    changeParameter(
                                        {
                                            queryString,
                                            urlParams,
                                            param: 'page',
                                            newValue: 'welcome'
                                        })
                                )
                            }} />
                    </td>

                    <td style={{
                        width: `85%`
                    }}>
                        <div className="Head" key="Head">
                            <div key="Skull" style={{
                                marginLeft: `10px`,
                                flex: 1,
                                flexDirection: 'row',
                                justifyContent: 'space-between'
                            }}>

                                <button className="Cute-button" onClick={() => {
                                    newParameters(
                                        changeParameter(
                                            {
                                                queryString,
                                                urlParams,
                                                param: 'page',
                                                newValue: 'projects'
                                            })
                                    )
                                }} key="buttonProject">
                                    {l({
                                        "en": "Projects",
                                        "fr": "Projects"
                                    }, lang)}
                                </button>

                                <button className="Cute-button" onClick={() => {
                                    newParameters(
                                        changeParameter(
                                            {
                                                queryString,
                                                urlParams,
                                                param: 'page',
                                                newValue: 'team'
                                            })
                                    )
                                }} key="buttonTeam">
                                    {l({
                                        "en": "Team",
                                        "fr": "Équipe"
                                    }, lang)}
                                </button>

                                <button className="Cute-button" onClick={() => {
                                    newParameters(
                                        changeParameter(
                                            {
                                                queryString,
                                                urlParams,
                                                param: 'page',
                                                newValue: 'contact'
                                            })
                                    )
                                }} key="buttonContact">
                                    {l({
                                        "en": "Contact",
                                        "fr": "Nous Joindre"
                                    }, lang)}
                                </button>

                                <button className="Cute-button" onClick={() => {
                                    newParameters(
                                        changeParameter(
                                            {
                                                queryString,
                                                urlParams,
                                                param: 'page',
                                                newValue: 'language'
                                            })
                                    )
                                }} key="buttonLanguage">
                                    {l({
                                        "en": "Language",
                                        "fr": "Langage"
                                    }, lang)}
                                </button>

                                
                            </div>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    );
}

