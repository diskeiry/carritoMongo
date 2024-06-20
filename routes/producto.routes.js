const express = require('express');
const router = express.Router();
// const multer = require('multer');

const { getAllProductos } = require('../controles/producto.controller');
const { recibido } = require('../controles/producto.controller');
// const { productosController } = require('../controles/producto.controller');
const { insertarUsuarios, consultarProductos,Productos1} = require('../controles/producto.controller');
// const { recibido } = require('../controles/producto.controller');


router.post('/tabla', [], getAllProductos);

// Ruta para insertar productos en MongoDB
router.post('/registro', [], Productos1);

router.get('/almacen', [], recibido);

// Ruta para consultar todos los productos en MongoDB
router.get('/consultar', [], consultarProductos);
// routes/productos.js


module.exports = router;
