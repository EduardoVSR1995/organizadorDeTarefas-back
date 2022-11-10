import {creatuserSchema , authorizationSchema, creatassignmentSchema} from '../schemas/schemas.js' 
import * as repositors from '../repositoris/repositors.js'
import {Request , Response , NextFunction} from 'express'
import * as protocols from '../protocols/protocols.js'
import bcrypt from 'bcrypt';

function aux( {value} : protocols.Aux):string{
    return value.slice(17)
}

async function creatUservalid(req:Request,res:Response,next:NextFunction){
    
    const { name } = req.body as protocols.BodyName

    const value = creatuserSchema.validate(req.body,{abortEarly: false})
    
    if(value.error) return res.status(401).send(aux({value:value.error.stack}));
    
    try {
        
        const rows = await repositors.getItem({ table:`users`, colun:"name" ,iten:name}) as protocols.RowsIdName[]
    
        if( rows.length > 0 ) return res.status(400).send("user already registered")

        next()

    } catch (error : protocols.Error) {
        res.sendStatus(400)
    }
}

async function creatAssignmentValid(req:Request,res:Response,next:NextFunction){
    const { name, password } = req.body as protocols.BodyName

    const value = creatuserSchema.validate(req.body,{abortEarly: false})

    if(value.error) return res.status(401).send(aux({value:value.error.stack}));
    try {
    
        const rows = await repositors.getItem({ table:`users`, colun:"name" ,iten:name}) as protocols.RowsIdName[]
      
        if( rows.length === 0 ) return res.status(400).send("user not registerede")
    
        const comparer = bcrypt.compareSync(password, rows[0].password )


        if(!comparer ) return res.sendStatus(401);

        res.locals = rows as protocols.RowsIdName[] 

        next()
    
    } catch (error : protocols.Error) {
        res.sendStatus(400)   
    }
}

async function authorization (req:Request,res:Response,next:NextFunction){

    const value = authorizationSchema.validate({authorization: req.headers.authorization},{abortEarly: false})
    
    if(value.error) return res.status(401).send(aux({value:value.error.stack}));
  

    const token = req.headers.authorization.replace('Bearer ', '');

    try {

        const rows = await repositors.getItem({table:"login",  colun:"token", iten: token }) as protocols.BodyLogin[]

        
        if(rows.length===0) return res.sendStatus(401)

        res.locals = rows
        
        next();

    } catch (error: protocols.Error) {
        res.sendStatus(400)
    }    
}

async function autorizationAssignment (req:Request,res:Response,next:NextFunction){
    
    const { name, assignment} = req.body as protocols.BodyAssignment

    const value = creatassignmentSchema.validate(req.body,{abortEarly: false})

    try {

        const rows = await repositors.getItem({table:"assignment",  colun:"name", iten: name }) as protocols.ResoltObj[]

        if (rows.length>0)return res.status(401).send("Activit name exist")

        if(value.error) return res.status(401).send(aux({value:value.error.stack}));

        next()

    } catch (error: protocols.Error) {
        res.sendStatus(400)
    }

}




export {creatUservalid, creatAssignmentValid, authorization, autorizationAssignment};