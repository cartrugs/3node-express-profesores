/**
 * Importar la librería
 */
const express = require('express');

/**
 * Importar el módulo de mongoose en app.js {desetructuración}
 */
const {dbConnect} = require('./utils/connection');
require('dotenv').config()

/**
 * Se utiliza express
 */
const app = express();

const port = process.env.PORT;

/**
 * establecer la carpeta estática
*/

app.use(express.static(__dirname + '/public'));

/**
 * configurar ingenieria plantilla
 */
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs')

/**
 * Invocación función dbConnect
 */
dbConnect()

/**
 * Enruta a frontRoutes
 */
app.use('/', require('./routes/frontRoutes'))

// app.use((req, res) => {
//     res.status(404).render('404', {
//         titulo: 'error 404'
//     })
// });

app.listen(port, () => {
    console.log(`Está a la escucha del puerto ${port}`)
});