const dbFacade = require('../facade/database.js');
const tabelaUsuario = require('../constants/tables.js');

module.exports = {
  login: (usuario, callback) => {
    let query = `SELECT * FROM ${tabelaUsuario.TABELA_USUARIO} WHERE EMAIL = '${usuario.email}' AND SENHA = '${usuario.senha}';`;
    dbFacade.executaQuery(query, (result) => {
      if (result.length) callback({'status': 200, 'response': result});
      else callback(JSON.parse(JSON.stringify({'status': 404, 'response': {'msg':'Usuário não encontrado'}})));
    });
  }
};