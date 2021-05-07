const { application } = require('express');
const ProductController = require('../controllers/product.controller');
module.exports = function(app){
    app.get('/api', ProductController.index);
    app.post('/api/create', ProductController.createProduct);
}