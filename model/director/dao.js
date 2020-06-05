import connection from '../../db.js'

class DirectorDAO {

    constructor() {
        //conexión a la bbdd
    }

    list() {
        return new Promise((resolve, reject) => {
            connection.query('SELECT * FROM mymovies.director', function (err, rows, fields) {
                if (err)
                    throw err; 1
                console.log(rows);
                resolve(rows);
            });
        });
    }

    create(director) {

    }


    listOne(id) {
        console.log("Buscando ID " + id);
        return new Promise((resolve, reject) => {
            connection.query('SELECT * FROM director WHERE id = ?', id,
                function (err, rows, fields) {
                    if (err)
                        console.log(err);

                    console.log(rows);
                    resolve(rows);
                });
        });
    }


    listOneByName(pName) {
        return new Promise((resolve, reject) => {
            connection.query("SELECT * FROM director WHERE nombre LIKE '%" + pName + "%'",
                function (err, rows, fields) {
                    if (err)
                        console.log(err);

                    console.log(rows);
                    resolve(rows);

                });
        });

    }



}

export default new DirectorDAO();

