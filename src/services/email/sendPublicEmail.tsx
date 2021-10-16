import axios from "axios";
import { newParameters } from "../../helpers/urlTools";

export async function sendPublicEmail(lang: string, backendUrl: string, emailCode: string): Promise<void> {
    const data = {
        email: localStorage.getItem('email'),
        id: localStorage.getItem('id'),
        emailCode
    }
    await axios.post(backendUrl+'email/send', data);
    newParameters(`?serv=main&page=welcome&lang=${lang}`);
}
