const express = require('express');
const db      = require('./db-facade.js');
const app     = express();

app.listen(3000, () => {
 console.log("Server running on port 3000");
});

app.get('/', (req, res) => {
  db.connection();
  res.send("I wish i was dead");
});

app.get('/get-all-users', (req, res) => {
  //let sqlStatement = `SELECT * FROM USUARIO;`
  const TABLE = "USUARIO";
  db.queryTable(TABLE, (result) => {
    res.send(result);
  });
});
//
// app.get('/get-users', (req, res) => {
//   let queryParams = {
//     req.body.nome,
//     req.body.email
//   }
//
//   db.queryInsert(table, queryParams);
// });
