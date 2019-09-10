const dbFacade     = require('../facade/database.js');
const tabelaPessoa = require('../constants/tables.js');
const uuid         = require('uuid/v4');

module.exports = {
  login: (usuario, callback) => {
    let query = `SELECT * FROM ${tabelaPessoa.TABELA_PESSOA} WHERE EMAIL = '${usuario.email}' AND SENHA = '${usuario.senha}';`;
    dbFacade.executaQuery(query, (result) => {
      if (result.length) callback({'status': 200, 'response': { ...result, token: uuid()}});
      else callback(JSON.parse(JSON.stringify({'status': 404, 'response': {'msg':'Usuário não encontrado'}})));
    });
  }
};
