import Router from 'express';
import list from '../controller/film/list.js';
import listOne from '../controller/film/listOne.js';
import listOneByTitle from '../controller/film/listOneByTitle.js';
import listActor from '../controller/film/listActor.js'
import listOneByTitleComplex from '../controller/film/listOneByTitleComplex.js';
/*import create    from '../controller/film/create.js';
import updateOne from '../controller/film/updateOne.js.js.js';
import removeOne from '../controller/film/removeOne.js.js.js';
import listActor from '../controller/film/listActor.js.js.js';
 */

const router = Router();

router.route('/')
       .get(list)
// .post(create);

router.route('/id/:id')
       .get(listOne)
//       .update(updateOne)
//       .remove(removeOne);
/* router.route('/title')
       .post(listOneByTitleComplex);
 */
router.route('/title/:title')
       .get(listOneByTitle);


router.route('/actor/:id')
       .get(listActor);



// router.route('/:id/actors')
//       .get(listActor);

// router.get('/',list);
// router.post('/', create);

/* router.get('/:id',listOne);
router.update('/:id',updateOne);
router.remove('/:id',removeOne);
 */


export default router;