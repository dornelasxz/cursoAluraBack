// Importa o módulo "express", que é um framework para criar servidores web no Node.js.
import express from "express"; 
import routes from "./src/routes/postsRoutes.js";

// Cria uma instância da aplicação "express".
const app = express();
routes(app);

// Inicia o servidor na porta 3000 e exibe uma mensagem no console indicando que o servidor está ativo.
app.listen(3000, () => {
    console.log("Servidor escutando...");
});