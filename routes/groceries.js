var express = require('express');
var router = express.Router();
const groceries_controllers = require('../controllers/groceries')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('groceries', { title: 'Search Result groceries' });
});

/* GET detail groceries page */
router.get('/detail', groceries_controllers.groceries_view_one_Page);

/* GET create groceries page */
router.get('/create', groceries_controllers.groceries_create_post);

/* GET create update page */
router.get('/update', groceries_controllers.groceries_update_Page);

/* GET delete groceries page */
router.get('/delete', groceries_controllers.groceries_delete_Page);



module.exports = router;
