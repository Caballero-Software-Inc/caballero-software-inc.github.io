import { l } from "../../helpers/languageTools";
import { changeParameter, newParameters } from "../../helpers/urlTools";

type RegisterCode = { 
    lang: string; 
    queryString: string; 
    urlParams: URLSearchParams; 
    backendUrl: string; 
    officialEmail: string
}

export async function registerCode({ lang, queryString, urlParams, backendUrl, officialEmail }: RegisterCode): Promise<void> {
    const email = (document.getElementById("registerInput") as HTMLInputElement).value;
    const res = await fetch(backendUrl + `account/register?email=${email}&lang=${lang}`);
    const response = await res.json();
    const ok = response.ok
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
      }));
    } else {
      const error = response.error;
      alert(error)
    }
  }