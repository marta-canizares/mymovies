import filmDAO from '../../model/film/dao.js';

const listOneByTitle = 

   async (req, res) => {

        try {
            console.log(req.params.title);

            if (!req.params.title) {
                res.sendStatus(400);
            } else {

                //const title = req.body.title.split('')

                

                const films =  await filmDAO.listOneByTitle(req.params.title);
                console.log(films);
                res.json(films);
            }
            // Hace la llamada al módulo que se conecta a la bbdd


        } catch (error) {


        }
    }
    

export default listOneByTitle;