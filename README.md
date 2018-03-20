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
* Existe um lado cliente e um lado servidor que se comunicam, mas suas implementações são independentes. Por isso, a API pode ser em Node.js e os testes em Ruby :).
* As requests sempre são feitas a partir do cliente para o servidor.
* A conexão entre ambos os lados é feita através do protocolo HTTP.
* São usadas HTTP Requests através de verbos HTTP (GET, POST, PUT, DELETE), URLs, métodos, paths...
* Fique atenta, ao utilizar o protocolo HTTP devemos observar suas características ([saiba mais](https://tools.ietf.org/html/rfc2616)).


### Principais verbos HTTP

* GET: Consultar/obter/ler dados
* POST: Criar/registrar
* PUT: Alterar/atualizar
* DELETE: Excluir


### O que esta API faz?

Esta API é muito simples, não usa banco de dados, mantendo seus dados em memória.
A ideia é um simples armazenador de palavras. A API lista palavras, salva novas
palavras, apaga uma palavra, exibe uma palavra e altera uma palavra.

As rotas disponíveis são:

* `GET - /`: retorna uma string indicando que a API está online.
* `GET - /total`: retorna o número total de palavras armazenadas.
* `GET - /word/:id`: retorna uma palavra específica.
* `GET - /words`: retorna todas as palavras armazenadas.
* `POST - /words`: armazena uma nova palavra.
* `PUT - /words/:id`: altera uma palavra específica.
* `DELETE - /words/:id`: exclui uma palavra.

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

