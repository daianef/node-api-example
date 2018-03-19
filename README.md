# API em Node.js - WoMakersCode Summit Porto Alegre 2018

Este repositório contém o código de uma API REST muito simples, feita em Node.js, que será usada
no workshop sobre testes de API no WoMakersCode Summit Porto Alegre 2018.

Aqui também estão alguns materiais auxiliares para entendimento e uso desta API.


## API: Application Programming Interface

Um conjunto de padrões e rotinas que compreendem uma forma de acessar um software com base na Web.


Algumas características:

* Permite que outras pessoas/empresas desenvolvam softwares relacionados a outro software.
* É uma forma de modularizar um sistema e facilitar a gerência de dependência.
* Potencializa automações no contexto de DevOps.


## REST: Representational State Transfer

Abstração da arquitetura da Web. Em outras palavras, é um modelo ou estilo de arquitetura, consistindo em um conjunto de padrões que, se utilizados, facilitam a comunicação entre sistemas na web.

REST prevê que:
* Cliente e servidor se comunicam, mas suas implementações são independentes.
* Requests são feitas a partir do cliente para o servidor.
* A conexão é feita através do protocolo HTTP.
* Uso de HTTP Requests através de verbos HTTP (GET, POST, PUT, DELETE), URLs, métodos, paths...


### Verbos

* GET: Consultar/obter/ler dados
* POST: Criar/registrar
* PUT: Alterar/atualizar
* DELETE: Excluir


## Deploy local (Linux)

Primeiro, faça o clone deste repositório. Em seguida, entre na pasta.

Então, execute esses comandos:

```
docker build -t node-api-image .
docker run -p 50000:3000 --name node-api -d node-api-image
```

Pronto, a API está executando em http://localhost:50000.

Use `docker ps` para ver se o container está up,
e `docker logs node-api` caso queira ver os logs do container.
