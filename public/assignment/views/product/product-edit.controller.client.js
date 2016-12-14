
(function () {
    angular
        .module("WebAppMaker")
        .controller("ProductEditController", ProductEditController);

    function ProductEditController($routeParams, ProductService, $location) {
        var vm = this;
        vm.productId = $routeParams['pid'];


        vm.removeProduct = removeProduct;
        vm.updateProduct = updateProduct;

        function init() {
            var promise = ProductService.findProductById(vm.productId);
            promise
                .success(function(product){
                    vm.product = product;
                })
        }

        init();

        function updateProduct(product) {
            ProductService.updateProduct(vm.productId, product);

            $location.url("/productList");
        }


        function removeProduct() {
            ProductService
                .removeProduct(vm.productId);
            $location.url("/productList");


        }


    }
})();




