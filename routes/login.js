const loginController = require('../controllers/login.js');
const express         = require('express');
const router          = express.Router();

router.post('/', (req, res) => {
  if((req.body.email === '' || req.body.email === undefined) || (req.body.senha === '' || req.body.senha === undefined)) {
    res.status(400).send(JSON.stringify({'error': 'Usuário ou senha não informado'}));
    return;
  }
  loginController.login(req.body, (result) => {
    res.status(result.status).send(result.response);
    return;
  });
});

module.exports = router;
