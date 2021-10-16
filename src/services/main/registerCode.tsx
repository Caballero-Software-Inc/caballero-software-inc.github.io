import { l } from "../../helpers/languageTools";
import axios from 'axios';

type RegisterCode = { 
    email: string;
    lang: string; 
    queryString: string; 
    urlParams: URLSearchParams; 
    backendUrl: string; 
    officialEmail: string;
    postRegistration: any;
}

interface Response {
  ok: boolean;
  error?: string
}

export async function registerCode({ email, lang, queryString, urlParams, backendUrl, officialEmail, postRegistration }: RegisterCode): Promise<void> {
    const response = await axios.get<Response>(backendUrl + `account/preregister?email=${email}&lang=${lang}`);
    const ok = response.data.ok
    if (ok) {
      alert(l({
          "en": `You will receive an email containing your confirmation code. This email will be sent from: ${officialEmail}`,
          "fr": `Vous recevrez un courrier électronique contenant votre code de confirmation. Ce courrier électronique sera envoyé à partir de : ${officialEmail}`
      }, lang));
      postRegistration();
    } else {
      alert(response.data.error)
    }
  }