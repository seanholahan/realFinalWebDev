module.exports = function(app, model, $routeParams) {

    var multer = require('multer');
    var upload = multer({dest: __dirname + '/../../public/uploads'});

    app.post('/api/product', createProduct);
    app.get('/api/product', findProductsForUser);
    app.get("/api/product/:pid", findProductById);
    app.post("/api/upload",upload.single('myFile'),  uploadImage);
    app.delete("/api/product/:pid", removeProduct);
    app.put("/api/product/:pid", updateProduct);
    app.get("/api/productSmall", findProductsSmall);
    app.get("/api/productMedium", findProductsMedium);
    app.get("/api/productLarge", findProductsLarge);


    function uploadImage(req, res) {
        var width = req.body.width;
        var productId = req.body.productId;
        var myFile = req.file;

        var mimetype = myFile.mimetype;
        var originalName = myFile.originalname;
        var fileName = myFile.filename+"."+mimetype;
        var path = myFile.path;
        var destination = myFile.destination;
        var size = myFile.size;


        console.log("ys1!!", req.body);
        res.send(myFile);
    }

    function removeProduct(req, res) {
        var pid = req.params.pid;
        console.log(req.params, "removeProduct");
        model
            .productModel
            .removeProduct(pid)
            .then(
                function (status) {
                    res.sendStatus(200);
                },
                function (error) {
                    res.sendStatus(400).send(error);
                }
            )


    }

    function updateProduct(req,res) {
        var product = req.body;
        var pid = req.body._id;
        console.log(req.param, "yolo");
        console.log(pid, "yolo");

        model
            .productModel
            .updateProduct(pid, product)
            .then(
                function(status) {
                    res.sendStatus(200);
                },
                function (error) {
                    res.sendStatus(400).send(error);
                }
            )
    }




    function findProductById(req, res) {
       var productId = req.params.pid;
        console.log("got to ", productId);
        model.productModel
            .findProductById(productId)
            .then(function(product){
                res.json(product);
            });
    }

    function findProductsSmall(req, res) {
        model.productModel
            .findSmallProducts()
            .then(function(products){
                res.json(products)
            })
    }

    function findProductsMedium(req, res) {
        model.productModel
            .findMediumProducts()
            .then(function(products){
                res.json(products)
            })
    }

    function findProductsLarge(req, res) {
        model.productModel
            .findLargeProducts()
            .then(function(products){
                res.json(products)
            })
    }


    function findProductsForUser(req, res) {
        console.log("got to findProducts");
        model.productModel
            .findAllProductsForUser()
            .then(function(products){
                res.json(products);
            });
    }

    function createProduct(req, res) {
        /*var product = {
            title: "YOLO",
            price: 22,
            size: "URGGG"
        };*/

        var product = req.body;

        //console.log("yo)))!", req);
        console.log("yo)))!", product);
        console.log(model);
        console.log(model.productModel);


         model
            .productModel
            .createProduct(product)
            .then(
        function(newProduct) {
            res.send(newProduct);
        });
   // return res.send(0);

    }

};



