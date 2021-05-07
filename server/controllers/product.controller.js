const  Product  = require('../models/Product.model');
module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}
    // The method below is new
module.exports.createProduct = (request, response) => {
        Product.create(request.body)
        .then(product => response.json(product))
        .catch(err => response.json(err));
}

