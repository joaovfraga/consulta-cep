# CEP Fullstack Application

Esta é uma aplicação fullstack para consulta de CEP, armazenamento e exibição do histórico de consultas por usuário.

## Tecnologias Utilizadas

### Backend
- Node.js com Express
- Sequelize (ORM para PostgreSQL)
- Axios para requisições HTTP

### Frontend
- React

### Banco de Dados
- PostgreSQL

## Funcionalidades

- Consulta de CEP com validação
- Cache de CEPs para evitar requisições desnecessárias à API externa
- Histórico de consultas por usuário
- Paginação do histórico de consultas

## Pré-requisitos

- Node.js (v14+)
- PostgreSQL instalado e rodando
- NPM ou Yarn

## Configuração

### Banco de Dados

The mandarei a URL de conexão :)

### Backend

1. Entre na pasta do backend:

```bash
cd backend
```

2. Instale as dependências:

```bash
npm install
```

3. Configure as variáveis de ambiente no arquivo `.env`:

```
DATABASE_URL=url_que_irei_enviar
PORT=3001
```

4. Inicie o servidor:

```bash
npm run dev
```

O servidor estará rodando em http://localhost:3001

### Frontend

1. Entre na pasta do frontend:

```bash
cd frontend
```

2. Instale as dependências:

```bash
npm install
```

3. Inicie a aplicação React:

```bash
npm start
```

A aplicação estará disponível em http://localhost:3000

## Endpoints da API

- `GET /cep/:cep`: Retorna as informações do CEP informado
- `GET /history/:userId`: Retorna o histórico de consultas do usuário
- `GET /health`: Verifica se a API está funcionando
