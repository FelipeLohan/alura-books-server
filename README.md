# DOCUMENTAÇÃO ALURA-BOOKS-SERVER

## Função da API:

API onde recebe uma requisição HTTP de GET ou POST, e tem a responsabilidade de retornar o Banco de Dados com o livro requisitado, ou adioconar um livro ao banco de dados.

## Explicação do Design Pattern:

Decidi usar uma Layered Archteture, ela é altamente escalável e fácil de fazer a manutenção, define bem as responsábilidades de cada camada da aplicação.

OBS: Ela também é considerada uma variação da Arquitetura MVC, porém adaptada para APIs. Por conta da falta da camada de View.

- ```app.js``` é o Main da aplicação.
  
- ```books.json``` é o "Banco de dados" da aplicação.

### Routes:

Pasta responsável por armazenar as informações de rota. o arquivo `book.js` tem vários metódos, um deles é por exemplo o `router.get('/', getLivros)` , esse metódo faz uma requisição GET no caminho raiz e chama a função getLivros, do controller.

### Controllers:

Os `controllers` são responsaveis por lidar com a requisição e de Input e Output das requisições `HTTP`, normalmente elas chamam um `service`, e o `service` faz toda a lógica de negócio e retorna para ele.

### Services:

Implementam a lógica de negócios, eles não lidam diretamente com a requisição `HTTP`, são chamados por algum `controller`, e retornam o que foi pedido.
Um `service` centraliza tudo referente a regra de negócio da aplicação, ele faz conecta com outras `APIs`, puxa banco de dados, e processament de dados.
