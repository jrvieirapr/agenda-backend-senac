# Sistema de Agenda

![Projeto Preview](https://pt.wikipedia.org/wiki/JavaScript#/media/Ficheiro:Unofficial_JavaScript_logo_2.svg)

## Descrição

Este é um sistema de agenda que permite criar, atualizar, listar e remover eventos através de uma API RESTful.

## Verbos HTTP que serão utilizado neste exemplo.

- **GET**: Usado para obter informações de uma página ou servidor. Neste projeto, as rotas GET são utilizadas para consultar os eventos existentes na agenda.

- **POST**: Utilizado para enviar informações ao servidor. Ao criar um novo evento na agenda, enviamos as informações "envelopadas ou protegidas" dentro de uma requisição.

- **PUT ou UPDATE**: Utilizado para atualizar registros existentes. Quando queremos modificar um evento já existente, enviamos o ID do registro que desejamos atualizar e as informações atualizadas "envelopadas ou protegidas".

- **DELETE**: Usado para remover registros. Ao deletar um evento da agenda, enviamos a ID do registro que queremos destruir no banco de dados.

- **OPTION**: Usado para verificar a disponibilidade do objeto. Não foi detalhado em que contexto específico é utilizado no projeto.

## Estrutura do projeto

1. Crie uma pasta com o nome do projeto.
2. Dentro da pasta do projeto, crie uma pasta chamada "frontend".
3. Dentro da pasta do projeto, crie uma pasta chamada "backend".

## Configuração do backend

1. Abra o Visual Studio Code e selecione a pasta do projeto.
2. Clique em "Terminal" e selecione "Novo Terminal".
3. No terminal, digite os seguintes comandos para instalar as bibliotecas do backend:

```bash
npm init -y
npm install express mongoose dotenv cors
npm install --save-dev nodemon
´´´
