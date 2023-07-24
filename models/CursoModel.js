const { Schema, model } = require('mongoose');

const cursoSchema = new Schema({
    nombre: {
        type: String,
        require: true,
        unique: true
    },
    duracion: {
        type: String,
        require: true
    },
    precio: {
        type: Number,
    }
});

module.exports = model('Curso', cursoSchema);