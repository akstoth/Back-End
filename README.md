
# Notas: Criando servidor com node.js
- Node.js é uma plataforma que permite rodar JavaScript no servidor
- É possível criar um servidor com node.js sem a utilização de frameworks
- Para isso, é necessário utilizar o módulo http do node.js
- Para criar um servidor com node.js, é necessário importar o módulo http
- O módulo http é importado com o comando require
- O módulo http do node.js permite criar um servidor com a função createServer
- A função createServer recebe uma função de callback como parâmetro
- A função de callback recebe dois parâmetros: request e response
- request: Requisição feita pelo usuário
- response: Resposta que será enviada para o usuário
- Para criar um servidor, é necessário chamar a função listen do servidor
- A função listen recebe uma porta como parâmetro
- A porta é um número que identifica o servidor
- Para acessar o servidor, é necessário acessar o localhost e a porta
- Exemplo: localhost:3333
- Para rodar o servidor, é necessário rodar o arquivo com o node
- Exemplo: node server.js
- Para parar o servidor, é necessário clicar em ctrl + c
- Para rodar o servidor sem parar, é necessário rodar o arquivo com o --watch
- Exemplo: node --watch server.js
- Para rodar o servidor com npm, é necessário criar um arquivo package.json
- O arquivo package.json é criado com o comando npm init -y
- Para rodar o servidor com npm, é necessário criar um script no package.json
- O script é criado dentro de scripts com o nome start e o comando para rodar o servidor
- Exemplo: "start": "node --watch server.js"
- Para rodar o servidor com npm, é necessário rodar o comando npm run start
- Exemplo: npm run start

