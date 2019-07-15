const db      = require('mysql');
const tabelas = require('./table-constants.js');

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
  querySimples: function(table, callback) {
    con.query(`SELECT * FROM ${table};`,  (err, result, fields) => {
      callback(JSON.parse(JSON.stringify(result)));
    });
  },
  queryLogin: function(usuario, callback) {
    let query = `SELECT * FROM ${tabelas.TABELA_USUARIO} WHERE EMAIL = '${usuario.email}' AND SENHA = '${usuario.senha}';`;
    con.query(query, (err, result, fields) => {
      callback(JSON.parse(JSON.stringify(result)));	    
    });
  },
  queryInserGenerica: function(corpoInsert, callback) {
    //INSERT INTO USUARIO (ID, NOME, ROLE, EMAIL, SENHA) VALUES ((SELECT MAX(ID) +1 FROM USUARIO USER), 'Oliveira', 'Usuario', 'oliveira@mail.com', '12345');
  }
}
