const express = require("express");
const app = express();

const {
  Client
} = require('pg');

const pgConfig = {
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: '654321',
  port: 5432,
}
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
app.get('/api/getAccountData', (request, responce) => {
  const client = new Client(pgConfig);
  client.connect().then(
    () => {
      console.log("FOUND");
      console.log(request.query.id)
      //Fetch account information in database given id

      client.query("SELECT * FROM accounts WHERE id = " + request.query.id + ";", (error, result) => {
        if (error) {
          console.log(error);
        } 
        client.end().then(()=>{
          console.log('CLOSED');
          if(result.rowCount > 0){
          responce.json({
            email: result.rows[0].email,
            username: result.rows[0].username
          });
        }
        });
      });
    }
  ).catch(
    (err) => {
      console.log(err);
    }
  );
  
});

//Given an id return account information (might switch to checkAccountData or smthing later)
app.put('/api/putAccountData', (request, responce) => {
  const client = new Client(pgConfig);
  client.connect().then(
    () => {
      console.log("FOUND");
      console.log(request.query.id)
      //Add new account
      client.query("INSERT INTO accounts " + request.query.id + ";", (error, result) => {
        if (error) {
          console.log(error);
        } 
        client.end().then(()=>{
          console.log('CLOSED');
          if(result.rowCount > 0){
            
        }
        });
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
