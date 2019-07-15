//const should = require('should');
const request = require('request');
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../index.js');
const expect = chai.expect;
const should = chai.should();
const URL_BASE = "http://localhost:3000"

chai.use(chaiHttp);

describe("Testando login", () => {
   it("Deveria retornar 400 quando usuario ou senha nao informado", (done) => {
	   let login = {
             "email": "sandro@mail.com",
	     "senha": ""
	   };

	   chai.request(URL_BASE)
	   	.post('/login')
	   	.send(login)
	   	.end((err, response) => {
			if (err) done(err);
			response.should.have.status(400);
		});
	   done()
	   });
   });
