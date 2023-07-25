/**
 * Importación funcionalidad necesaria biblioteca mongoose
 */
const { Schema, model } = require('mongoose');

/**
 * Creación esquema instalacioSchema. Cada clave dentro del objeto instalacionSchema representa un campo que tendrá cada documento del modelo 'Instalaciones'
 */
const instalacionSchema = new Schema ({

    titulo: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    alt: {
        type: String,
        required: true
    },
    zona: {
        type: String,
    }

});

/**
 * Exportación del modelo 'Instalaciones'
 */
module.exports = model('Instalation', instalacionSchema); //¿Plural?