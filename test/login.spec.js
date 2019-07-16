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
			if (err) throw(err);
			response.should.have.status(400);
		});
	   done()
	   });
	it("Deveria retornar 404 quando nao encontrar nenhum usuario", (done) => {
		let login = {
			"email": "fjhewf",
			"senha": "dneuwhf"
		};
		chai.request(URL_BASE)
		.post('/login')
		.send(login)
		.end((err, response) => {
			if (err) throw err;
			response.should.have.status(404);
		});
		done();
	});
	it("Deveria retornar 200 quando tudo da certo", (done) => {
		let login = {
			"email": "sandro@mail.com",
			"senha": "12345"
		};
		chai.request(URL_BASE)
		.post('/login')
		.end((err, response) => {
			if (err) throw(err);
			response.should.have.status(200);
		});
		done();
	});
   });
