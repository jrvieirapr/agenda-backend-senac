# Sistema de Agenda

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
-**Instação**: npm -i ou -install para instalação.

```bash
npm init -y
npm install express mongoose dotenv cors
npm install --save-dev nodemon
```

## Observações
-**Instalação global**: -g ou -global para instalação global - no pc e não no projeto.
-**Instalar somente desenvolvedor**: --save-dev ambiente de desenvolvimento.

## Bibliotecas Utilizadas

-**express**: O Express é um framework web para Node.js que simplifica a criação de aplicativos e APIs. Ele oferece uma abordagem minimalista e flexível para lidar com rotas, middleware e gerenciamento de requisições e respostas HTTP.

-**nodemon**: é uma ferramenta que ajuda no desenvolvimento de aplicações Node.js. Ele é uma abreviação de "Node Monitor" e tem como objetivo monitorar os arquivos de sua aplicação em tempo real e reiniciar automaticamente o servidor sempre que houver alterações no código fonte.

-**mongoose**: O Mongoose é uma biblioteca do MongoDB para Node.js que fornece uma camada de abstração para interagir com o banco de dados MongoDB. Ele simplifica a criação de modelos, validação de dados e consultas ao banco de dados.

-**dotenv**: O Dotenv é uma biblioteca que permite carregar variáveis de ambiente a partir de um arquivo .env no seu projeto. Isso é útil para armazenar informações sensíveis, como chaves de API, senhas ou configurações específicas do ambiente de desenvolvimento.

-**cors**: O Cors é uma biblioteca utilizada para habilitar o controle de acesso de recursos de outros domínios ao servidor através da política de mesma origem (CORS). Ele é útil quando seu aplicativo precisa ser acessado de diferentes domínios ou quando está sendo desenvolvido um aplicativo frontend separado.