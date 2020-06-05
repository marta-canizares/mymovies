import filmDAO from '../../model/film/dao.js';

const listActor =

    async (req, res) => {

        try {
            if (!req.params.id) {
                res.sendStatus(400);
            } else {

                const film = await filmDAO.listActor(Number(req.params.id));
                // console.log(film);
                res.json(film);
            }

        } catch (error) {

        }
    }


export default listActor;