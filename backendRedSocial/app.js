/* Fichero de configuracion de Express */

'use sctrict'

var express = require('express');
var bodyParser = require('body-parser');

/* Cargamos el framework express */
var app = express();

/* Cargar rutas */

/* Middlewares */
// Middleware para transformar los json recibidos en las peticiones por objetos.
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

/* Cors */

/* Rutas */
app.get('/', (req, res) => {
    res.status(200).send({
        message: 'Acción de pruebas en el servidor de red social'
    });
});

/* Exportar */
module.exports = app;
