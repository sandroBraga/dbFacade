const produtoController = require("../controllers/produto.js");
const express           = require("express");
const router            = express.Router();

router.post('/', (req, res) => {
  console.log('body ', req.body);
  produtoController.inserir(req.body, (result) => {
    res.status(result.status).send(result.response);
    return;
  });
});

router.get('/', (req, res) => {
  produtoController.getAll((result) => {
    res.status(result.status).send(result.response);
  });
});

router.get('/:id', (req, res) => {
  let produtoId = req.params.id;
  produtoController.getSingle(produtoId, (result) => {
    res.status(result.status).send(result.response);
    return;
  });
});

router.put('/', (req, res) => {
  produtoController.editar(req.body, (result) => {
    res.status(result.status).send(result.response);
  });
});

router.delete('/:id', (req, res) => {
  let produtoId = req.params.id;
  produtoController.remover(produtoId, (result) => {
    res.status(result.status).send(result.response);
    return;
  });
});

module.exports = router;
