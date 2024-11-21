import express from "express";
import { listarPost } from "../controllers/postsController.js";

const routes = (app) => {
    // Configura o middleware do Express para interpretar o corpo das requisições como JSON.
    app.use(express.json());
    // Define uma rota GET para "/posts" que retorna todos os posts do banco de dados.
    app.get("/posts", listarPost);
}

export default routes;