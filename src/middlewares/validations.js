import {creatuserSchema} from '../schemas/schemas.js' 
import * as repositors from '../repositoris/repositors.js'

function aux( value ){
    if (value.error) {

        const error = value.error.details.map(details => details.message);

        return error;
    };
    
    return false
    
}

async function creatUservalid(req,res,next){
    
    const value = creatuserSchema.validate({name:req.body.name},{abortEarly: false})

    const valid = aux( value )

    if(valid) return res.status(401).send(valid);

try {
    
    const confirm = await repositors.getItem({ table:`users`, colun:"name" ,iten:req.body.name})

    if( confirm.length > 0 ) return res.status(400).send("user already registered")

    next()

} catch (error) {
    res.sendStatus(400)   
}
}

export {creatUservalid};