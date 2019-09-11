const express           = require('express');
//const loginController   = require('./controllers/login.js');
const cors              = require('cors');
const clienteRoute      = require('./routes/cliente.js');
const servicoRoute      = require('./routes/servico.js');
const loginRoute        = require('./routes/login.js');
const app               = express();

app.use(express.json(), cors());
app.use('/clientes', clienteRoute);
app.use('/servico', servicoRoute);
app.use('/login', loginRoute);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});

app.get('/', (req, res) => {
  res.send(JSON.stringify("I wish i was dead"));
});
