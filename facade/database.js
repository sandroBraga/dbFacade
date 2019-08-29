const db       = require('mysql');
const dbConfig = require('../db-config/db-config.json');

const connection = db.createConnection({
  host:     dbConfig.host,
  user:     dbConfig.user,
  database: dbConfig.database
});

module.exports = {
  executaQuery: (query, callback) => {
    connection.query(query, (err, result) => {
      if (err) throw err;
      callback(JSON.parse(JSON.stringify(result)));
    });
  }
}
