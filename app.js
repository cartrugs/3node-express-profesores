const express = require('express');

const app = express();

const port = process.env.PORT || 3000;

// establecer la carpeta estática
app.use(express.static(__dirname + '/public'));

// configurar ingenieria plantilla
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index')
});

app.get('/cursos', (req, res) => {
    res.render('cursos')
});

app.get('/profesores', (req, res) => {
    res.render('profesores')
});

app.get('/instalaciones', (req, res) => {
    res.render('instalaciones')
});

app.get('/contacto', (req, res) => {
    res.render('contacto')
});

app.listen(port, () => {
    console.log(`Está a la escucha del puerto ${port}`)
});