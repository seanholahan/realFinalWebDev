


(function() {
    angular
        .module("WebAppMaker")
        .config(Config);

    function Config($routeProvider, $httpProvider) {


        $routeProvider
            .when("/", {
                templateUrl: "views/home.html",
                controller: "ProductListController",
                controllerAs: "model"

            })

            .when("/product/:pid", {
                templateUrl: "views/product/product-view.client.html",
                controller: "ProductViewController",
                controllerAs: "model"

            })

            .when("/profile/:uid/product/:pid", {
                templateUrl: "views/product/product-logged-in.view.client.html",
                controller: "ProductViewController",
                controllerAs: "model"

            })

            .when("/profile/:uid/product", {
                templateUrl: "views/product/product-list-logged-in.view.client.html",
                controller: "ProductListController",
                controllerAs: "model"

            })

            .when("/product/:pid/edit", {
                templateUrl: "views/product/product-edit.view.html",
                controller: "ProductEditController",
                controllerAs: "model"

            })

            .when("/home", {
                redirectTo: "/"
            })

            .when("/contact", {
                templateUrl: "views/contact.html"
            })

            .when("/blog", {
                templateUrl: "views/blog.html"
            })

            .when("/archive", {
                templateUrl: "views/archive.html"
            })

            .when("/login", {
                templateUrl: "views/user/login.html",
                controller: "LoginController",
                controllerAs: "model"
            })

            .when("/profile/:uid", {
                templateUrl: "views/user/profile.html",
                controller: "ProfileController",
                controllerAs: "model"
            })

            .when("/profile/:uid/edit", {
                templateUrl: "views/user/profile-edit.view.html",
                controller: "ProfileController",
                controllerAs: "model"
            })

            .when("/register", {
                templateUrl: "views/user/register.html",
                controller: "RegisterController",
                controllerAs: "model"
            })

            .when("/createProduct", {
                templateUrl: "views/product/createProduct.html",
                controller: "CreateProductController",
                controllerAs: "model"
            })

            .when("/api/upload", {
                redirectTo: "/createProduct"
            })

            .when("/productList", {
                templateUrl: "views/product/product-list.view.client.html",
                controller: "ProductListController",
                controllerAs: "model"
            })

            .when("/stitch1", {
                templateUrl: "item/stitch1.html"
            })

            .when("/stitch7", {
                templateUrl: "item/stitch7.html"
            })

            .when("/stitch10", {
                templateUrl: "item/stitch10.html"
            })

            .when("/stitch11", {
                templateUrl: "item/stitch11.html"
            })

            .when("/stitch13", {
                templateUrl: "item/stitch13.html"
            })

            .when("/stitch14", {
            templateUrl: "item/stitch14.html"
             })

            .when("/stitch16", {
                templateUrl: "item/stitch16.html"
            })

            .when("/stitch17", {
                templateUrl: "item/stitch17.html"
            })

            .when("/#carousel-example-generic", {
                templateUrl: "item/stitch1.html"
            })

            .otherwise ({
                redirectTo: "/"
            });
    }


})();

