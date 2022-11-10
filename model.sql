CREATE DATABASE "organizador" ;

CREATE TABLE "users"(
    "id"            SERIAL PRIMARY KEY,
    "name"          TEXT UNIQUE NOT NULL,
    "password"      TEXT NOT NULL
);

CREATE TABLE "login"(
    "id"            SERIAL PRIMARY KEY,
    "usersId"       INTEGER NOT NULL,
    "token"         TEXT NOT NULL
);

CREATE TABLE "assignment"(
    "id"            SERIAL PRIMARY KEY,
    "name"          TEXT UNIQUE NOT NULL,
    "assignments"   TEXT NOT NULL,
    "dateEnd"       TIMESTAMP,
    "dateCriate"    TIMESTAMP DEFAULT NOW() NOT NULL,
    "userCreat"     INTEGER REFERENCES "users"("id"),
    "status"        BOOLEAN DEFAULT TRUE NOT NULL
 );

 CREATE TABLE "responsible"(
    "id"            SERIAL PRIMARY KEY,
    "usersId"       INTEGER REFERENCES "users"("id") NOT NULL,
    "assignmentId"  INTEGER REFERENCES "assignment"("id") NOT NULL
 );
