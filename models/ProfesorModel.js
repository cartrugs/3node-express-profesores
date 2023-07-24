const { Schema, model} = require('mongoose');

const profesorSchema = new Schema ({
    nombre: {
        type: String,
        require: true,
        unique: true
    },
    descripcion: {
        type: String,
        require: true
    }
})

module.exports = model('Profesor', profesorSchema);