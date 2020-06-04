# AnagramSolver: uma ferramenta para solucionar anagramas

AnagramSolver é uma ferramenta feita para solucionar anagramas por meio de uma API. Apesar de ter uma construção simples, é funcional.

### Executando de forma nativa

1) Instale o [NodeJS](https://nodejs.org/en/), caso ainda não tenha instalado.

2) Instale as dependencias do projeto utilizando `npm install` na raiz do projeto (onde se encontra o `package.json`)

3) Execute a aplicação utilizando `npm start` na raiz do projeto (onde se encontra o `package.json`)

*Por padrão, a porta utilizada é a 3000, você pode alterar isto em `src/App.js`*

## Como usar
### `GET /solve/:locale/:word`
Abra seu navegador ou uma ferramenta de requisições HTTP e utilize a rota acima para efetuar suas consultas

Exemplos:

**`locale: pt-br` `word: napela`**

`http://localhost:3000/solve/pt-br/napela`

<img src="https://i.imgur.com/ZVpy1hY.png">


**`locale: en-us` `word: loksf`**

`http://localhost:3000/solve/en-us/loksf`

<img src="https://i.imgur.com/L78qbrY.png">

<h1 align="center">That's all folks!</h1>
<img src="https://i.imgur.com/sqNFhym.jpg" align="center" width="512" height="288">