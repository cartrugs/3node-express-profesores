/**
 * Método de controlador para index
 * */
const getIndex = (req, res) => {
  res.render('index');
};

/**
 * Método de controlador para cursos
 * */
const getCursos = (req, res) => {
  res.render('cursos', {
    titulo: 'cursos',
    tipo: [
      {
        numero: 'animación',
      },
      {
        numero: 'fotografía',
      },
      {
        numero: 'música',
      },
      {
        numero: 'dirección',
      },
      {
        numero: 'script',
      },
      {
        numero: 'iluminación',
      },
      {
        numero: 'producción',
      },
    ],
  });
};

/**
 * Método controlador para profesores
 */
const getProfesores = (req, res) => {
  res.render('profesores', {
    titular: 'profesores',
    datosProfesores: [
      {
        url: 'profesor1.jpeg',
        alt: 'profesor 1',
        titulo: 'Koro-sensei',
        descripcion: 'Antihéroe extraterrestre, responsable de la destrucción del 70% de la Luna y planea destruir la Tierra'
      },
      {
        url: 'profesor2.jpg',
        alt: 'profesor 2',
        titulo: 'Edna Krabappel',
        descripcion: 'A pesar de ser profesora de Bart no se rinde'
      },
      {
        url: 'profesor3.gif',
        alt: 'profesor 3',
        titulo: 'Miss Simian',
        descripcion: 'Profesora desde hace miles de años(prehistoria), malhumorada y que disfruta con el sufrimiento ajeno'
      }
    ]
  });
};

/**
 * Método controlador para profesores
 */
const getInstalaciones = (req, res) => {
  res.render('instalaciones', {
    titular: 'instalaciones',
    galeriaInstalaciones: [
      {
        url: 'imagen1.jpg',
        alt: 'Imagen 1'
      },
      {
        url: 'imagen2.jpg',
        alt: 'Imagen 2'
      },
      {
        url: 'imagen3.jpg',
        alt: 'Imagen 3'
      },
      {
        url: 'imagen4.jpg',
        alt: 'Imagen 4'
      },
      {
        url: 'imagen5.jpg',
        alt: 'Imagen 5'
      },
      {
        url: 'imagen6.jpg',
        alt: 'Imagen 6'
      }
    ]
  });
};

/**
 * Método controlador para contacto
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
