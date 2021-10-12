import logo from '../../img/logo1.png';
import { l } from '../../helpers/languageTools';
import { newParameters, changeParameter } from '../../helpers/urlTools';


type MenuHead = {
    lang: string;
    queryString: string;
    urlParams: URLSearchParams;
    backendUrl: string;
    officialEmail: string
}

export function menuHead({ lang, queryString, urlParams, backendUrl, officialEmail }: MenuHead): JSX.Element {
    return (
        <table style={{ width: `100%` }} key="headOfPagesFarm">
            <tbody>
                <tr>
                    <td style={{
                        width: `15%`
                    }}>
                        <input type="image" style={{
                            marginLeft: `10px`
                        }} alt="logo" src={logo} className="Main-logo" key="logo"
                            onClick={() => {
                                newParameters('');
                            }}
                        />
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
                                    newParameters(changeParameter(
                                        {
                                            queryString, 
                                            urlParams, 
                                            param: 'page', 
                                            newValue: 'welcome'
                                        }))
                                }} key="buttonMenu">
                                    {l({
                                        "en": "Menu",
                                        "fr": "Menu"
                                    }, lang)}
                                </button>

                                <button className="Cute-button" onClick={() => {
                                    newParameters(changeParameter(
                                        {
                                            queryString, 
                                            urlParams, 
                                            param: 'page', 
                                            newValue: 'language'
                                        }))
                                }} key="buttonLanguage">
                                    {l({
                                        "en": "Language",
                                        "fr": "Langage"
                                    }, lang)}
                                </button>

                                <button className="Cute-button" onClick={() => {
                                    localStorage.setItem('email', '');
                                    localStorage.setItem('id', '');
                                    newParameters('');
                                }} key="buttonStart">
                                    {l({
                                        "en": "Sign out",
                                        "fr":"Déconnexion"
                                    }, lang)}
                                </button>

                                <button className="Cute-button" onClick={() => {
                                    newParameters(changeParameter(
                                        {
                                            queryString, 
                                            urlParams, 
                                            param: 'page', 
                                            newValue: 'del'
                                        }))
                                }} key="buttonDelete">
                                    {l({
                                        "en": "Delete",
                                        "fr": "Supprimer"
                                    }, lang)}
                                </button>
                            </div>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}


