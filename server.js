const express = require("express");
const app = express();

const { Client } = require('pg');
const client = new Client({
  user: 'sgpostgres',
  host: 'localhost',
  database: 'postgres',
  password: '654321',
  port: 5432,
});

client.connect(function(error){
    console.log("DATABASE CONNECTED")
});
//Idk some middleware to handle CORS stuff
app.use( (request, responce, next) =>{
    responce.header("Access-Control-Allow-Origin", "http://localhost:4200"); 
    responce.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); 
    next(); 
});

app.get( '/api/test', ( request, responce) => {
    responce.json({ message: "I FOUND YOU"}); 
});

app.listen(3000, ()=>{
    console.log("LISTENING");
})