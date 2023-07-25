/**
 * Importación funcionalidad necesaria biblioteca mongoose
 */
const { Schema, model} = require('mongoose');

/**
 * Creación esquema homerSchema. Cada clave dentro del objeto homeSchema representa un campo que tendrá cada documento del modelo 'Home'
 */
const homeSchema = new Schema({

    url: {
        type: String,
        required: true,
    },
    alt: {
        type: String,
        required: true
    },
    texto: {
        type: String
    }
    
});

/**
 * Exportación del modelo 'Proffesor' a la base de datos.
 */
module.exports = model('Home', homeSchema);