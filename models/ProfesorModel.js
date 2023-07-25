/**
 * Importación funcionalidad necesaria biblioteca mongoose
 */
const { Schema, model} = require('mongoose');

/**
 * Creación esquema profesorSchema. Cada clave dentro del objeto profesorSchema representa un campo que tendrá cada documento del modelo 'Profesores'
 */
const profesorSchema = new Schema({

    url: {
        type: String,
        required: true,
    },
    alt: {
        type: String,
        required: true
    },
    nombre: {
        type: String,
        require: true,
    },
    descripcion: {
        type: String,
        require: true
    }
    
});

/**
 * Exportación del modelo 'Proffesor' a la base de datos.
 */
module.exports = model('Proffesor', profesorSchema); //¿Plural?