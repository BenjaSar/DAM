var express = require('express');
var routerMedicion = express.Router();
var mysql =  require('../../mysql');

//Get '/' : muestra la lista de objetos dispositivos

//Metodo get que obtiene un objeto con id
routerMedicion.get('/:id', function (req, res) {
    res.send("Dispositivos" + req.params.id)
});

//Se pone a disposición la variable routerDispositivo
module.exports =  routerMedicion;  //Se pone a disposición la variable routerDispositivo
//Para cargar el middleware, se llama a app.use(), especificando la función.
