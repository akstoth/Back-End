// Realiza importação de dentro do node http. 
// Existem vários módulos dentro do node que podem ser importados dessa forma
// Importa a função createServer do módulo http. Pode ser acessádo através do navegador
import {createServer} from 'node:http' 

// Cria um servidor com a função createServer. createServer pode receber requisições e respostas (parâmetros)
// request: Podemos criar uma funcionalidade de criação de usuários, por exemplo
// response: Podemos retornar uma resposta para o usuário
const server = createServer((request, response) => {
    //console.log('Oi')
    response.write("teste de alterar, rodando no cmd") // Escreve no servidor (navegador)
    return response.end()
})

// Localhost:3333
server.listen(3333) // Porta que o servidor vai rodar
