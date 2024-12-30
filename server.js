// ############################################################################
// Criando o primeiro servidor com Node.js
// Autor: Aleksander Da Silva Toth
// Data: 10/07/2021
// Referência: https://www.youtube.com/watch?v=hHM-hr9q4mo
// ############################################################################

/*
###############################################################################
// Primeiro: Sem uma framework
// Realiza importação de dentro do node http. 
// Existem vários módulos dentro do node que podem ser importados dessa forma
// Importa a função createServer do módulo http. Pode ser acessádo através 
// do navegador
import {createServer} from 'node:http' 

// Cria um servidor com a função createServer. Pode receber requisições 
// e respostas 
// request: Podemos criar uma funcionalidade de criação de usuários
// response: Podemos retornar uma resposta para o usuário
const server = createServer((request, response) => {
    //console.log('Oi')
    // Escreve no servidor (navegador)
    response.write("teste de alterar, rodando no cmd") 
    return response.end()
})

// Localhost:3333
server.listen(3333) // Porta que o servidor vai rodar
############################################################################
*/
// #########################################################################
// Segundo: Com uma framework

// Importa a função Fastify do módulo fastify
import {fastify} from 'fastify'
// Importa a classe DatabaseMemory do arquivo database-memory.js
//import {DatabaseMemory} from './database-memory.js' 
import { DatabasePostgres } from './database-postgres.js'

const server = fastify() // Cria um servidor com a função Fastify

//const database = new DatabaseMemory() // Cria um banco de dados em memória
const database = new DatabasePostgres()


// Request body: envia um corpo para requisição, como um formulário

// Cria uma rota para o servidor
// Usa-se  async somente com database postgre aqui usado, pois é uma função assíncrona
// Consequentemente o await é usado para esperar a resposta do banco de dados
server.post('/videos', async (request, reply) =>{
    const {title, description, duration} = request.body

    await database.create({
        title,
        description,
        duration,
    })

    // Retorna o status-code da minha rota, 201: Created
    return reply.status(201).send() 
})

server.get('/videos', async (request) => {
    const search = request.query.search
    const videos = await database.list(search)
    
    return videos
})


server.put('/videos/:id', async (request, reply) => {
    const videosId = request.params.id
    const {title, description, duration} = request.body

    await database.update(videosId,{
        title,
        description,
        duration,
    })

    return reply.status(204).send() // Sucesso, mas sem conteúdo na resposta
})

server.delete('/videos/:id', async (request, reply) => {
    const videosId = request.params.id
    
    await database.delete(videosId)
    
    return reply.status(204).send()
})

// Cria a porta através de um objeto port
server.listen({
    //port: 3333,
    host: '0.0.0.0',
    port: process.env.PORT ?? 3333,
})

// ########################################################################
