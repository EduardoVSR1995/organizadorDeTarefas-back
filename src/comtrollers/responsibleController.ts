import {Request, Response} from 'express'
import * as protocols from '../protocols/protocols.js'
import * as repositors from '../repositoris/repositors.js'

async function insertResponsible(req: Request , res: Response) {

    const params = req.params.id;

    const { usersId } = res.locals[0] as protocols.RowsIdName

    try {

        const rows = await repositors.getItem({table:`assignment`, colun: "id" ,iten: params }) as protocols.Assignment[]    

        if(rows.length===0) return res.sendStatus(401)

       await repositors.insert({table:`responsible("usersId","assignmentId")` , iten:[usersId, params] })
        
        res.sendStatus(200)

    } catch (error: protocols.Error) {

        res.sendStatus(400)
    
    }
}


async function allResponsible(req: Request , res: Response) {

    try {

        const rows = await repositors.allRespon()

        res.send(rows).status(200)

    } catch (error: protocols.Error) {

        res.sendStatus(400)
    
    }
}


async function contResponsible(req: Request , res: Response) {

    try {

        const rows = await repositors.countRespons()

        res.send(rows).status(200)

    } catch (error: protocols.Error) {

        res.sendStatus(400)
    
    }
}

async function deletResponsible(req: Request , res: Response) {
    const params = req.params.id;

    const { usersId } = res.locals[0] as protocols.RowsIdName

    try {

        const rows = await repositors.getItem({table:`responsible`, colun: "id" ,iten: params }) as protocols.Assignment[]    

        if(rows.length===0) return res.status(401).send("Activit not cadaster")
            await repositors.deleteIten({table:`responsible` , colun: `"usersId"`, iten: usersId, colun1: `id`, iten1: rows[0].id })

        res.sendStatus(200)

    } catch (error: protocols.Error) {

        res.sendStatus(400)
    
    }
}

export {
    deletResponsible,
    insertResponsible,
    contResponsible,
    allResponsible
};