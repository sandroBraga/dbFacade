const express = require('express');
const db      = require('./db-facade.js');
const app     = express();

app.listen(3000, () => {
 console.log("Server running on port 3000");
});

app.get('/', function(req, res) {
  db.connection();
  res.send("I wish i was dead");
});
