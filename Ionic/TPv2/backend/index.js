var express = require ('express');
var app = express();
var port = 3000;

//Cors: Mecanismo que usa las cabeceras HTTP 
//Useragent: Quien ejectua la request

//Se instala desde nuestra API :
//npm install --save cors
var cors = require('cors');

//Para permitir que determinados origenes accedan a los recursos
//Cors: permite ejectuar request desde diferentes origenes
//Primero hay que instalar cors a través de:
// npm install --save cors
// con * permito todo
var corsOption = {origin: '*', optionSuccesStatus: 200};

//Middleware de terceros
app.use(cors(corsOption));

var dispositivo = require('./routes/dispositivo');
var usuario = require('./routes/usuario');
var medicion = require('./routes/medicion');
var logriego = require('./routes/logriego');


//Middlewares:
app.use(express.json());
app.use('/api/dispositivo', dispositivo); //middleware
app.use('/api/usuario', usuario) //middleware
app.use('/api/medicion', medicion) //middleware
app.use('/api/riego', logriego) //middleware

app.listen(port, function(req, res){
    console.log("La api se encuentra levantada en el puerto 8000")
});
