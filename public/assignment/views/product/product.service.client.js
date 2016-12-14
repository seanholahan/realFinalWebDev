(function () {
    angular
        .module("WebAppMaker")
        .factory("ProductService", ProductService)

    function ProductService($http) {


        var api = {
            createProduct: createProduct,
            findProductsForUser: findProductsForUser,
            findProductById: findProductById,
            uploadImage: uploadImage,
            removeProduct: removeProduct,
            updateProduct: updateProduct,
            findProductsBySize: findProductsBySize
        };

        return api;

        function removeProduct(productId) {
            var url = "/api/product/"+productId;
            console.log(productId,"cklient");
            return $http.delete(url, productId);
        }

        function updateProduct(productId, product) {
            var url = "/api/product/"+productId;
            $http.put(url, product);
        }

        function uploadImage() {
            return $http.post("/api/upload")
        }

        function createProduct(product) {
            console.log("prodict", product);

            var newProduct = {
                title: product.title,
                price: product.price,
                size: product.size,
                description: product.description
            };

            console.log("prodict", newProduct);

            var url = "/api/product";
             return $http.post(url, newProduct);
        }


        function findProductsBySize(siz) {

            var sizer = {
                size: siz
            }
            var url = "/api/product"+siz;
            console.log(url, "client sze");

            return $http.get(url);

        }

        function findProductsForUser() {

            var url = "/api/product";
             return $http.get(url, "yoyo");

        }

        function findProductById(pid) {

            var url = "/api/product/"+pid;
            console.log("client", pid);
            return $http.get(url, pid);

        }
    }

}) ();

