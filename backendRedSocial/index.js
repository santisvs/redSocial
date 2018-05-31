/* Fichero principal del backend
 * Realizar la conexion a mongoDB
 * Crear un servidor con nodeJs
 */
 'use strict'

 /* Cargamos el modulo mongoose */
 var mongoose = require('mongoose');
 /* Cargamos el modulo app creado en app.js donde tenemos
  * toda la configuración de express
  */
 var app = require('./app');

 var port = 3800;

 /* Mediante promesa generamos la conexion a MongoDB */
 mongoose.Promise = global.Promise;
 mongoose.connect('mongodb://localhost:27017/red_social_mean')
      .then(() => {
        console.log("La conexión a la base de datos red_social_mean se ha realizado correctamente");

        // Creamos el servidor tras conectarnos a BD
        app.listen(port, () => {
            console.log("Servidor corriendo en http://localhost:" + port);
        });
      })
      .catch(err => console.log(err));
