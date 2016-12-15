module.exports = function () {
    console.log('came into model');
    var model = {};
    var mongoose = require("mongoose");
    var ProductSchema = require("./product.schema.server.js")();
    var ProductModel = mongoose.model("ProductModel", ProductSchema);
    var api = {
        createProduct: createProduct,
        setModel: setModel,
        findAllProductsForUser: findAllProductsForUser,
        findProductById: findProductById,
        removeProduct: removeProduct,
        updateProduct: updateProduct,
        findSmallProducts: findSmallProducts,
        findMediumProducts: findMediumProducts,
        findLargeProducts: findLargeProducts,
        addToCart: addToCart

    };
    return api;

    function addToCart(product, userId) {


        return model.userModel
            .findUserById(userId)
            .then(function(userObj){
                console.log(userObj, "this is user");
                console.log(product,"hehehe");
                userObj.products.push(product);
                userObj.save();
            }, function(error){
                console.log(error);
            });
    }


    function removeProduct(productId) {
        return ProductModel.remove({_id: productId})

    }

    function updateProduct(productId, product) {



        return ProductModel
            .update(
                {
                    _id: productId
                }, {
                    title: product.title,
                    price: product.price,
                    size: product.size,
                    description: product.description
                }
                );

    }

    function findProductById(pid) {
        return ProductModel.findById(pid);

    }


    function findAllProductsForUser() {
        //console.log('FINDALLPRODUCTS FOR USER', db.product.find([1]));
        return ProductModel.find({});
    }


    function findSmallProducts() {
        return ProductModel.find({'size': 'Small'});
    }

    function findMediumProducts() {
        return ProductModel.find({'size': 'Medium'});
    }

    function findLargeProducts() {
        return ProductModel.find({'size': 'Large'});
    }

    function createProduct(product) {
        console.log("SWAGMASTER",product);

        return ProductModel.create(product);


            /*.then(function(productObj){
                model.productModel
                    .findUserById(userId)
                    .then(function(userObj){
                        userObj.websites.push(productObj);
                        websiteObj._user = userObj._id;
                        websiteObj.save();
                        userObj.save();
                    }, function(error){
                        console.log(error);
                    });
            });*/


    }

    function setModel(_model) {
        model = _model;
    }


};