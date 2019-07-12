const db = require('mysql');

const con = db.createConnection({
  host:     "localhost",
  user:     "root",
  database: "PETSHOP"
});

module.exports = {
  connection: function() {
    con.connect(function(err) {
      if (err) throw err;
      console.log("Connected");
    })
  },
  queryTable: function(table, callback) {
    con.query(`SELECT * FROM ${table};`,  (err, result, fields) => {
      callback(JSON.parse(JSON.stringify(result)));
    });
  },
}
