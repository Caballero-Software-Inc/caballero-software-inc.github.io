import axios from "axios";

interface Response {
    credits: number
}

export async function getCredits(backendUrl: string): Promise<number> {
    const email = localStorage.getItem('email');
    const id = localStorage.getItem('id');
    const response = await axios.get<Response>(backendUrl+`account/credits?email=${email}&id=${id}`);
    const credits: number = response.data.credits;
    return credits
}
