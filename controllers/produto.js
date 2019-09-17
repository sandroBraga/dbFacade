const dbFacade = require("../facade/database.js");
const tabelas  = require("../constants/tables.js");

module.exports = {
  inserir: (produto, callback) => {
    let query = `INSERT INTO ${tabelas.TABELA_PRODUTO} (ID, QTDE_ESTOQUE, NOME, FABRICANTE, ESPECIFICACOES, VALOR_REAL, VALOR_PATAZ)`;
    query += ` VALUES ((SELECT MAX(ID) +1 FROM ${tabelas.TABELA_PRODUTO} ALIAS), ${produto.qtde_estoque}, '${produto.nome}', '${produto.fabricante}', '${produto.especificacoes}', '${produto.valor_real}', '${produto.valor_pataz}');`
    console.log('query ', query);
    dbFacade.executaQuery(query, (result) => {
      if(result.affectedRows) callback({'status': 200, 'response': result});
      else callback(JSON.parse(JSON.stringify({'status': 500, 'response': {'msg':'Erro ao inserir'}})));
    });
  },
  editar: (produto, callback) => {
    let query = `UPDATE ${tabelas.TABELA_PRODUTO} SET QTDE_ESTOQUE = ${produto.qtde_estoque}, NOME = '${produto.nome}', FABRICANTE = '${produto.fabricante}', ESPECIFICACOES = '${produto.especificacoes}', VALOR_REAL = '${produto.valor_real}', VALOR_PATAZ = '${produto.valor_pataz}' WHERE ID = ${produto.id};`;
    dbFacade.executaQuery(query, (result) => {
      if(result.changedRows) callback({'status': 200, 'response': {'msg': 'Update realizado com sucesso'}});
      else callback(JSON.parse(JSON.stringify({'status': 500, 'response': {'msg': 'Erro ao realizar update'}})));
    });
  },
  remover: (produtoId, callback) => {
    let query = `DELETE FROM ${tabelas.TABELA_PRODUTO} WHERE ID = ${produtoId}`;
    dbFacade.executaQuery(query, (result) => {
	    if(result.affectedRows) callback({'status':200, 'response':result});
	    else callback(JSON.parse(JSON.stringify({'status': 500, 'response': {'msg':'Erro ao excluir'}})));
    });
  },
  getAll: (callback) => {
    let query = `SELECT * FROM ${tabelas.TABELA_PRODUTO}`;
    dbFacade.executaQuery(query, (result) => {
	    if(result.length) callback({'status':200, 'response':result});
	    else callback(JSON.parse(JSON.stringify({'status':500, 'response':{'msg':'Erro ao recuperar dados'}})));
    });
  },
  getSingle: (produto, callback) => {
    let query = `SELECT * FROM PRODUTO WHERE ID = ${produto.id}`;
    dbFacade.executaQuery(query, (result) => {
	    if(result) callback({'status':200, 'response':result});
	    else callback(JSON.parse(JSON.stringify({'status':500, 'response':{'msg':'Erro ao recuperar dado'}})));
    });
  }
}
