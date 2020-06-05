import connection from '../../db.js'

class ActorDAO {
    constructor() {
        //conexión a la bbdd
    }
    list() {
        return new Promise((resolve, reject) => {
            connection.query('SELECT * FROM mymovies.actor', function (err, rows, fields) {
                if (err)
                    throw err; 1
                console.log(rows);
                resolve(rows);
            });
        });
    }
    create(actor) {
    }

    listOne(id) {
        console.log("Buscando ID " + id);
        return new Promise((resolve, reject) => {
            connection.query('SELECT * FROM actor WHERE id = ?', id,
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
            connection.query("SELECT * FROM actor WHERE nombre LIKE '%" + pName + "%'",
                function (err, rows, fields) {
                    if (err)
                        console.log(err);

                    console.log(rows);
                    resolve(rows);

                });
        });

    }


    listFilm(pId) {
        return new Promise((resolve, reject) => {
            connection.query(`SELECT pelicula.titulo, actor.nombre, actor.apellidos
                            FROM pelicula_actor 
                            INNER JOIN pelicula ON (pelicula_actor.pelicula_id = pelicula.id)
                            INNER JOIN actor ON (pelicula_actor.actor_id = actor.id)
                            WHERE actor.id = ?`, pId,
                function (err, rows, fields) {
                    if (err)
                        console.log(err);

                    console.log(rows);
                    resolve(rows);

                });
        });
    }





}


export default new ActorDAO();
