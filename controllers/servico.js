const dbFacade      = require('../facade/database.js');
const tabelaServico = require('../constants/tables.js');

module.exports = {
  inserir: (servico, callback) => {
    let query = ``;
    dbFacade.executaQuery(query, (result) => {
      console.log('query ', query);
    });
  },
  editar: (servico, callback) => {
    let query = ``;
    dbFacade.executaQuery(query, (result) => {
      console.log('query ', query);
    });
  },
  remover: (servico, callback) => {
    let query = ``;
    dbFacade.executaQuery(query, (result) => {
      console.log('query ', query);
    });
  },
  getAll: (callback) => {
    let query = ``;
    dbFacade.executaQuery(query, (result) => {
      console.log('query ', query);
    });
  },
  getSingle: (descricao, callback) => {
    let query = ``;
    dbFacade.executaQuery(query, (result) => {
      console.log('query ', query);
    });
  }
};
