const chai     = require('chai');
const chaiHttp = require('chai-http');
const indexServer = require('../index.js');
const expect   = chai.expect;
const should   = chai.should();
const URL_BASE = "http://localhost:5000"

chai.use(chaiHttp);

describe("Login scenarios", () => {
   it("Deveria retornar 400 quando senha não informada", (done) => {
	   let login = {
		   "email": "mail@mail.com",
		   "senha": ""
	   };
	   chai.request(URL_BASE)
	   	 .post('/login')
	   	 .send(login)
	   	 .end((err, response) => {
			 if (err) throw(err);
			 expect(response.error.status).to.be.equal(400);
		 });
	   done();
	});
	it("Deveria retornar 404 quando nao encontrar nenhum usuario", (done) => {
		let login = {
			"email": "fjhewf@mail",
			"senha": "dneuwhf"
		};
		chai.request(URL_BASE)
  		.post('/login')
  		.send(login)
  		.end((err, response) => {
  			if (err) throw err;
        console.log('response ', response.error.status);
  			expect(response.error.status).to.be.equal(500);
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
