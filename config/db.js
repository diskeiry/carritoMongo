const mongoose = require('mongoose');
const BD_URI = 'mongodb://localhost:27017/Empresadb';

const connectDB = async () => {
    try {
        await mongoose.connect(BD_URI);
        console.log('CONEXION CORRECTA A LA DB');
    } catch (err) {
        console.error('Error al conectar la base de datos', err);
        process.exit(1); // Salir del proceso con error
    }
};

module.exports = connectDB;
