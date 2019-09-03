const db       = require('mysql');
const tabelas  = require('./constants/tables.js');
const dbConfig = require('./db-config/db-config.json');

const con = db.createConnection({
  host:     dbConfig.host,
  user:     dbConfig.user,
  database: dbConfig.database
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
      if (err) callback(err);
      if (result.length) callback(JSON.parse(JSON.stringify(result)));
      else callback(JSON.stringify({'error':'Ocorreu um erro ao atender solicitacao'}));
    });
  },
  queryLogin: function(usuario, callback) {
    let query = `SELECT * FROM ${tabelas.TABELA_USUARIO} WHERE EMAIL = '${usuario.email}' AND SENHA = '${usuario.senha}';`;
    con.query(query, (err, result, fields) => {
      if (err) callback(err);
      if (result.length) callback(JSON.parse(JSON.stringify(result)));
      else callback(JSON.stringify({'aviso':'Nenhum usuário encontrado'}));
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
  },
  queryDeleteGenerica: function(corpoDelete, callback) {
    let query = `DELETE FROM ${corpoDelete.tabela} WHERE ID = ${corpoDelete.id};`;
    con.query(query, (err, result, fields) => {
	    if (err) callback(err);
	    if (result.affectedRows) callback(JSON.parse(JSON.stringify({'sucesso': 'Registro excluído com sucesso'})));
      else callback(JSON.parse(JSON.stringify({'erro': 'Registro não encontrado'})))
    });
  }
}
