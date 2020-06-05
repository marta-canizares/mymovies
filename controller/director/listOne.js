import directorDAO from '../../model/director/dao.js'

const listOne =

    async (req, res) => {

        try {

            if (!req.params.id) {
                res.sendStatus(400);
            } else {

                const director = await directorDAO.listOne(Number(req.params.id));
                // console.log(film);
                res.json(director);
            }
            // Hace la llamada al módulo que se conecta a la bbdd


        } catch (error) {


        }
    }


export default listOne;