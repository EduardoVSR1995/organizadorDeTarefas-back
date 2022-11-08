CREATE DATABASE "organizador" ;

CREATE TABLE "usuario"(
    "id"            SERIAL PRIMARY KEY,
    "name"          TEXT NOT NULL
);

CREATE TABLE "tarefa"(
    "id"            SERIAL PRIMARY KEY,
    "tarefa"        TEXT NOT NULL,
    "diaFim"        DATE NOT NULL,
    "diaCriado"     DATE DEFAULT NOW() NOT NULL,
    "responsavel"   INTEGER REFERENCES "usuario"("id") NOT NULL,
    "status"        BOOLEAN DEFAULT TRUE NOT NULL
 );

 CREATE TABLE "responsavel"(
    "id"            SERIAL PRIMARY KEY,
    "usuarioId"     INTEGER REFERENCES "usuario"("id") NOT NULL,
    "tarefaId"     INTEGER REFERENCES "tarefa"("id") NOT NULL
 );
