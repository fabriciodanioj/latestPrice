import 'dotenv/config';// Habilitar as variáveis ambiente

import express, { json } from "express";
import { connect } from "mongoose";
import cors from "cors";

import routes from "./routes";

class App { // habilitar acesso aos middlewares e rotas, menos a porta
    constructor() {// método para inicializar o projeto
        this.server = express();

        this.database();
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.server.use(cors());
        this.server.use(json());
    }

    database() {
        connect(process.env.MONGO_URL,{ 
            useNewUrlParser: true, 
            useUnifiedTopology: true,
            useFindAndModify: false
        });
    }

    routes() {
        this.server.use(routes);
    }
}

export default new App().server // aqui você tem o acesso as funcionalidades do express