import axios from 'axios';


type SignInCode = {
     email: string; 
     id: string;
     lang: string
     queryString: string; 
     urlParams: URLSearchParams;
     backendUrl: string;
     postSignIn: any
}

interface Response {
    ok: boolean;
    error?: string
  }

export async function signInCode({ email, id, lang, queryString, urlParams, backendUrl, postSignIn }: SignInCode): Promise<void> {

    const response = await axios.get<Response>(backendUrl + `account/signin?lang=${lang}&email=${email}&id=${id}`);

    if (response.data.ok) {
        postSignIn();
    } else {
        alert(response.data.error)
    }
}
