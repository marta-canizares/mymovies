import actorDAO from '../../model/actor/dao.js'

const listOneByName =

    async (req, res) => {

        try {
            console.log(req.params.nombre);

            if (!req.params.nombre) {
                res.sendStatus(400);
            } else {
                const actors = await actorDAO.listOneByName(req.params.nombre);
                console.log(actors);
                res.json(actors);
            }


        } catch (error) {


        }
    }


export default listOneByName;