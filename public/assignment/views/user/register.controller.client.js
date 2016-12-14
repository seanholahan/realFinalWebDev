/**
 * Created by willqueen on 12/8/16.
 */

(function(){
    angular
        .module("WebAppMaker")
        .controller("RegisterController", RegisterController);

    function RegisterController($location, UserService) {
        var vm = this;
        vm.register = register;

        function register(user) {
            var promise = UserService.createUser(user);
            promise
                .success(function (user) {
                    console.log(user._id, "newe user id");
                    $location.url("/profile/"+user._id);
                })
                .error(function (error) {
                });
        }
    }
}());