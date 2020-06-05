import directorDAO from '../../model/director/dao.js'

const listOneByName =

    async (req, res) => {

        try {
            console.log(req.params.nombre);

            if (!req.params.nombre) {
                res.sendStatus(400);
            } else {
                const directors = await directorDAO.listOneByName(req.params.nombre);
                console.log(directors);
                res.json(directors);
            }


        } catch (error) {


        }
    }


export default listOneByName;