require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const Server = require('./models/server.model');
const InitDB = require('./config/db');
const productosRouter = require('./routes/producto.routes');
const app = express();
const PORT = process.env.PORT || 8080;

// Middleware para parsear JSON
app.use(bodyParser.json({ limit: '20mb' }));

// Middleware para parsear application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ limit: '20mb', extended: true }));

// Rutas para los productos
app.use('/productos', productosRouter);
// Rutas para los usuarios
app.use('/registro', productosRouter);
// Iniciar servidor y conectar a la base de datos
const startServer = async () => {
    try {
        await InitDB();  // Esperar a que se conecte a la base de datos
        const server = new Server();
        server.listen(PORT, () => {
            console.log(`Servidor escuchando en el puerto ${PORT}`);
        });
    } catch (err) {
        console.error('No se pudo iniciar el servidor debido a un error en la conexión a la base de datos', err);
        process.exit(1);
    }
};

startServer();
