import * as repositors from '../repositoris/repositors.js';
import {Request , Response} from 'express';
import * as protocols from '../protocols/protocols.js';
import bcrypt from "bcrypt";
import {v4 as uuid} from 'uuid'

async function insertUser ( req: Request , res: Response ){

    const { name , password } = req.body as protocols.BodyName

    const encrypt = bcrypt.hashSync(password, 10);

    try {
        
        await repositors.insert({ table: "users(name, password)" , iten:[name, encrypt] })

        res.sendStatus(200)

    } catch (error: protocols.Error) {
        
        res.sendStatus(400)
    
    }
}


async function signinUser ( req: Request , res: Response ){

    try {

        const {id} = res.locals[0] as protocols.RowsIdName

        const token = uuid()

        await repositors.insert({ table: `login("usersId", token)`, iten:[ id , token] })

        res.send(token).status(200)

    } catch (error: protocols.Error) {
        
        res.sendStatus(400)
    }
}

async function allUsers(req: Request , res: Response ) {
    try {

        const {rows} = await repositors.getItem({table:`users` , colun: '', iten: ''}) as protocols.ResoltObj
        res.status(200).send(rows)
    } catch (error: protocols.Error) {

        res.sendStatus(400)
    
    }
}


async function deluser(req: Request , res: Response ){

    const {usersId} = res.locals[0] as protocols.RowsIdName

    try {
            const rows = await repositors.getItem({table:'users',colun:"id", iten:usersId}) as protocols.ResoltObj[]
            
            if(rows.length===0) return res.sendStatus(401)
            
            await repositors.deleteIten({table:`users`, colun:"id", iten:usersId})
        
            res.sendStatus(200)
    } catch (error: protocols.Error) {
        console.log(error)
        res.sendStatus(400)
    
    }
}

async function updatUser(req: Request , res: Response ){
    const { name } = req.body as protocols.BodyName

    const {usersId} = res.locals[0] as protocols.RowsIdName

    try {
            if(!name) return res.status(401).send("Name not identfie")

            const rows = await repositors.getItem({table:'users',colun:"name",iten:name }) as protocols.RowsId[]

            if(rows.length!==0) return res.sendStatus(401)

            await repositors.updateIten({table:`users` , colun:"name", iten: `'${name}'`  , iten1:usersId})

            res.sendStatus(200)

        } catch (error: protocols.Error) {
        res.sendStatus(400)
    
    }
}


export{
    insertUser, 
    signinUser, 
    allUsers,
    deluser,
    updatUser
};