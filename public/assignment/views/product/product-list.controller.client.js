(function () {
    angular
        .module("WebAppMaker")
        .controller("ProductListController", ProductListController);

    function ProductListController($routeParams, ProductService, $location) {
        var vm = this;
        vm.usersId = $routeParams['uid'];
        console.log(vm.usersId,"dis shit");
        vm.findProductsBySize = findProductsBySize;
        vm.findProductsForUser = findProductsForUser;

        function init() {
            var promise = ProductService.findProductsForUser(vm.userId);
            promise
                .success(function(product){
                    vm.products = product;
                });
        }
        init();

        function findProductsBySize(size) {
            console.log(size);
            var promise = ProductService.findProductsBySize(size);
            promise
                .success(function(products){
                    vm.products = products;
                })
        }

        function findProductsForUser() {
            console.log("got here");
            var promise = ProductService.findProductsForUser(vm.userId);
            promise
                .success(function(product){
                    vm.products = product;
                });
        }

    }
})();




