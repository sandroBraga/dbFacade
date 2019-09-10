const clienteController = require('../controllers/cliente.js');
const express           = require('express');
const router            = express.Router();

router.post('/', (req, res) => {
  clienteController.inserir(req.body, (result) => {
    res.status(result.status).send(result.response);
    return;
  });
});

router.put('/', (req, res) => {
  clienteController.editar(req.body, (result) => {
    res.status(result.status).send(result.response);
    return;
  });
});

router.get('/', (req, res) => {
  clienteController.getAll((result) => {
    res.status(result.status).send(result.response);
    return;
  });
});

router.get('/:id', (req, res) => {
  let nomeCliente = req.params.nome;
  clienteController.getSingle(nomeCliente, (result) => {
    res.status(result.status).send(result.response);
    return;
  });
});

router.delete('/:id', (req, res) => {
  let idCliente = req.params.id;
  clienteController.remover(idCliente, (result) => {
    res.status(result.status).send(result.response);
  });
});

module.exports = router;
