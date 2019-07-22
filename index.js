const express = require('express');
const db      = require('./db-facade.js');
const tabelas = require('./table-constants.js');
const app     = express();

app.use(express.json());

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

app.get('/', (req, res) => {
  db.connection();
  res.send(JSON.stringify("I wish i was dead"));
});

app.get('/get-all', (req, res) => {
  db.querySimples(tabelas.TABELA_USUARIO, (result) => {
    if(result) {
		  res.status(200).send(result);
		  return;
	  } else {

		  res.status(500).send(JSON.stringify('Opa'));
		  return;
	  }
  });
});

app.post('/login', (req, res) => {
  if(req.body.email === '' || req.body.senha === '') {
    res.status(400).send(JSON.stringify({'error': 'Usuário ou senha não informado'}));
    return;
  }
  db.queryLogin(req.body, (result) => {
    if(result) {
	     res.status(200).send(result);
	     return;
    } else {
	    res.status(404).send(JSON.stringify({'aviso':'Usuário não encontrado'}));
	    return;
    }
  });
});

app.post('/insert', (req, res) => {
  if(req.body.tabela === '' || req.body.campos === '') {
    res.status(400).send(JSON.stringify({'error': 'Tabela ou campos não informados'}));
    return;
  }
  db.queryInsertGenerica(req.body, (result) => {
    if(result) {
      res.status(200).send(result);
      return;
    } else {
      res.send(500).send(JSON.stringify({'error': 'Ocorreu um erro ao fazer a inserção'}));
      return;
    }
  });
});

app.post('/delete', (req, res) => {
	if(req.body.tabela === '') {
		res.status(400).send(JSON.stringify({'error': 'Não é possível deletar sem infomar o id ou a tabela'}));
		return;
	}
  db.queryDeleteGenerica(req.body, (result) => {
	  if(result) {
	     res.status(200).send(result);
		  return;
	  } else {
		  res.status(500).send(JSON.stringify({'error':'Ocorreu um erro fazer a deleção'}));
		  return;
	  }
  });
});
