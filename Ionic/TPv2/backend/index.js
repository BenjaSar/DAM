var express = require ('express');
var app = express();
var port = 3000;

var cors = require('cors');

var corsOption = {origin: '*', optionSuccesStatus: 200};

app.use(cors(corsOption));

var dispositivo = require('./routes/dispositivo');
var medicion = require('./routes/medicion');
var logriego = require('./routes/logriego');

app.use(express.json());
app.use('/api/dispositivo', dispositivo); //middleware
app.use('/api/medicion', medicion) //middleware
app.use('/api/riego', logriego) //middleware

app.listen(port, function(req, res){
    console.log("La api se encuentra levantada en el puerto 8000")
});
