import directorDAO from '../../model/director/dao.js'

const list = async (req, res) => {

    try {
        const directors = await directorDAO.list();

        return res.json(directors);

    } catch (error) {
        console.log(error.message);
    }

}


export default list;