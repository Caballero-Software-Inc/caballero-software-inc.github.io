import { l } from "../../helpers/languageTools";
import { changeParameter, newParameters } from "../../helpers/urlTools";
import axios from 'axios';

type RegisterCode = { 
    email: string;
    lang: string; 
    queryString: string; 
    urlParams: URLSearchParams; 
    backendUrl: string; 
    officialEmail: string
}

interface Response {
  ok: boolean;
  error?: string
}

export async function registerCode({ email, lang, queryString, urlParams, backendUrl, officialEmail }: RegisterCode): Promise<void> {
    const response = await axios.get<Response>(backendUrl + `account/preregister?email=${email}&lang=${lang}`);
    const ok = response.data.ok
    if (ok) {
      alert(l({
          "en": `You will receive an email containing your confirmation code. This email will be sent from: ${officialEmail}`,
          "fr": `Vous recevrez un courrier électronique contenant votre code de confirmation. Cet courrier électronique sera envoyé à partir de : ${officialEmail}`
      }, lang));
      newParameters(changeParameter({
        queryString, 
        urlParams, 
        param: 'page', 
        newValue: 'signIn'
      }))
    } else {
      alert(response.data.error)
    }
  }