import filmDAO from '../../model/film/dao.js';

const list = async (req, res) =>{

    try {
    // Hace la llamada al módulo que se conecta a la bbdd
        const films = await filmDAO.list();

        res.json(films);

    } catch (error){


    }
}

export default list;