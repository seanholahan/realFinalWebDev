(function () {
    angular
        .module("WebAppMaker")
        .controller("ProductViewController", ProductViewController);

    function ProductViewController($routeParams, ProductService, $location) {
        var vm = this;
        vm.productId = $routeParams['pid'];

        function init() {
            console.log(vm.productId);
            var promise = ProductService.findProductById(vm.productId);

            promise
                .success(function(product){


                    vm.product = product;

                    console.log(vm.products, "halo these are the products");
                    console.log("groovy");
                });
        }
        init();

    }
})();
