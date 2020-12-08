var express = require('express');
var routerlogriego = express.Router();
var mysql =  require('../../mysql');

//Get '/' : muestra la lista de objetos dispositivos


//Metodo get que recibie un parametro id de electrovalvula y devuelve todos los valores de la tabla medicion para el Id dado
routerlogriego.get('/:idElectrovalvula', function (req, res) {
    mysql.query('Select * from logRiego where electrovalvulaId=? order by fecha desc', [req.params.id], function (err, result) {
        if(err){
            res.send(err).status(400);
        }
        res.send(result);
    });
});

//Se pone a disposición la variable routerDispositivo
module.exports =  routerlogriego;  //Se pone a disposición la variable routerDispositivo
//Para cargar el middleware, se llama a app.use(), especificando la función.
