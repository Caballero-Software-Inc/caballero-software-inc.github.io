import axios from "axios";
import { newParameters } from "../../helpers/urlTools";

export function delCode(email: string, id: string, backendUrl: string ): void {
        axios.get(`${backendUrl}account/del?email=${email}&id=${id}`);

        localStorage.setItem('email', '');
        localStorage.setItem('id', '');
        newParameters('')   
}
