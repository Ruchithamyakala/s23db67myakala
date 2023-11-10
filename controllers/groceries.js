var groceries = require('../models/groceries');
// List of all groceries
exports.groceries_list = function(req, res) {
res.send('NOT IMPLEMENTED: groceries list');
};
// for a specific groceries.
exports.groceries_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await groceries.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
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
exports.groceries_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body
    ${JSON.stringify(req.body)}`)
    try {
    let toUpdate = await groceries.findById( req.params.id)
    // Do updates of properties
    if(req.body.groceries_name)
    toUpdate.groceries_name = req.body.groceries_name;
    if(req.body.groceries_quantity) toUpdate.groceries_quantity = req.body.groceries_quantity;
    if(req.body.groceries_cost) toUpdate.groceries_cost = req.body.groceries_cost;
    let result = await toUpdate.save();
    console.log("Sucess " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": ${err}: Update for id ${req.params.id}
    failed`);
    }
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