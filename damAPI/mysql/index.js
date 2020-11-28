//Tipos de separacion:
//* Por rutas
//* Por controladores
//* Por conexion a base de datos

//=======[ Settings, Imports & Data ]==========================================

var mysql = require('mysql');

var configMysql = {
    //Se obtiene una nueva conexión siembre y cuando no se esté utilizando
    connectionLimit: 10,  //Limite máximo de conexiones simultaneas
    //host     : 'mysql-server',
    host: '127.0.0.1', //Para implementar con dockercompose usar esta direccion
    port     : '3306',
    user     : 'root',
    password : 'userpass',
    database : 'smart_home'
};



var pool = mysql.createPool( configMysql);
pool.getConnection((err, connection) => {
if(err){

    switch(err.code){
        case 'PROTOCOL_CONNECTION_LOST':
            console.log("La conexion a la base de datos se cerro");
            break;
        case 'ERR_CON_COUNT_ERROR':
            console.log("La base de datos tiene muchas conexiones");
        case 'ECONNREFUSED':
            console.log("Conexion error en la base de datos, use o pass")

    }

    if(connection){
        connection.release();
    }
}

//npm i --save mysql
});

//=======[ Main module code ]==================================================

/*connection.connect(function(err) {
    if (err) {
        console.error('Error while connect to DB: ' + err.stack);
        return;
    }
    console.log('Connected to DB under thread ID: ' + connection.threadId);
});*/

module.exports = pool;

//=======[ End of file ]=======================================================