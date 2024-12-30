
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

## Primeiros passos para rodar o servidor
    - Para rodar o servidor, basta rodar o comando node server.js no terminal
    - Antes disso, precisamos criar o package.json com o comando npm init -y
    - O comando cria o arquivo package.json com as configurações padrão, mas
        foi necessário acrescentar o type: module para que o node consiga 
        entender o import/export
    - Após rodar o server.js no terminal novamente, vá para o navegador e 
    digite localhost:3333, 
        e aparecerá o console.log('Oi') no terminal
    - Para parar o servidor, basta clicar em ctrl + c no terminal
    - Se executar sempre com server.js, após uma alteração no código, é 
    necessário parar o servidor e 
        rodar novamente
    - Para evitar isso, podemos acrescentar -- watch no comando node 
    server.js, que fica assim: 
        node --watch server.js
    - Também podemos acrescentar no package.json, dentro de scripts, o 
    comando "start": "node --watch server.js"
        no caso, criamos um script chamado dev com esse comando
    - Para rodar o servidor, basta rodar o comando npm run dev, mas devido à 
    um problema no VS e alguma política
    - Para alterar a política de execução do Powershell, altere com o seguinte código no terminal do VS code: Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
        só consigo rodar no terminal direto (cmd)
    - Assim criamos o primeiro servidor sem nenhuma biblioteca externa. O 
    correto é utilizando uma framework
    - Uma framework é um conjunto de funcionalidades que facilitam a criação 
    de um servidor, várias rotas, etc
    - Rota com métodos como: 
        POST localhost:3333/videos - Quando o usuário quer criar algo
        DELETE localhost:3333/videos/1 - Quando o usuário quer deletar algo

## Utilizando agora uma framwwork
 - Instalando a primeira framework com o comando npm install fastify
 - O fastify é um microframework, ou seja, é um framework que não tem muitas funcionalidades, 
mas é muito rápido, trazendo funcionalidades mais comuns, por exemplo roteamento, 
validação de dados, etc.
 - O node cria um package-lock.json, que é um arquivo que guarda todas as dependências do projeto e
 não deve ser alterado
 - Criou também uma pasta node_modules, que é onde ficam todas as dependências do projeto
 - Uma dependência é um pacote que é instalado no projeto, e pode ter outras dependências,
 por isso a pasta node_modules é criada

- Métodos no https: GET, POST, PUT, DELETE, PATCH
    -  GET: Pegar informações, buscar informações, listar informações
    - POST: Enviar informações, criar informações, enviar formulários
    - PUT: Atualizar informações, editar informações, atualizar formulários, atualizar dados
    - DELETE: Deletar informações, remover informações, deletar formulários, remover dados
    - PATCH: Atualizar uma informação específica, editar uma informação específica
    - Podemos ter a mesma rota, com métodos diferentes


// Exemplo inicial Cria uma rota no servidor
// Quando o usuário chamar apenas o localhost, vai retornar 'Hello World'
server.get('/', () => {
    return 'Hello World'
})

server.get('/hello', () => {
    return 'Hello Elrondoronar'
})

server.get('/node', () => {
    return 'Hello Node.JS'
})

// POST https://localhost:3333/videos
server.post('/videos', () => {
    return 'Criando um vídeo'
})

server.get('/videos', () => {
    return 'Pegando dados de um video'
})

// Sempre ao atualizar um vídeos, será um vídeo específico, identificado por um ID
// Esse ID é idenfiticado por Route parameter 

// PUT https://localhost:3333/videos/1
server.put('/videos/:id', () => {
    return 'Atualizando um video'
})

server.delete('/videos/:id', () => {
    return 'Atualizando um video'
})

 ## Criando um banco de dados em memória
 - Cria-se um arquivo database-memori.js
 - Após essa criação, precisa-se criar um arquivo de rotas. Baixamos o rest client primeiro
 - Cria-se o arquivo .http para criar a nossa primeira rota
 - Estrutura de dados: Set, Map
 - Set: Conjunto de dados, não aceita repetição
 - Map: Conjunto de dados, aceita repetição, mas é indexado por chave e valor
 - Pelo navegador só é possível testar rotas do tipo get
