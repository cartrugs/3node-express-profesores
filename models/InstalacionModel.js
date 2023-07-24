/**
 * Importación funcionalidad necesaria biblioteca mongoose
 */
const { Schema, model } = require('mongoose');

/**
 * Creación esquema instalacioSchema. Cada clave dentro del objeto instalacionSchema representa un campo que tendrá cada documento del modelo 'Instalaciones'
 */
const instalacionSchema = new Schema ({

    url: {
        type: String,
        require: true
    },
    alt: {
        type: String,
        require: true
    },
    zona: {
        type: String,
    }

});

/**
 * Exportación del modelo 'Instalaciones'
 */
module.exports = model('Instalaciones', instalacionSchema); //¿Plural?