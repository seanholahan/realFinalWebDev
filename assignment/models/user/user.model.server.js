module.exports = function() {
    var model = {};
    var mongoose = require("mongoose");
    var UserSchema = require("./user.schema.server.js")();
    var UserModel = mongoose.model("UserModel", UserSchema);

    var api = {
        createUser: createUser,
        setModel: setModel,
        findUserById: findUserById,
        findUserByCredentials: findUserByCredentials,
        findProductsForUser: findProductsForUser,
        updateUser: updateUser,
        removeUser: removeUser

    };
    return api;




    function findProductsForUser(userId) {

        return UserModel
            .findById(userId)
            .populate("products", "name")
            .exec();
        // return UserModel.findById(userId)
    }

    function removeUser(userId) {
        return UserModel
            .remove({_id: userId});
    }

    function findUserByCredentials(username, password) {
        return UserModel.find({
            username: username,
            password: password
        });
    }

    function updateUser(userId, user) {
        console.log(userId, 'user Id ');
        console.log(user, "user");
        console.log("blowze");

        return UserModel
            .update(
                {_id: userId

                }, {
                    username: user.username,
                    first: user.first,
                    last: user.last,
                    email: user.email
                }
            );
            /*.update(
                {
                    _id: user._id
                },
                {
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email

                }
            );*/
    }

    function findUserById(userId) {
        // UserModel.find({_id: userId}) --> returns an array
        return UserModel.findById(userId);
    }

    function createUser(user) {
        console.log();
        console.log(user,"hai from the user model server");
        return UserModel.create(user);
    }

    function setModel(_model) {
        model = _model;
    }
};
