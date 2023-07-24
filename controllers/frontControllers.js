/**
 * Método para usar el modelo de la base de datos.
 */
const Curso = require('../models/CursoModel');
const Instalacion = require('../models/InstalacionModel');
const Profesor = require('../models/ProfesorModel');

/**
 * Método de controlador para index.
 * */
const getIndex = (req, res) => {
  res.render('index');
};

/**
 * Método de controlador para cursos con función asíncrona.
 * */
const getCursos = async (req, res) => {
  
  try {
    /**
     * Realizar una consulta a la base de datos utilizando el modelo Curso.
     * El método find() busca todos los documentos en la colección asociada al modelo Curso.
     * Esta consulta devuelve una promesa que se resuelve con una lista de documentos que coinciden con los criterios de búsqueda.
     */
    const cursos = await Curso.find();

    /**
     * Utilizar el método res.render() para renderizar una vista llamada 'cursos'.
     * El objeto que se pasa como segundo argumento a res.render() contiene los datos que se usarán en la vista.
     * En este caso, se pasan dos datos: 'titulo' y 'cursos'.
     * 'titulo': 'cursos' establece el título que se mostrará en la vista.
     * 'cursos': cursos pasa la lista de cursos obtenida de la base de datos.
     * La variable cursos contiene la lista de documentos devueltos por la consulta Curso.find().
     */
    res.render('cursos', {
      titulo: 'cursos',
      cursos

    })
  
  /**
   *Capturar y manejar posibles errores que puedan ocurrir durante la ejecución de la consulta o el renderizado de la vista. 
   */  
  } catch (error) {
    console.log(error)
  }
};

/**
 * Método controlador para profesores con función asíncrona.
 */
const getProfesores = async (req, res) => {

  /**
   * Dentro del bloque try, se realiza una consulta a la base de datos utilizando el modelo Profesor. El método find() se utiliza para buscar todos los documentos en la colección asociada al modelo Profesor. Esta consulta devuelve una promesa que se resuelve con una lista de documentos que coinciden con los criterios de búsqueda.
   */
  try {
    /**
     * Al utilizar await antes de Profesor.find(), la ejecución de la función getProfesores se pausará hasta que la promesa se resuelva con el resultado de la consulta.
     */
    const profesores = await Profesor.find();

    /**
     * Se utiliza el método res.render() para renderizar una vista llamada 'profesores'.
     * El objeto que se pasa como segundo argumento a res.render() contiene los datos que se usarán en la vista. En este caso, se pasan dos datos: 'titulo' y 'profesores'. 'titulo': 'profesores' establece el título que se mostrará en la vista y 'profesores': profesores pasa la lista de profesores obtenida de la base de datos. La variable profesores contiene la lista de documentos devueltos por la consulta Profesor.find()
     */
    res.render('profesores', {
      titulo: 'profesores',
      profesores

    })
    
  /**
   * catch(): Si ocurre algún error en la ejecución de la consulta o el renderizado de la vista, el bloque catch capturará el error y lo mostrará en la consola mediante console.log(error)
   */
  } catch (error) {
    console.log(error)
  }
};

/**
 * Método controlador para profesores con función asíncrona.
 */
const getInstalaciones = async (req, res) => {

  try {
    /**
     * Realizar una consulta a la base de datos utilizando el modelo Instalacion.
     * El método find() busca todos los documentos en la colección asociada al modelo Instalacion.
     * Esta consulta devuelve una promesa que se resuelve con una lista de documentos que coinciden con los criterios de búsqueda
     */
    const instalaciones = await Instalacion.find();

    /**
     * Utilizar el método res.render() para renderizar una vista llamada 'instalaciones'.
     * El objeto que se pasa como segundo argumento a res.render() contiene los datos que se usarán en la vista.
     * En este caso, se pasan dos datos: 'titulo' e 'instalaciones'.
     * 'titulo': 'instalaciones' establece el título que se mostrará en la vista.
     * 'instalaciones': instalaciones pasa la lista de instalaciones obtenida de la base de datos.
     * La variable instalaciones contiene la lista de documentos devueltos por la consulta Instalacion.find().
     */
    res.render('instalaciones', {
      
      titulo: 'instalaciones',
      instalaciones
    })

  /**
   * Capturar y manejar posibles errores que puedan ocurrir durante la ejecución de la consulta o el renderizado de la vista.
   */  
  } catch (error) {
    console.log(error)
  }
};

/**
 * Método controlador para contacto.
 */
const getContacto = (req, res) => {
  res.render('contacto')
}

module.exports = {
  getIndex,
  getCursos,
  getProfesores,
  getInstalaciones,
  getContacto
};
