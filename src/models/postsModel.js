import conectarAoBanco from "../config/dbConfig.js";

// Aguarda a conexão com o banco de dados utilizando a string de conexão definida nas variáveis de ambiente.
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

// Função assíncrona que recupera todos os posts armazenados no banco de dados.
export async function getTodosPosts() {
    // Obtém uma referência ao banco de dados chamado "imersao-instabytes".
    const db = conexao.db("imersao-instabytes");
    // Obtém uma referência à coleção chamada "posts".
    const colecao = db.collection("posts");
    // Recupera todos os documentos da coleção como um array.
    return colecao.find().toArray();
}

export async function criarPost(novoPost) {
    const db = conexao.db("imersao-instabytes");
    const colecao = db.collection("posts");
    return colecao.insertOne(novoPost)
}