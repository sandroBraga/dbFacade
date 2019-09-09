const chai = require('chai');
const chaiHttp = require('chai-http');
const login = require('../routes/login.js');
const expect = chai.expect;
const should = chai.should();
const URL_BASE = "http://localhost:5000"

chai.use(chaiHttp);

describe("Login scenarios", () => {
   it("Should return 400 when password not informed", (done) => {
	   let login = {
		   "email": "sandro@mail.com",
		   "senha": ""
	   };

	   chai.request(login)
	   	 .post('/')
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
    .send(login)
		.end((err, response) => {
			if (err) throw(err);
			response.should.have.status(200);
		});
		done();
	});
   });
