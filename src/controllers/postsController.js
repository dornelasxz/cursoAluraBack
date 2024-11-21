import getTodosPosts from "../models/postsModel.js";

export async function listarPost(req, res){
    // Chama a função que busca os posts no banco.
    const posts = await getTodosPosts();
    // Retorna os posts no formato JSON com o status HTTP 200 (OK).
    res.status(200).json(posts);
    };