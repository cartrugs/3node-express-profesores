const mongoose = require('mongoose');

const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.URI_DB)
        console.log('Base de datos conectada');
    } catch (error) {
        console.log(error);
    }
}

/**
 * Exportación de dbConnect
 */
module.exports = {dbConnect};