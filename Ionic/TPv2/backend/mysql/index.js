var mysql = require('mysql');

var configMysql = {
    //Se obtiene una nueva conexión siempre y cuando no se esté utilizando
    connectionLimit: 10,  //Limite máximo de conexiones simultaneas
    host     : 'mysql-server', //con docker-compose
    //host:      '127.0.0.1', //Para implementar con dockercompose usar esta direccion
    port     : '3306',
    user     : 'root',
    password : 'userpass',
    database : 'DAM'
};

var pool = mysql.createPool(configMysql);
//Probamos la conexion al pool
pool.getConnection((err, connection) => {
if(err){

    switch(err.code){
        case 'PROTOCOL_CONNECTION_LOST':
            console.log("La conexion a la base de datos se cerro");
            break;
        case 'ERR_CON_COUNT_ERROR':
            console.log("La base de datos tiene muchas conexiones");
            break;
        case 'ECONNREFUSED':
            console.log("Error de conexión en la base de datos, user o password, fue rechazado.")
            break;
    }

    if(connection){
	console.log("Estoy conectado");
        connection.release();
    }
    return;
}
//npm i --save mysql
});

//=======[ Main module code ]==================================================

//Los codigos de consulta se pueden hacer en el index.js de cada route(dispositivo, usuario)

module.exports = pool;

//=======[ End of file ]=======================================================
//docker run -p 3306 --name mysql-server -e MYSQL_ROOT_PASSWORD=password -d mysql:5.7
//systemctl restart docker.service
