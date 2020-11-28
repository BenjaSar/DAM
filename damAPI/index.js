var express = require ('express');
var app = express();
var port = 3000;

//Cors: Mecanismo que usa las cabeceras HTTP 
//Useragent: Quien ejectua la request

//Se instala desde nuestra API :
//npm install --save cors
var cors = require('cors');

//Para permitir que determinados origenes accedan a los recursos
//Cors: permite ejectuar consultas
var corsOption = {origin: '*', optionSuccesStatus: 200};
//Middleware de terceros
app.use(cors(corsOption));

var dispositivo = require('./routes/dispositivo');
var usuario = require('./routes/usuario');

//Middleware
//Parametros del middleware :
//* Path (endpoint)
//* 
app.use('/api/dispositivo', dispositivo);
app.use('/api/usuario', usuario)


app.listen(port, function(req, res){

    console.log("La api se encuentra levantada en el 3211")
})