import Router from 'express';
import list from '../controller/director/list.js';
import listOne from '../controller/director/listOne.js';
import listOneByName from '../controller/director/listOneByName';
// import create    from '../controllers/director/create.js';
// import updateOne from '../controllers/director/updateOne.js';
// import removeOne from '../controllers/director/removeOne.js';



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


export default router;