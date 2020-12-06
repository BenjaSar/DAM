//Contiene todos los endpoints de dispositivos
var express = require('express');
var routerDispositivo = express.Router();
var mysql =  require('../../mysql');

//Get '/' : muestra la lista de objetos dispositivos
routerDispositivo.get('/', function (req, res) {
    mysql.query('Select * from Dispositivos', function (err, result) {
        if(err){
            res.send(err);
        }
        res.send(result);
    });
});

//Se obtiene un objeto con id
routerDispositivo.get('/:id', function (req, res) {
    res.send("Dispositivos" + req.params.id)
});

//Middleware direccionador
// Se crea un archivo de direccionador en el directorio de la aplicacion
//Luego se carga como un modulo dentro del index.js (punto de entrada de la api) de la aplicacion 
//Post => Insert de dispositivos
//'/' Rutas relativas al path de punto de entrada de la aplicaación app.use por ejemplo ('./api/dispositivo',  dispositivo )
routerDispositivo.post('/', function (req, res) {
    res.send("Insert dispositivo");

})
//Se pone a disposición la variable routerDispositivo
module.exports =  routerDispositivo;  //Se pone a disposición la variable routerDispositivo

