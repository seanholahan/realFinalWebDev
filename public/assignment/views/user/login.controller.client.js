(function(){
    angular
        .module("WebAppMaker")
        .controller("LoginController", LoginController);

    function LoginController($location, UserService) {
        var vm = this;
        vm.login = login;

        function login(user) {
            console.log("loggin in");
            // var promise = UserService.findUserByCredentials(username, password);
            var promise = UserService.findUserByCredentials(user.username, user.password);
            promise
                .success(function(user){
                    if(user[0] === '0' || user[0] === "" || user[0] === undefined) {
                        vm.error = "No such user";
                    } else {

                        $location.url("/profile/" + user[0]._id);
                    }
                })
                .error(function(bbbb){
                    console.log(bbbb);
                });
        }
    }
})();