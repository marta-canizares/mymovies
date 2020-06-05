import mysql from 'mysql';

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'hr'
});

connection.connect();

/// QUERIES
// VISUALIZAR ALGO
connection.query('SELECT * FROM employees WHERE employee_id =?', 100, function (err, rows, fields) {

    if (err) {
        throw err;
    }
    console.log(rows)

})

// MODIFICAR ALGO
connection.query("UPDATE employees SET FIRST_NAME = ? WHERE employee_id =?", ['Stephen', 100], function (err, rows, fields) {

    if (err) {
        throw err;
    }
    console.log(rows)

})

// INSERTAR ALGO
connection.query("INSERT INTO employees (FIRST_NAME, LAST_NAME, EMAIL, HIRE_DATE,JOB_ID) VALUES(?,?,?,NOW(),?)",
    ["Michael", "Jackson", "MJ", "FI_ACCOUNT"], function (err, results) {

        if (err) {
            throw err;
        }
        // let ultimoId = results.insertId

    })

// ELIMINAR EMPLEADO 
connection.query("DELETE FROM employees WHERE employee_id=?", 0, function (err, results) {

    if (err) {
        throw err;
    }
    Console.log("Num rows affected" + results.affectedRows)

})

connection.end();

console.log('ha funcionado la conexion')






/*
EXPLICACIONES EXTRAS

    console.log('Query lista')
    console.log("Num registros:" + rows.length)
    console.log("Registros:");
     console.log(rows);

    rows.forEach(element => {
        console.log(element.FIRST_NAME + " " + element.LAST_NAME)
})
     console.log(ArrNames)

    console.log('Campos:', fields) // me da todas las columnas de la tabla
    */

