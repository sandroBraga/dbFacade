const dbFacade = require('../facade/database.js');
const tabelas  = require('../constants/tables.js');

module.exports = {
  inserir: (cliente, callback) => {
    let query = `INSERT INTO ${tabelas.TABELA_PESSOA} (ID, ID_PERFIL, ID_ENDERECO, NOME, CPF, IDENTIDADE, EMAIL, SENHA)`;
    query += ` VALUES ((SELECT MAX(ID) +1 FROM ${tabelas.TABELA_PESSOA} ALIAS), 1, ${cliente.id_endereco}, '${cliente.nome}', '${cliente.cpf}', '${cliente.identidade}', '${cliente.email}', '${cliente.senha}');`
    dbFacade.executaQuery(query, (result) => {
      if(result.affectedRows) callback({'status': 200, 'response': result});
      else callback(JSON.parse(JSON.stringify({'status': 500, 'response': {'msg':'Erro ao inserir'}})));
    });
  },
  editar: (cliente, callback) => {
    let query = `UPDATE ${tabelas.TABELA_PESSOA} SET ID_ENDERECO = ${cliente.id_endereco}, NOME = '${cliente.nome}', CPF = '${cliente.cpf}', IDENTIDADE = '${cliente.identidade}', EMAIL = '${cliente.email}', SENHA = '${cliente.senha}' WHERE ID = ${cliente.id};`;
    dbFacade.executaQuery(query, (result) => {
      if(result.changedRows) callback({'status': 200, 'response': {'msg': 'Update realizado com sucesso'}});
      else callback(JSON.parse(JSON.stringify({'status': 500, 'response': {'msg': 'Erro ao realizar update'}})));
    })
  },
  remover: (cliente, callback) => {
    let query = `DELETE FROM ${tabelas.TABELA_PESSOA} WHERE ID = ${cliente.id}`;
    dbFacade.executaQuery(query, (result) => {
      if(result.affectedRows) callback(JSON.parse(JSON.stringify({'status': 200, 'response': {'msg':'Exclusão realizada com sucesso'}})));
      else callback(JSON.parse(JSON.stringify({'status': 500, 'response': {'msg':'Erro ao realizar exclusao'}})));
    });
  },
  getAll: (callback) => {
    let query = `SELECT * FROM ${tabelas.TABELA_PESSOA} WHERE ID_PERFIL = 1`;
    dbFacade.executaQuery(query, (result) => {
      if (result.length) callback({'status': 200, 'response': result});
      else callback(JSON.parse(JSON.stringify({'status': 500, 'response': {'msg':'Erro ao realizar consulta'}})));
    });
  },
  getSingle: (nome, callback) => {
    let query = `SELECT * FROM ${tabelas.TABELA_PESSOA} WHERE ID_PERFIL = 1 AND NOME = '${nome}'`;
    console.log('query ', query);
    dbFacade.executaQuery(query, (result) => {
      if (result.length) callback({'status': 200, 'response': result});
      else callback(JSON.parse(JSON.stringify({'status': 404, 'response': {'msg':'Cliente não encontrado'}})));
    });
  }
}
