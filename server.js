const express = require("express");
const app = express();

const {
  Client
} = require('pg');
const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: '654321',
  port: 5432,
});

function getAccountInfo(field) {
  client.query()
}


//Idk some middleware to handle CORS stuff
app.use((request, responce, next) => {
  responce.header("Access-Control-Allow-Origin", "http://localhost:4200");
  responce.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/api/test', (request, responce) => {


  responce.json({
    message: "I FOUND YOU"
  });
});
//Given an id return account information (might switch to checkAccountData or smthing later)
app.get('/api/getAccountData', async (request, responce) => {
  
  var res = {}
  const q = client.connect().then(
    () => {
      console.log("FOUND");
      console.log(request.query.id)
      //Fetch account information in database given id
      client.query("SELECT * FROM accounts WHERE id = " + request.query.id + ";", (error, result) => {
        //responce.json({username: })

        if (error) {
          console.log(error);
        } 
        res = {
          email: result.rows[0].email,
          username: result.rows[0].username
        }
        client.end().then(()=>{
          console.log( res.email);
          responce.json({email: res.email, username: res.username});
        })
      });
    }
  ).catch(
    (err) => {
      console.log(err);
    }
  );
  
});

app.listen(3000, () => {
  console.log("LISTENING");
})
