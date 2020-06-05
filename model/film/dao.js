import connection from '../../db.js'

class FilmDAO {

    constructor() {
        //conexión a la bbdd
    }

    list() {
        return new Promise((resolve, reject) => {
            connection.query('SELECT * FROM mymovies.pelicula', function (err, rows, fields) {
                if (err)
                    throw err; 1
                console.log(rows);
                resolve(rows);
            });
        });
    }

    create(film) {

        return new Promise((resolve, reject) => {

            connection.query('INSERT INTO pelicula (titulo) VALUES (?)', film.titulo,
                function (err, rows, fields) {

                    if (err)
                        console.log(err);


                    console.log(rows);

                    resolve(rows);

                });
        });
    }

    listOne(id) {

        console.log("Buscando ID " + id);

        return new Promise((resolve, reject) => {
            connection.query('SELECT * FROM pelicula WHERE id = ?', id,
                function (err, rows, fields) {
                    if (err)
                        console.log(err);
                    // console.log(rows);
                    resolve(rows);
                });
        });

        //return films.find(element => element.id===id);

    }
    listOneByTitle(titleToken) {

        return new Promise((resolve, reject) => {
            connection.query("SELECT * FROM pelicula WHERE titulo LIKE '%" + titleToken + "%'",
                function (err, rows, fields) {
                    if (err)
                        console.log(err);

                    console.log(rows);
                    resolve(rows);

                });
        });

    }

    listOneByTitleComplex(titleToken) { }






    listActor(pId) {
        return new Promise((resolve, reject) => {
            connection.query(`SELECT pelicula.titulo, actor.nombre, actor.apellidos 
                            FROM pelicula_actor 
                            INNER JOIN pelicula ON (pelicula_actor.pelicula_id = pelicula.id)
                            INNER JOIN actor ON (pelicula_actor.actor_id = actor.id)
                            WHERE pelicula.id = ?`, pId,
                function (err, rows, fields) {
                    if (err)
                        console.log(err);

                    console.log(rows);
                    resolve(rows);

                });
        });
    }
}

export default new FilmDAO();



