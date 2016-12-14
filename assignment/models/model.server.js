
module.exports = function () {
    //var mongoose = require('mongoose');
    //mongoose.createConnection('mongodb://localhost/webDevStitch');

    var userModel = require("./user/user.model.server.js")();
    var productModel = require("./products/product.model.server.js")();

    var model = {
        userModel: userModel,
        productModel: productModel
    };

    userModel.setModel(model);
    productModel.setModel(model);

    return model;
};


