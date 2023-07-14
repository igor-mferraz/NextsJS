import { NextApiHandler } from "next";
import prisma from "@/libs/prisma";

//LER
const handlerGet: NextApiHandler = async (req, res) =>{
    // id vem da url api/users/[id]
    const {id} = req.query;
    const user = await prisma.user.findUnique({
        where:{
            id: parseInt(id as string)
        },
        select: {
            id: true,
            name: true,
            email: true,
            role: true
        }
    
    })
    if(user){
        res.json({user})
        return
    }
    res.json({error: 'Usuario não encontrado!'})
}

//ATUALIZAR
const handlerPut: NextApiHandler = async (req, res) =>{
    const {name, active} = req.body;
    const {id} = req.query;

    let data:{
        name?: string
        active? :boolean
    } = {};

    if(name){
        data.name = name
    }
    if(active) {
        switch(active) {
            case 'true':
            case '1':
                data.active = true
                break;
            case 'false':
            case '0':
                data.active = false
                break;
        }
    }

    const updateUser = await prisma.user.update({
        where: {
            id: parseInt(id as string)
        },
        data
    });
    if(updateUser){
        res.json({updateUser})
        return
    }
    res.json({error: 'Algo deu errado!'})
}


const handlerDelete: NextApiHandler = async (req, res) =>{
    const {id} = req.query;
    const deleteUser = await prisma.user.delete({
        where: {
            id: parseInt(id as string)
        }
    })
    .catch(()=>{
        res.json({error: "usuario não encontrado!"})
    })
    
    if(deleteUser){
        res.status(200).json({status: 'deletado'})
    }
}




const handler: NextApiHandler = async (req,res) =>{
    switch(req.method){
        case 'GET':
            handlerGet(req,res);
            break
        case 'PUT': 
            handlerPut(req,res);
            break
        case 'DELETE': 
            handlerDelete(req,res);
            break
    }
}
export default handler;

//const handlerGet: NextApiHandler = async (req, res) =>{
    
//     const {name} = req.query;
//     const user = await prisma.user.findUnique({
//         where:{
//             name: {
//                 //começa com b
//                 startWith: "B",

//                 //termina com a
//                 endWith: "A"
//        
//             }
//         },
//         select: {
//             id: true,
//             name: true,
//             email: true,
//             role: true
//         }
//     })
//     if(user){
//         res.json({user})
//         return
//     }
//     res.json({error: 'Usuario não encontrado!'})
// }
