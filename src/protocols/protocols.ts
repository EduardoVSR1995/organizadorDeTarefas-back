import { QueryResult } from "pg"

type TableColunIten = {
    table: string,
    colun: string,
    iten: (string|boolean),
    colun1?:string,
    iten1?:(string | number)
}

type Insert = {
    table: string,
    iten: (string | number | Date)[]
}

type Aux = {
    value: string
}

type RowsIdName={
    id:number,
    name:string,
    password: string,
    usersId?:string

}

type BodyName = {
    name: string,
    password: string
}

type BodyAssignment = {
    name: string,
    assignment:string,
    date?: Date,
    userCreat?: number
}


type Allcomplet = {
    id:number,
    assigs:number,
    notComplet:number
}



type BodyLogin = {
    id:number,
    usersId:number,
    token:string
}

type Assignment ={
    id: number,
    name: string,
    assignments: string,
    dateEnd: (unknown | Date),
    dateCriate: Date,
    userCreat: number,
    status: boolean
}

type Error = unknown

type Array = string[]

type RowsId={
    id:number
}

type Allcont = {
    assigCont:number,
    name: string,
    assignmentName: (string | null),

}

type Cont = {
    id:number,
    assignmentName:(string|null),
    name: (string|null),
}

type Resolcont = QueryResult<Cont>

type ResolAllcont= QueryResult<Allcont>

type ResolAllcomplet= QueryResult<Allcomplet>

type ResolAssignment= QueryResult<Assignment>

type ResoltObj= QueryResult<object>

type ResoltBodyLogin =QueryResult<BodyLogin>

type ResoltGetItem = QueryResult<RowsIdName>

type ResoltInsert = QueryResult<RowsId>


export{
    Resolcont,
    ResolAllcont,
    ResolAllcomplet,
    Allcomplet,
    RowsId,
    Assignment,
    ResolAssignment,
    ResoltObj,
    BodyLogin,
    ResoltBodyLogin,
    TableColunIten, 
    Insert, 
    Aux, 
    ResoltGetItem, 
    ResoltInsert, 
    Array,
    Error, 
    BodyName, 
    RowsIdName,
    BodyAssignment
}