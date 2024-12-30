import {sql} from './db.js'
// sql`DROP TABLE IF EXISTS videos;`. then(() => {console.log('Tabela Excluída!')})


 sql`
 -- Create the videos table
 CREATE TABLE videos (
     id          TEXT PRIMARY KEY,          -- Unique identifier for each video
     title       TEXT,            -- Title of the video, required
     description TEXT,               -- Description of the video
     duration    INTEGER        -- Duration of the video in seconds
 );`
 
 .then(() => {console.log('Tabela Criada!')})