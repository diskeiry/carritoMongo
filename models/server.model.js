const express = require('express');
const cors = require('cors');
const { getAllProductos} = require('../controles/producto.controller');
const { insertarUsuarios } = require('../controles/producto.controller');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.app.use(express.static('public'));
        this.app.use(express.json());
        this.app.use(cors({ origin: '*' }));
    }

    routes() {
        this.app.use('/producto', require('../routes/producto.routes'));
        // this.app.use('/registro', require('../routes/producto.routes'));
    }

    listen() {
        this.app.listen(this.port, ()=> {
            console.log(`SE ESTA EJECUTANDO CORRECTAMENTE EN EL PUERTO ${this.port}`);
        });
    }

    
}


module.exports = Server;