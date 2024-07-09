const express = require("express");
const session = require("express-session");
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

//DATABASES:
//CREATE TABLE accounts (username VARCHAR(32), email VARCHAR(256), password VARCHAR(256), id SERIAL PRIMARY KEY  );
//INSERT INTO accounts (username, email, password) VALUES ( a, a, a );

//CREATE TABLE inventory (inventory INT [] , id SERIAL PRIMARY KEY  );
//INSERT INTO inventory VALUES (inventory) ( ARRAY [] );

//UPDATE inventory SET inventory [i] = inventory [i] + 1 WHERE id = 1;

//Some middleware to handle CORS stuff


function checkAccountExists(username) {

  client.query("SELECT * FROM accounts WHERE username = " + username + ";", (error, result) => {
    if (error) {
      console.log(error);
      return false;
    }
    client.end().then(() => {
      console.log('CLOSED');
      if (result.rowCount > 0) {
        return true;
      } else {
        return false;
      }
    });
  });
}

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:4200");
  res.header("Access-Control-Allow-Headers", "Origin, X-reqed-With, Content-Type, Accept");
  next();
});
app.use("/api/secure", (req, res) => {

});
//Given an id return account information (might switch to checkAccountData or smthing later)
app.get('/api/getAccountData', (req, res) => {
  const client = new Client(pgConfig);
  client.connect().then(
    () => {

      client.query("SELECT * FROM accounts WHERE id = " + req.query.id + ";", (error, result) => {
        if (error) {
          console.log(error);
        }
        client.end().then(() => {
          console.log('CLOSED');
          if (result.rowCount > 0) {
            res.json({
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

//Given account info create new account
app.post('/api/postAccountData', (req, res) => {
  const client = new Client(pgConfig);
  client.connect().then(
    () => {
      //Check if existing account exists
      if (!checkAccountExists(req.query.username)) {
        //Add new account
        client.query("INSERT INTO accounts (username, email, password) VALUES" + "(" + req.query.username + "," + req.query.email + "," + req.query.password + "," + ")" + ";", (error, result) => {
          if (error) {
            console.log(error);
          }
          client.end().then(() => {
            res.json({success: true, errorCode: 0});
          });
        });
      } else {
        client.end().then(() => {
          if (result.rowCount > 0) {
            res.json({success: true, errorCode: 1});
          }
        });
      }
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
