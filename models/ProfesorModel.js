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
        require: true,
        unique: true
    },
    alt: {
        type: String,
        require: true
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
 * Exportación del modelo 'Profesores'
 */
module.exports = model('Profesores', profesorSchema);