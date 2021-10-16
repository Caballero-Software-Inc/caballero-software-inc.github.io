import axios from "axios";
import { l } from "../../helpers/languageTools";
import { newParameters } from "../../helpers/urlTools";

export async function sendPublicEmail(lang: string, backendUrl: string, emailCode: string, officialEmail: string): Promise<void> {
    const data = {
        email: localStorage.getItem('email'),
        id: localStorage.getItem('id'),
        emailCode
    }
    await axios.post(backendUrl+'email/send', data);
    alert(l({
        "en": `This email will be sent from: ${officialEmail}`,
        "fr": `Ce courrier électronique sera envoyé à partir de : ${officialEmail}`
    }, lang));
    newParameters(`?serv=main&page=welcome&lang=${lang}`);
}
