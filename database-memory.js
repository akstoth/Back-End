// Criando o banco de dados em memória
/*
Um banco de dados em memória faz com que os dados sejam perdidos ao reiniciar o servidor
Não é recomendado para produção
*/ 

// UUID: Universal Unique Identifier
import {randomUUID} from 'node:crypto' // Importa a função randomUUID do módulo crypto

// Criando uma classe para o banco de dados em memória, capaz de ser exportada
export class DatabaseMemory {
    #videos = new Map() // Array de videos
    
    // Criando métodos para manusear o banco de dados
    list() {
        return this.#videos.values() // Retorna todos os valores do banco de dados sem ids
    }

    create(video) {
        const videoId = randomUUID() // Gera um ID único
        this.#videos.set(videoId, video) // Adiciona o vídeo ao banco de dados
    }

    update(id, video) {
        this.#videos.set(id, video) // Atualiza o vídeo no banco de dados
    }

    delete(id) {
        this.#videos.delete(id) // Deleta o vídeo do banco de dados
    }
}