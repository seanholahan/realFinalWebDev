module.exports = function(app) {

    var model = require("./models/model.server.js")();
    require("./services/product.service.server.js")(app, model);
    require("./services/user.service.server.js")(app, model);
};