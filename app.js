/**
 * Importar la librería
 */
const express = require('express');

/**
 * Se utiliza express
 */
const app = express();

const port = process.env.PORT || 3000;

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
 * Enruta a frontRoutes
 */
app.use('/', require('./routes/frontRoutes'))

app.use((req, res) => {
    res.status(404).render('404', {
        titulo: 'error 404'
    })
});

app.listen(port, () => {
    console.log(`Está a la escucha del puerto ${port}`)
});