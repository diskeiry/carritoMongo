const { request, response } = require('express');
const productos = require('../models/productos');
const insertarProductos1 = require('../models/productos')
let listaDB = [];




const getAllProductos = async(req = request, res = response) => {
    try {
        const respuesta = req.body
        respuesta.forEach(element => {
            listaDB.push(element)
        });
        //Aqui llegando los productos desde el carrito..
        await productos.insertMany(respuesta);
        // console.log(req.body)
        console.log(respuesta)
        // console.log(listaDB);   
    } catch (error) {
        res.status(500).json({
            msg: 'Error en el servidor'
        })
    }

}

const recibido = async(req = request, res = response) => {
    // const query = 'Aqui se esta ejecuntando el codigo de la base de dato'
    try {

        res.json(listaDB)
    } catch (error) {
        res.status(500).json({
            msg: 'Error en el servidor'
        })
    }

}


// Función para consultar y devolver todos los productos desde MongoDB
const consultarProductos = async (req = request, res = response) => {
    try {
        const respuesta = await productos.find();

        res.json(respuesta); // Devolver los productos como respuesta JSON
    } catch (error) {
        console.error('Error al consultar productos en MongoDB:', error);
        res.status(500).json({ msg: 'Error en el servidor' });
    }
};

///funcion para guardar usuarios en mongo db
///Se crea un funcion async que tenga (req,res)
//dentro tendra los objetos que van a identificar los respectivos campos
// y retorna la respuesta
const Productos1 = async (req = request, res = response) => {
    try {
 const { nombre, apellido, edad, fechaNacimiento } = req.body;
       
  // Verificar si todos los campos requeridos están presentes
  if (!nombre || !apellido || !edad || !fechaNacimiento) {
    return res.send({ status: "Error", message: "Los campos del input están incompletos" });
        }
        
 // Crear el documento a insertar
        const nuevoProducto = new insertarProductos1({
            nombre: String(nombre),
            apellido: String(apellido),
            edad: parseInt(edad), // Asegurarse de convertir a entero si es necesario
            fechaNacimiento: Date(fechaNacimiento)
        });
        // console.log(typeof fechaNacimiento)
   // Guardar el nuevo producto en la base de datos
    await nuevoProducto.save();
        console.log(nuevoProducto);
    //retorne la respuesta con status(201) que es un 'ok', y luego envie los datos en el array ya creado desde el principio.
     ///agrege un redirect: para que me mantuviera la pagina en el mismo registro
  return res.status(201).send({ redirect: "/" });
    } catch (error) {
        console.error('Error al consultar Usuario en MongoDB:', error);
        res.status(500).json({ msg: 'Error en el servidor' });
    }
};

module.exports = {
    consultarProductos,
    getAllProductos,
    recibido,
    Productos1
};
