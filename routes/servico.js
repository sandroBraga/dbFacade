const servicoController = require('../controllers/servico.js');
const express           = require('express');
const router            = express.Router();

router.post('/', (req, res) => {
  servicoController.inserir(req.body, (result) => {
    res.status(result.status).send(result.response);
    return;
  });
});

router.put('/', (req, res) => {
  servicoController.editar(req.body, (result) => {
    res.status(result.status).send(result.response);
    return;
  });
});

router.get('/', (req, res) => {
  servicoController.getAll((result) => {
    res.status(result.status).send(result.response);
    return;
  });
});

router.get('/:id', (req, res) => {
  let nomeCliente = req.params.nome;
  servicoController.getSingle(nomeCliente, (result) => {
    res.status(result.status).send(result.response);
    return;
  });
});

router.delete('/:id', (req, res) => {
  let idCliente = req.params.nome;
  servicoController.remover(idCliente, (result) => {
    res.status(result.status).send(result.response);
  });
});

module.exports = router;
