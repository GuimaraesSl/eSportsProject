import express from "express";
const app = express();

//Parâmetros: endereço que vai ser acessado | Acessou ads
//Passa a função que vai ser executada ao acessar determinada rota;
//request: buscar dados relacionado aquela requisição específica
//response: retorno dessa requisição específica
app.get('/games', (request, response) => {
  return response.json([]);
});

// Apesar de ter o mesmo nome, é uma rota diferente por se utuilizar do método POST
// Envia o status 201 dizendo que a criação foi um sucesso
app.post('/ads', (request, response) => {
  return response.status(201).json([]);
});

// Listar os anúncios de um game específico
// Listagens Backend trabalham com tipos de parâmetros: Query, Route, Body
// Usar o Route Parameters para identificar o Game (Usar os dois pontos)
app.get('/games/:id/ads', (request, response) => {
  const gameId = request.params.id;

  return response.json([
    {id: 1, name: 'Anuncio 1!'},
    {id: 2, name: 'Anuncio 2!'},
    {id: 3, name: 'Anuncio 3!'},
    {id: 4, name: 'Anuncio 4!'},
  ])
});

// Pegar o discord de um anúncio específico
app.get('/ads/:id/discord', (request, response) => {
  const adId = request.params.id;

  return response.json([])
});

//Passa a porta pela qual a API vai escultar a aplicação
app.listen(3333) // localhost:3333/ads