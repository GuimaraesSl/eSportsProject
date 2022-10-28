# SERVER

## CONFIG
1. npm i -d @types/express
2. npm i typescript
3. Usar a classe como .ts
4. package.json:
  -> "scripts": {
        "build": "tsc"    
      },
5. npm tsc --init (Criar o tsconfig para execultar typescript no node);
6. Arquivo tsconfig:
  -> Descomentar 'rootdir' colocar '/src' (Pasta raiz do projeto)
  -> Descomentar 'outdir' colocar '/build' (Onde o JS gerado vai ser colocado)
  -> "moduleResolution": "node" 
7. npm i ts-node-dev -D (Para não precisar ficar rodando o Build)
8. package.json:
  -> "scripts": {
        "build": "tsc"
        "dev": "tsnd src/server.ts" 
      },
9. rodar usando "npm run dev"; (O script criado no package.json)

## BACKEND DETAILS
### Entidades
#### Game
  - id
  - title
  - bannerUrl

#### Ad
  - id
  - gameId
  - name
  - yearsPlaying
  - discord
  - weekDays
  - hourStart
  - hourEnd
  - useVoiceChannel
  - createdAt

### Casos De Uso
  - Listagem de games com contagem de anúncios
  - Criação de novo anúncio
  - Listagem de anúncios por game
  - Buscar discord pelo ID do anúncio

## HTTP Methods
O uso das padronizações e princípios de uma API RESTful
### GET
Quando se fazer uma operação de leitura. Front-end está Buscando alguma informação no banco de dados;

### POST
Quando estiver criando alguma entidade / recurso dentro do Backend. Adicionando algo novo no banco de dados.

### PUT
Quando estiver editando um entidade por completo dentro do banco de dados. Ex: Editar o perfil de usuário inteiro.

### PATCH
Quando se vai editar uma informação muito específica dentro de uma entidade. Ex: Querer ou não receber notificações do app.

### DELETE
Quando se quer deletar uma entidade do banco de dados.

## HTTP Codes
Mostra se a resposta recebidade pela API condiz com o que está acontecendo e está sendo retornado pelo Backend. Qual o tipo de resposta do Backend.
- HTTP Code: 201 -> Algo foi criado. Deu certo na criação
- HTTP Code: 200 -> Sucesso genérico
- Começa em 2: Sucesso
- Começa em 3: Redirecionamento
- Começa em 4: Erros por código, pela aplicação
- Começa em 5: Erros inesperados, não caracterizados por um código específico

## TIPOS DE PARÂMETROS
- Query Parameters: Parâmetros que vem através do ponto de interrogação. Utilizados quando se precisa persistir estado. Para passar na URL informações que definem o estado da interface que está no momento. Filtros, ordenação, paginação, para coisas não sensíveis (Pois fica disponível na URL). São sempre nomeados.
  Ex: localhost:333/ads?page=2
- Route Parameters: Parâmetros da URL que não são nomeados. São intrísiecamente conhecidos ao olhar a URL. Um identificador passado como rota, para criar um identificador de um recurso (acessar um ID). 
  Ex: localhost:333/ads/5 -> Acessando o anúncio de ID 5;
- Body Parameters: Para quando se vai enviar várias informações em uma requisição. Geralmente para envio de formulário. Não fica na URL, fica escondido na requisição. Utilizar para trabalhar com informações sensíveis.
  Ex: Criação de um usuário.

## Query Builder
- KnexJs: Query Builder para o ecossitemas JS;
- Escrever cófigo JavaScript que será convertido para SQL;

## ORM
- Prisma: ORM para ecossitema JS;
- Object-Relational Mapping. Faz uma relação entre as tabelas do seu banco de dados, com classes e entidades dentro do JavaScript. Consegue fazer Query onde cada tabela do seu banco vai se relacionar com uma classe do seu código.