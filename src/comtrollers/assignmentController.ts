import {Request , Response} from 'express';
import * as protocols from '../protocols/protocols.js'
import * as repositors from '../repositoris/repositors.js';


async function insertAssignment(req: Request , res: Response ){
    const { name, assignment } = req.body as protocols.BodyAssignment
    
    const { usersId } = res.locals[0] as protocols.RowsIdName
    console.log(res.locals)

    try {

        await repositors.insert({table:`assignment(name, assignments, "userCreat")` , iten:[name , assignment , usersId] })
        
        res.sendStatus(200)
    } catch (error: protocols.Error) {

        res.sendStatus(400)
    
    }
}


async function AllAssignment(req: Request , res: Response ){
  
    try {

        const {rows} = await repositors.getItem({table:`assignment` , colun: '', iten: ''}) as protocols.ResoltObj
        res.status(200).send(rows)
    } catch (error: protocols.Error) {

        res.sendStatus(400)
    
    }
}


async function delAssignment(req: Request , res: Response ){
    const { name } = req.body as protocols.BodyName

    const {usersId} = res.locals[0] as protocols.RowsIdName

    try {
            const rows = await repositors.getItem({table:'assignment',colun:"name", iten:name, colun1: `"userCreat"`,iten1:usersId }) as protocols.ResoltObj[]

            
            if(rows.length===0) return res.sendStatus(401)

            await repositors.deleteIten({table:`assignment` , colun:"name", iten: name, colun1:`"userCreat"` , iten1:usersId })

            res.sendStatus(200)
    } catch (error: protocols.Error) {
        console.log(error)
        res.sendStatus(400)
    
    }
}


async function updatAssignment(req: Request , res: Response ){
    const { name } = req.body as protocols.BodyName

    const {usersId} = res.locals[0] as protocols.RowsIdName

    try {
            const rows = await repositors.getItem({table:'assignment',colun:"name", iten:name, colun1: `"userCreat"`,iten1:usersId }) as protocols.Assignment[]

            if(rows.length===0) return res.sendStatus(401)

            let boolean = false;

            if(!rows[0].status) boolean = true;

            await repositors.updateIten({table:`assignment` , colun:"status", iten: boolean  , iten1:rows[0].id})

            res.sendStatus(200)

        } catch (error: protocols.Error) {
        res.sendStatus(400)
    
    }
}


export {
    insertAssignment, 
    AllAssignment,
    delAssignment, 
    updatAssignment
};