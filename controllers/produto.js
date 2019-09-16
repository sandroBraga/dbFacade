const dbFacade = require("../facade/database.js");
const tabelas  = require("../constants/tables.js");

module.exports = {
  inserir: (produto, callback) => {
    let query = `INSERT INTO ${tabelas.TABELA_PRODUTO} (ID, ID_ESTOQUE, NOME, FABRICANTE, ESPECIFICACOES, VALOR_REAL, VALOR_PATAZ)`;
    query += ` VALUES ((SELECT MAX(ID) +1 FROM ${tabelas.TABELA_PRODUTO} ALIAS), 1, ${produto.id_estoque}, '${produto.nome}', '${produto.fabricante}', '${produto.especificacoes}', '${produto.valor_real}', '${produto.valor_pataz}');`
    dbFacade.executaQuery(query, (result) => {
      if(result.affectedRows) callback({'status': 200, 'response': result});
      else callback(JSON.parse(JSON.stringify({'status': 500, 'response': {'msg':'Erro ao inserir'}})));
    });
  },
  remover: (produto, callback) => {
    let query = ``;
    dbFacade.executaQuery(query, (result) => {

    });
  },
  getAll: (callback) => {
    let query = ``;
    dbFacade.executaQuery((result) => {

    });
  },
  getSingle: (produto, callback) => {
    let query = ``;
    dbFacade.executaQuery(produto, (result) => {

    });
  }
}
