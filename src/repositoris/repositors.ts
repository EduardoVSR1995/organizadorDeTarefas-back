import { date } from "joi";
import connection from "../database/postgres.js";
import * as protocols from "../protocols/protocols.js"

async function getItem({table , colun, iten,colun1, iten1}: protocols.TableColunIten):Promise<protocols.RowsIdName[] | protocols.Error >{
   
  try {
          if(iten!=='' && colun!=='' && !colun1 && !iten1){
              const {rows} = await connection.query(`SELECT * FROM ${table} WHERE ${colun} = $1 ;`, [ iten ] ) as protocols.ResoltGetItem

              return rows;
          }

          if(colun1 && iten1){
            
            const {rows} = await connection.query(`SELECT * FROM ${table} WHERE ${colun} = $1 AND ${colun1}=$2;`, [ iten, iten1 ] ) as protocols.ResoltGetItem

            return rows;
          
          }
          const rows = await connection.query(`SELECT * FROM ${table};` ) as protocols.ResoltObj

          return rows;

      } catch (error: protocols.Error ) {

        return error;
      
    }
  }

  async function insert({table , iten}: protocols.Insert){
    
    const lock = [] as protocols.Array

    for (let index = 0; index < iten.length; index++) {
        lock.push(`$${index+1}`)
    }

    try {
        
        const {rows} = await connection.query(`INSERT INTO ${table} VALUES (${lock.toString()}) RETURNING id ;`, iten ) as protocols.ResoltInsert

        return rows
        
    } catch (error:protocols.Error) {
        return error;
    
      }
}

async function deleteIten({table , colun, iten, colun1, iten1}: protocols.TableColunIten){

  try {
    if( colun1 && iten1){
      await connection.query(`DELETE FROM ${table} WHERE ${colun} = $1 AND ${colun1} = $2 ;`, [ iten, iten1 ])

      return true;
    }


    await connection.query(`DELETE FROM ${table} WHERE ${colun} = $1;`, [ iten ])
    
    return true;
    
  } catch (error:protocols.Error) {
    
    return error;    
  }
}
async function updateIten({table , colun, iten, iten1}:protocols.TableColunIten){

  try {
    console.log(
    await connection.query(`UPDATE ${table} SET ${colun} = ${iten} WHERE id = $1;`, [iten1])
)
    return true;
    

  } catch (error:protocols.Error) {

    return error;    
  }
}


export {getItem , insert ,deleteIten, updateIten}