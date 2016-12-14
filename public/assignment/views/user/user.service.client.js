(function () {
    angular
        .module("WebAppMaker")
        .factory("UserService", UserService);

    function UserService($http) {

        var api = {
            findUserByCredentials: findUserByCredentials,
            createUser: createUser,
            findUserById: findUserById,
            updateUser: updateUser,
            unregisterUser: unregisterUser


        };
        return api;

        function unregisterUser(uid) {
            console.log(uid, "whats this");
            var url = "/api/user/" + uid;
            return $http.delete(url, uid);
        }

        function updateUser(user) {
            var url = "/api/user/" + user._id;
            console.log(user._id, "got to client service");
            console.log(user,"this the user");
            $http.put(url, user);
        }

        function createUser(user) {
            var newUser = {
                username: user.username,
                password: user.password
            };
            console.log(newUser,"fucboi!!");
            var url = "/api/user";
            return $http.post(url, newUser);
        }

        function findUserById(userId) {
            var url = "/api/user/" + userId;
            return $http.get(url);
        }

        function findUserByCredentials(username, password) {
            var url = '/api/user?username=' + username + '&password=' + password;
            return $http.get(url);

        }

    }

}) (window.angular)

