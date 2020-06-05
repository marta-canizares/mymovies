import filmDAO from '../../model/film/dao.js';

const listOneByTitleComplex = 

   async (req, res) => {

        try {
            console.log(req.body.title);

            if (!req.body.title) {
                res.sendStatus(400);
            } else {

                //const title = req.body.title.split('')

                

                const films =  await filmDAO.listOneByTitleComplex(req.body.title.split(' '));
                console.log(films);
                res.json(films);
            }
            // Hace la llamada al módulo que se conecta a la bbdd


        } catch (error) {


        }
    }
    

export default listOneByTitleComplex;