var express = require('express');
var router = express.Router();
const groceries_controllers = require('../controllers/groceries')
const passport = require('passport');
// A little function to check if we have an authorized user and continue on
//or
// redirect to login.
const secured = (req, res, next) => {
if (req.user){
return next();
}
res.redirect("/login");
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('groceries', { title: 'Search Result groceries' });
});

/* GET detail groceries page */
router.get('/detail',secured, groceries_controllers.groceries_view_one_Page);

/* GET create groceries page */
router.get('/create',secured, groceries_controllers.groceries_create_post);

/* GET create update page */
router.get('/update',secured, groceries_controllers.groceries_update_Page);

/* GET delete groceries page */
router.get('/delete', groceries_controllers.groceries_delete_Page);



module.exports = router;
