var groceries = require('../models/groceries');
// List of all groceries
exports.groceries_list = function(req, res) {
res.send('NOT IMPLEMENTED: groceries list');
};
// for a specific groceries.
exports.groceries_detail = function(req, res) {
res.send('NOT IMPLEMENTED: groceries detail: ' + req.params.id);
};
// Handle groceries create on POST.
exports.groceries_create_post = async function(req, res) {
    console.log(req.body)
let document = new groceries();
// We are looking for a body, since POST does not have query parameters.
// Even though bodies can be in many different formats, we will be picky
// and require that it be a json object
// {"groceries_type":"goat", "cost":12, "size":"large"}
document.groceries_name = req.body.groceries_name;
document.groceries_quantity = req.body.groceries_quantity;
document.groceries_cost = req.body.groceries_cost;
try{
    let result = await document.save();
    res.send(result);
}
catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
}
};
// Handle groceries delete form on DELETE.
exports.groceries_delete = function(req, res) {
res.send('NOT IMPLEMENTED: groceries delete DELETE ' + req.params.id);
};
// Handle groceries update form on PUT.
exports.groceries_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: groceries update PUT' + req.params.id);
};

exports.groceries_list = async function(req, res) {
    try{
    thegroceries = await groceries.find();
    res.send(thegroceries);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };

    exports.groceries_view_all_Page = async function(req, res) {
        try{
        thegroceries = await groceries.find();
        res.render('groceries', { title: 'groceries Search Results', DBresults: thegroceries });
        }
        catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
        }
        };