module.exports = function () {
    var mongoose = require("mongoose");
    var ProductSchema = mongoose.Schema({
        _product: {type: mongoose.Schema.Types.ObjectId, ref:"ProductModel"},
        title: String,
        size: String /*{type: String, enum:["small","medium", "large"]}*/,
        price: Number,
        description: String,
        imageUrl: String,
        dateCreated: {type: Date, default: (new Date()).getTime()}
    }, {collection: 'product'});
    return ProductSchema;
}