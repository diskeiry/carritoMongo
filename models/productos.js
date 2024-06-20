const mongoose = require('mongoose');

const productosScheme = new mongoose.Schema(
    {
        id: { type: Number},
        img: { type: String},  
        nombre: { type: String},  
        precio: { type: Number}, 
        cantidad: { type: Number},
        importe: { type: Number } 

    }
)

const registroScheme = new mongoose.Schema(
    {
        id: { type: Number },
        nombre: { type: String },
        apellido: { type: String },
        edad: { type: Number },
        fechaNacimiento: { type: Date }

    }
);

const insertarProductos1 = mongoose.model('insertarProductos1', registroScheme)
// const usuarioParaInsertar = mongoose.model('usuarioParaInsertar', registroScheme)
const productos = mongoose.model('productos', productosScheme);
module.exports = productos;
module.exports = insertarProductos1;
