
(function () {
    angular
        .module("WebAppMaker")
        .controller("CreateProductController", CreateProductController);

    function CreateProductController($routeParams, ProductService, $location) {
        var vm = this;
        vm.usersId = $routeParams['uid'];

        vm.createProduct = createProduct;
        vm.uploadImage = uploadImage;

        function init() {

        }
        init();

        function createProduct(product) {
            console.log("creating product", product);
            ProductService
                .createProduct(product)
                .success (
                    function(product) {
                        console.log(product);
                        $location.url("/productList");
                    }

                 )
                .error(
                    function(product) {
                        console.log("error");
                    }

                )
        }

        function uploadImage() {
            ProductService
                .uploadImage()
                .success (
                    function(product) {
                        $location.url("/productList");

                    }
                )
                .error(
                    function(product) {
                        console.log("error");
                    }

                )
        }


    }
})();




