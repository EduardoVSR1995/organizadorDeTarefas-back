import * as repositors from '../repositoris/repositors.js'

async function insertUser ( req, res ){
    const {name} = req.body;
    try {
        
        await repositors.insert({ table: "users(name)" , iten:[name] })        

        res.sendStatus(200)
    } catch (error) {
        res.sendStatus(400)
    }
}

export{insertUser};