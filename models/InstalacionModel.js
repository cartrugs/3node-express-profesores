const { Schema, model } = require('mongoose');

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

module.exports = model('Instalaciones', instalacionSchema);