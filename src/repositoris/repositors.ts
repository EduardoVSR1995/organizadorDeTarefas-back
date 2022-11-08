import connection from "../database/postgres.js";

async function getItem({table , colun, iten}){
    try {
            
              const {rows} = await connection.query(`SELECT * FROM ${table} WHERE ${colun} = $1 ;`, [ iten ] )
              
              return rows;
          
      } catch (error) {

        return error;
      
    }
  }

  async function insert({table , iten}){
    const lock=[];

    for (let index = 0; index < iten.length; index++) {
        lock.push(`$${index+1}`)
    }

    try {
        
        const {rows} = await connection.query(`INSERT INTO ${table} VALUES (${lock.toString()}) RETURNING id ;`, iten )
        return rows
        
    } catch (error) {
        return error;
    
      }
}

export {getItem , insert}