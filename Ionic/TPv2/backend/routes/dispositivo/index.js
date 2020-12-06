//Contiene todos los endpoints de dispositivos
var express = require('express');
var routerDispositivo = express.Router();
var mysql =  require('../../mysql');

//Get '/' : muestra la lista de objetos dispositivos
routerDispositivo.get('/:id', function (req, res) {
    mysql.query('Select * from Dispositivos where dispositivoId=? order by fecha desc', [req.params.id],function (err, result) {
        if(err){
            res.send(err).status(400);
        }
        res.send(result[0]);
    });
});

//Se obtiene un objeto con id
routerDispositivo.get('/:id', function (req, res) {
    pool.query('Select * from Mediciones where dispositivoId=? order by fecha desc', [req.params.idDispositivo], function(err, result, fields) {
        if (err) {
            res.send(err).status(400);
            return;
        }
        res.send(result);
    });
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

