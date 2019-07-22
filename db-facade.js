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
      if(err) callback(err);
      callback(JSON.parse(JSON.stringify(result)));
    });
  },
  queryLogin: function(usuario, callback) {
    let query = `SELECT * FROM ${tabelas.TABELA_USUARIO} WHERE EMAIL = '${usuario.email}' AND SENHA = '${usuario.senha}';`;
    con.query(query, (err, result, fields) => {
      if(err) callback(err);
      callback(JSON.parse(JSON.stringify(result)));
    });
  },
  queryInsertGenerica: function(corpoInsert, callback) {
    let query = `INSERT INTO ${corpoInsert.tabela}`;
    query += `(ID, ${Object.keys(corpoInsert.campos).join(',')})`;
    query += ` VALUES ((SELECT MAX(ID) +1 FROM ${corpoInsert.tabela} ALIAS), ${Object.values(corpoInsert.campos).join(',')})`;
    con.query(query, (err, result, fields) => {
      if (err) callback(err);
      if (result) callback(JSON.parse(JSON.stringify(result)));
    });
    //INSERT INTO USUARIO (ID, NOME, ROLE, EMAIL, SENHA) VALUES ((SELECT MAX(ID) +1 FROM USUARIO USER), 'Oliveira', 'Usuario', 'oliveira@mail.com', '12345');
  },
  queryDeleteGenerica: function(corpoDelete, callback) {
    let query = `DELETE FROM ${corpoDelete.tabela} WHERE ID = ${corpoDelete.id};`;
    con.query(query, (err, result, fields) => {
	 console.log('affectedRows ', result.affectedRows);
	 console.log('fields', fields);
	 if(err) callback(err);
	 if(result) callback(JSON.parse(JSON.stringify({'sucesso': 'Registro excluído com sucesso'})));
    });
  }
}
