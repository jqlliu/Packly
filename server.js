const express = require("express");
const session = require("express-session");
//const bodyparser = require("body-parse");
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


//CREATE TABLE inventory (inventory INT [] , id INT PRIMARY KEY  );
//INSERT INTO inventory (inventory) VALUES ( ARRAY []::integer[] , id );


//UPDATE inventory SET inventory [i] = inventory [i] + 1 WHERE id = 1;


//TRUNCATE accounts;
//TRUNCATE inventory;

//Some middleware to handle CORS stuff


function checkAccountExists(client, username, email, callback) {
  var s = "SELECT * FROM accounts WHERE username = '" + username + "' OR email = '" + email + "';";
  client.query(s, (error, result) => {
    if (error) {
      console.log(error);
    }
    const rows = result.rowCount;
    callback(rows == 0 ? true : false);
  });
}

function createInventory(client, username, callback) {
  client.query("SELECT * FROM accounts WHERE username = '" + username + "';", (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result.rowCount > 0) {
      callback(result.rows[0].id);
    }
  });
}

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:4200");
  res.header("Access-Control-Allow-Headers", "Origin, X-reqed-With, Content-Type, Accept");
  next();
});

app.use("/api/secure", (req, res) => {

});

// app.use(express.urlencoded({
//   extended: true
// }));

app.use(express.json());

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
  console.log(req.body);
  const client = new Client(pgConfig);
  //Create function to make a new account
  function create(valid) {
    //Add new account
    if (valid) {
      client.query("INSERT INTO accounts (username, email, password) VALUES ('" + req.body.username + "', '" + req.body.email + "', '" + req.body.password + "' );", (error, result) => {

        if (error) {
          console.log(error);
        }
        createInventory(client, req.body.username, function (id) {
          client.query("INSERT INTO inventory (inventory, id) VALUES ( ARRAY []::integer[], " + id + ");", (result, err) => {
            client.end().then(() => {
              console.log("FINISHED");
              res.json({
                success: true,
                errorCode: 0
              });
            });
          });
        });
      });
    } else {
      client.end().then(() => {
        res.json({
          success: false,
          errorCode: 1
        });
      });
    }
  }
  //
  client.connect().then(
    () => {
      //Check if existing account exists
      checkAccountExists(client, req.body.username, req.body.email, create);
    }).catch(
    (err) => {
      console.log(err);
    });

});

app.listen(3000, () => {
  console.log("LISTENING");
})
