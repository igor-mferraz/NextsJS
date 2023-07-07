import { NextApiHandler } from "next";

const handler: NextApiHandler = (req, res) =>{
    res.json({teste: 'ok'})
}
export default handler;
