import { NextApiHandler } from "next";
import { Users } from "@/utils/users";

const handler: NextApiHandler = (req, res) =>{
    //req é o vem da url
    // id vem da url api/users/[id]
    const {id} = req.query;

    //verifica se se o id do req tem no Users, se tiver ja retorna, senão retora notfoun
    for(let i in Users) {
        if(Users[i].id.toString() === id){
            res.json(Users[i])
            return;
        }
    }

    res.json({error: 'NotFound'})
    
}
export default handler;
