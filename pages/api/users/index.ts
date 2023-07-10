import { NextApiHandler } from "next";
import prisma from "@/libs/prisma";

//LER TODOS
const handleGet:NextApiHandler = async (req,res) => {
    const {name, email } = req.query;
    const users = await prisma.user.findMany({
        //condições exemplo
        // where: {
        //     active: true
        // }
    })
    res.json({users})
}

//CRIAR
const handlePost:NextApiHandler = async (req,res) => {
    const {name, email} = req.body;
    const newUser = await prisma.user.create({
        data: {
            name,
            email
        }
    })
    res.status(200).json({user: newUser})
}


const handler: NextApiHandler = async (req, res) =>{
    switch(req.method) {
        case 'GET':
            handleGet(req, res);
            break;
        case 'POST':
            handlePost(req,res);
            break;
    }
}
export default handler;
