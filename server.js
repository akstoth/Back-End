// ########################################################################################
// Criando o primeiro servidor com Node.js
// Autor: Aleksander Da Silva Toth
// Data: 10/07/2021
// Referência: https://www.youtube.com/watch?v=hHM-hr9q4mo
// ########################################################################################

/*
########################################################################################
// Primeiro: Sem uma framework
// Realiza importação de dentro do node http. 
// Existem vários módulos dentro do node que podem ser importados dessa forma
// Importa a função createServer do módulo http. Pode ser acessádo através do navegador
import {createServer} from 'node:http' 

// Cria um servidor com a função createServer. Pode receber requisições e respostas 
// request: Podemos criar uma funcionalidade de criação de usuários, por exemplo
// response: Podemos retornar uma resposta para o usuário
const server = createServer((request, response) => {
    //console.log('Oi')
    response.write("teste de alterar, rodando no cmd") // Escreve no servidor (navegador)
    return response.end()
})

// Localhost:3333
server.listen(3333) // Porta que o servidor vai rodar
########################################################################################
*/

// ########################################################################################
// Segundo: Com uma framework
import {fastify} from 'fastify'// Importa a função Fastify do módulo fastify
import {DatabaseMemory} from './database-memory.js' // Importa a classe DatabaseMemory do arquivo database-memory.js

const server = fastify() // Cria um servidor com a função Fastify

const database = new DatabaseMemory() // Cria um banco de dados em memória

// Cria uma rota para o servidor
server.post('/videos', (request, reply) =>{
    database.create({
        title: 'Video 01',
        description: 'Esse é o video 01',
        duration: 180,
    })
    
    console.log(database.list())

    return reply.status(201).send() // Retorna o status-code da minha rota, 201: Created
})

// Cria a porta através de um objeto port
server.listen({
    port: 3333,
})

// ########################################################################################
