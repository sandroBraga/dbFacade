# Doggis

Backend responsável pela conexão entre as rotas e o banco de dados

---
## Requerimentos

Para o desenvolvimento, será necessário Node.js e o gerenciador de pacotes NPM instalado no seu ambiente

### Node
- #### Instalando o Node no Ubuntu

  Voce pode instalar o nodejs e o npm facilmente utilizando o apt install, rode os comandos a seguir.

      $ sudo apt install nodejs
      $ sudo apt install npm

Se a instalaçao for bem sucedida, você deve ser capaz de executar os comandos a seguir.

    $ node --version
    v8.10.0

    $ npm --version
    3.5.2

###

## Instalando

    $ git clone https://github.com/sandroBraga/dbFacade.git
    $ cd dbFacade
    $ npm install

## Dependencias
    
    chai: 4.2.0
    chai-http: ^4.3.0
    cors: 2.8.5
    express: 4.17.1
    mocha: 6.1.4
    mysql: 2.17.1
    nodemon: 1.19.1
    nyc: 14.1.1
    request: 2.88.0
    should: 13.2.3
    uuid: 3.3.3

## Configurando o ambiente

    $ cd dbFacade/db-config
    $ vim db-config.json

  Altere o arquivo de acordo com suas configurações
  Utilize o arquivo petshop.sql para fazer o import das tabelas e dados

## Executando o projeto

    $ npm start

## Executando os testes

    $ npm test
