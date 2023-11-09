var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var groceries_controller = require('../controllers/groceries');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// groceries ROUTES ///
// POST request for creating a groceries.
router.post('/groceries', groceries_controller.groceries_create_post);
// DELETE request to delete groceries.
router.delete('/groceries/:id', groceries_controller.groceries_delete);
// PUT request to update groceries.
router.put('/groceries/:id', groceries_controller.groceries_update_put);
// GET request for one groceries.
router.get('/groceries/:id', groceries_controller.groceries_detail);
// GET request for list of all groceries items.
router.get('/groceries', groceries_controller.groceries_list);
module.exports = router;