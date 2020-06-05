import mysql from 'mysql';


// Configurar conexión MySQL
let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'mymovies'
}
);

// Ejecutar conexión
connection.connect();

export default connection;
