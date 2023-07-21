/**
 * Importar la librería
 */
const express = require('express');

/**
 * Llamar a la clase Router de express
 */
const router = express.Router();

/**
 * Desestructurar. (../)para ir a la carpeta controllers (/)para ir al archivo dentro de la carpeta
 */
const {getIndex, getCursos, getProfesores, getInstalaciones, getContacto} = require('../controllers/frontControllers');

/**
 * Funciones método controlador
 */
router.get('/', getIndex);

router.get('/cursos', getCursos);

router.get('/profesores', getProfesores);

router.get('/instalaciones', getInstalaciones);

router.get('/contacto', getContacto)



module.exports = router;