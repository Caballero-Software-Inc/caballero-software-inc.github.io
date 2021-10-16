import axios from "axios"

type SaveEmail = { 
    email: string;
    id: string;
    from: string;
    subject: string; 
    html: string;
    backendUrl: string
}

type Data = {
    email: string;
    id: string; 
    from: string;
    subject: string; 
    html: string
}

interface Response {
    data: any;
  }

export async function saveEmail({ email, id, from, subject, html, backendUrl }: SaveEmail): Promise<string> {
    const data = { email, id, from, subject, html };
    const response = await axios.post<Data, Response>(backendUrl+'email/new', data);
    const emailCode = response.data.emailCode;
    return emailCode
}
