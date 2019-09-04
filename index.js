const express           = require('express');
const loginController   = require('./controllers/login.js');
const cors              = require('cors');
const app               = express();
const clienteRoute      = require('./routes/cliente.js');
const servicoRoute      = require('./routes/servico.js');

app.use(express.json(), cors());
app.use('/cliente', clienteRoute);
app.post('/servico', servicoRoute);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});

app.get('/', (req, res) => {
  res.send(JSON.stringify("I wish i was dead"));
});

app.post('/login', (req, res) => {
  if((req.body.email === '' || req.body.email === undefined) || (req.body.senha === '' || req.body.senha === undefined)) {
    res.status(400).send(JSON.stringify({'error': 'Usuário ou senha não informado'}));
    return;
  }
  loginController.login(req.body, (result) => {
    res.status(result.status).send(result.response);
    return;
  });
});
