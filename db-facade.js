var db = require('mysql');

var con = db.createConnection({
  host: "localhost",
  user: "root"
});

module.exports = {
  connection: function() {
    con.connect(function(err) {
      if (err) throw err;
      console.log("Connected");
    })
  }
}
