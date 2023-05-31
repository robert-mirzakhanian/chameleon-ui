// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next'
import Cors from 'cors'
import {MockDto} from '../../../client/models'

const cors = Cors({
    methods: ['POST', 'GET', 'DELETE'],
})


export type Data = {
    name: string
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Array<MockDto>>) {
    return fetch("http://localhost:8080" + req.url)
    .then((response: Response) => response.json())
    .then((data: Array<MockDto>) => res.status(200).json(data))
    .catch((errorStatus: number) => res.status(errorStatus))
}
