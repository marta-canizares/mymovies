import Router from 'express';
import list from '../controller/actor/list.js';
import listOne from '../controller/actor/listOne.js'
import listOneByName from '../controller/actor/listOneByName.js';
import listFilm from '../controller/actor/listFilm.js'
// import create    from '../controller/actor/create.js';
// import updateOne from '../controller/actor/updateOne.js';
// import removeOne from '../controller/actor/removeOne.js';



const router = Router();

router.route('/')
      .get(list)
// .post(create);

router.route('/id/:id')
      .get(listOne);
//       .update(updateOne)
//       .remove(removeOne);

router.route('/nombre/:nombre')
      .get(listOneByName);


router.route('/film/:id')
      .get(listFilm);

export default router;