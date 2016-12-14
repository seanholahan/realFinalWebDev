/**
 * Created by willqueen on 12/8/16.
module.exports = function() {
    var mongoose = require("mongoose");
    //var ProductSchema = require("../product/product.schema.server")
    var UserSchema = mongoose.Schema({
        _user: {type: mongoose.Schema.Types.ObjectId, ref:"UserModel"},
        username: {type: String, required: true},
        password: {type: String, required: true},
        passwordVerify: {type: String, required: true},
        firstName: String,
        email: String,
        //products: [{type: mongoose.Schema.Types.ObjectId, ref: 'ProductModel'}],
        dateCreated: {type: Date, default: (new Date()).getTime()}
    }, {collection: 'userrr'});

    return UserSchema;
}*/



module.exports = function () {
    var mongoose = require("mongoose");
    var UserSchema = mongoose.Schema({
        _user: {type: mongoose.Schema.Types.ObjectId, ref:"UserModel"},
        username: String,
        password: String,
        passwordVerify: String,
        first: String,
        last: String,
        email: String,
        products: [{type: mongoose.Schema.Types.ObjectId, ref: 'ProductModel'}],
        dateCreated: {type: Date, default: (new Date()).getTime()}
    }, {collection: 'user'});
    return UserSchema;
}