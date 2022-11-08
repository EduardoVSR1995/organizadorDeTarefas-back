CREATE DATABASE "organizador" ;

CREATE TABLE "user"(
    "id"            SERIAL PRIMARY KEY,
    "name"          TEXT UNIQUE NOT NULL
);

CREATE TABLE "assignment"(
    "id"            SERIAL PRIMARY KEY,
    "name"          TEXT NOT NULL,
    "assignment"    TEXT NOT NULL,
    "dateEnd"       DATE NOT NULL,
    "dateCriate"    DATE DEFAULT NOW() NOT NULL,
    "responsible"   INTEGER REFERENCES "users"("id") NOT NULL,
    "status"        BOOLEAN DEFAULT TRUE NOT NULL
 );

 CREATE TABLE "responsible"(
    "id"            SERIAL PRIMARY KEY,
    "usersId"        INTEGER REFERENCES "users"("id") NOT NULL,
    "assignmentId"  INTEGER REFERENCES "assignment"("id") NOT NULL
 );
