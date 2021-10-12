import { changeParameter, newParameters } from "../../helpers/urlTools";
import axios from 'axios';


type SignInCode = {
     email: string; 
     id: string;
     lang: string
     queryString: string; 
     urlParams: URLSearchParams;
     backendUrl: string
}

interface Response {
    ok: boolean;
    error?: string
  }

export async function signInCode({ email, id, lang, queryString, urlParams, backendUrl }: SignInCode): Promise<void> {

    const response = await axios.get<Response>(backendUrl + `account/signin?lang=${lang}&email=${email}&id=${id}`);

    if (response.data.ok) {
        const queryStringInner = changeParameter({
            queryString,
            urlParams,
            param: 'serv',
            newValue: 'menu'
        });
        localStorage.setItem('email', email);
        localStorage.setItem('id', id);
    
        newParameters(changeParameter({
            queryString: queryStringInner,
            urlParams,
            param: 'page',
            newValue: 'welcome'
        }));

    } else {
        alert(response.data.error)
    }
}
