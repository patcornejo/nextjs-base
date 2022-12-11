import {NextApiRequest, NextApiResponse} from "next";
import {IApiResponse} from "../../interfaces/IApiResponse";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
    const m: IApiResponse<string> = {
        data: 'Hey! Soy la API'
    }
    res.status(200).json(m)
}

export default handler;
