var mysql = require('mysql');

var configMysql = {
    connectionLimit: 10,       //Limite máximo de conexiones simultaneas
    host     : 'mysql-server', 
    port     : '3306',
    user     : 'root',
    password : 'userpass',
    database : 'DAM'
};

var pool = mysql.createPool(configMysql);

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
});
module.exports = pool;

//=======[ End of file ]=======================================================
//docker run -p 3306 --name mysql-server -e MYSQL_ROOT_PASSWORD=password -d mysql:5.7
//systemctl restart docker.service
