
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
    res.header("Access-Control-Allow-Origin", "http://localhost:4200"); 
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); 
    next(); 
});

app.get( '/api/test', ( request, responce) => {
    responce.json({ message: "I FOUND YOU"}); 
});

app.get( '/api/getAccountData', ( request, responce) => {
    responce.json({ username: "testName", password: "testHash", id: 1, email: "cringe@cringe.cringe"}); 
});

app.listen(3000, ()=>{
    console.log("LISTENING");
})