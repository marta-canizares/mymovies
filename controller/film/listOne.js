import filmDAO from '../../model/film/dao.js';

const listOne =

    async (req, res) => {

        try {

            if (!req.params.id) {
                res.sendStatus(400);
            } else {

                const film = await filmDAO.listOne(Number(req.params.id));
                // console.log(film);
                res.json(film);
            }
            // Hace la llamada al módulo que se conecta a la bbdd


        } catch (error) {


        }
    }


export default listOne;