
(function ()
{
    angular

        .module("WebAppMaker")
        .factory("UserService", UserService);

    function UserService() {


        var users = [
            {_id: 123, username: "alice",    password: "alice",    firstName: "Alice",  lastName: "Wonder"  },
            {_id: 234, username: "bob",      password: "bob",      firstName: "Bob",    lastName: "Marley"  },
            {_id: 345, username: "charly",   password: "charly",   firstName: "Charly", lastName: "Garcia"  },
            {_id: 456, username: "jannunzi", password: "jannunzi", firstName: "Jose",   lastName: "Annunzi" }
        ]

        var api = {
            findUserByCredentials: findUserByCredentials,
            findUserById: findUserById,
            createUser: createUser,
            findUserByUsername : findUserByUsername,
            updateUser: updateUser,
            deleteUser:deleteUser
        };

        app.post('/api/user', createUser);
        app.get('/api/user', findUser);
        app.get('/api/user', fundUserById);
        app.put('/api/user', createUser);

        return api;

        function updateUser(user) {
            var url = "/user/" + user._id;
            //    $http.

        }

        function unregesterUser(userId, user) {
            for (var u in users) {
                if (users[u]._id === user._id) {
                    users[u] = user;
                }
            }
        }

        function updateUser(userId, user) {
            for (var u in users) {
                if (users[u]._id === user._id) {
                    users[u] = user;
                }
            }
        }


        function deleteUser(userId) {
            for (var u in users) {
                if (parseInt(users[u]._id) === userId) {
                    users.splice(parseInt(u), 1);
                }
            }

        }





        function findUserByUsername(username) {
            for (var u in users) {
                user = users[u];
                if (user.name === username) {
                    return user;
                }
            }
            return null;

        }


        function createUser(user) {
            users.push(user);



        }

        function findUserById(userId) {
            for (var u in users) {
                user = users[u];
                if (user._id === userId) {
                    return user;
                }
            }
            return null;
        }

        function findUserByCredentials(username, password) {
            for (var u in users) {
                user = users[u];

                if (user.username === username && user.password === password) {

                    return user;

                }
            }
            return null;
        }
    }

})();



(function () {
    angular

        .module("WebAppMaker")

        .factory("WebsiteService", WebsiteService)

    function WebsiteService() {
        var websites = [
            { "_id": "123", "name": "Facebook",    "developerId": "456", "description": "Lorem" },
            { "_id": "234", "name": "Tweeter",     "developerId": "456", "description": "Lorem" },
            { "_id": "456", "name": "Gizmodo",     "developerId": "456", "description": "Lorem" },
            { "_id": "567", "name": "Tic Tac Toe", "developerId": "123", "description": "Lorem" },
            { "_id": "678", "name": "Checkers",    "developerId": "123", "description": "Lorem" },
            { "_id": "789", "name": "Chess",       "developerId": "234", "description": "Lorem" }
        ];



        var api = {
            createWebsite: createWebsite,
            findWebsitesForUser: findWebsitesForUser,
            findWebsiteById: findWebsiteById,
            removeWebsite: removeWebsite,
            updateWebsite: updateWebsite

        };
        return api;

        function createWebsite(website) {
            websites.push(website);
        }

        function removeWebsite(wid) {
            for (var w in websites) {
                if (parseInt(websites[w]._id) === wid) {
                    websites.splice(parseInt(w), 1);
                }
            }
        }

        function findWebsitesForUser(uid) {
            var results = [];

            for (var w in websites) {
                if (parseInt(websites[w].developerId) === uid) {
                    results.push(websites[w]);
                }
            }

            return results;
        }

        function findWebsiteById(wid) {

            for (var w in websites) {
                if (parseInt(websites[w]._id) === wid) {
                    return websites[w];
                }
            }
            return null;
        }


        function updateWebsite(website) {
            for (var w in websites) {
                if (websites[w]._id === website._id) {
                    websites[w] = website;
                }
            }
        }
    }
})();





(function () {
    angular
        .module("WebAppMaker")
        .factory("WidgetService", WidgetService);

    function WidgetService() {

        var widgets = [
            {"_id": "123", "widgetType": "HEADER", "pageId": "321", "size": 2, "text": "GIZMODO"},
            {"_id": "234", "widgetType": "HEADER", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
            {
                "_id": "345", "widgetType": "IMAGE", "pageId": "321", "width": "100%",
                "url": "http://lorempixel.com/400/200/"
            },
            {"_id": "456", "widgetType": "HTML", "pageId": "321", "text": "<p>Lorem ipsum</p>"},
            {"_id": "567", "widgetType": "HEADER", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
            {
                "_id": "678", "widgetType": "YOUTUBE", "pageId": "321", "width": "100%",
                "url": "https://youtu.be/AM2Ivdi9c4E"
            },
            {"_id": "789", "widgetType": "HTML", "pageId": "321", "text": "<p>Lorem ipsum</p>"}
        ];

        var api = {
            findWidgetsByPageId: findWidgetsByPageId,
            createWidget: createWidget,
            findWidgetById: findWidgetById,
            updateWidget: updateWidget,
            deleteWidget: deleteWidget
        };

        return api;

        function createWidget(pageId, widget) {
            widget._id = pageId;
            widgets.push(widget);
        }

        function findWidgetsByPageId(pageId) {
            var results = [];
            console.log(pageId);
            console.log(widgets);
            for (var w in widgets) {
                if (parseInt(widgets[w].pageId) === pageId) {
                    results.push(widgets[w]);
                }
            }
            console.log(results);
            return results;

        }

        function findWidgetById(widgetId) {
            for (var w in widgets) {
                if (parseInt(widgets[w]._id) === widgetId) {
                    return widgets[w];

                }
            }
            return null;
        }

        function updateWidget(widgetId, widget) {
            for (var w in pages) {
                if (parseInt(widgets[w]._id) === widgetId) {
                    widgets[w] = widget;
                }
            }
        }

        function deleteWidget(widgetId) {
            for (var w in widgets) {
                if (parseInt(widgets[w]._id) === widgetId) {
                    widgets.splice(parseInt(w), 1);
                }
            }
        }

    }
}) (window.angular);





(function () {
    angular
        .module("WebAppMaker")
        .factory("PageService", PageService);

    function PageService() {


        var pages = [
            { "_id": "321", "name": "Post 1", "websiteId": "456", "description": "Lorem" },
            { "_id": "432", "name": "Post 2", "websiteId": "456", "description": "Lorem" },
            { "_id": "543", "name": "Post 3", "websiteId": "456", "description": "Lorem" }
        ];

        var api = {
            createPage: createPage,
            findPageByWebsiteId: findPageByWebsiteId,
            findPageById: findPageById,
            updatePage: updatePage,
            deletePage : deletePage
        };

        return api;

        function createPage(websiteId, page) {
            pages.push(page);
        }

        function findPageByWebsiteId(websiteId) {
            var results = [];
            for (var p in pages) {
                if (parseInt(pages[p].websiteId) === websiteId) {
                    results.push(pages[p]);
                }
            }
            return results;
        }

        function findPageById(pageId) {
            for (var p in pages) {
                if (parseInt(pages[p]._id) === pageId) {
                    return pages[p];
                }
            }
            return null;
        }

        function updatePage(pageId, page) {
            for (var p in pages) {
                if (pages[p]._id === pageId) {
                    pages[p] = page;
                }
            }

        }

        function deletePage(pid) {
            for (var p in pages) {
                if (parseInt(pages[p]._id) === pid) {
                    pages.splice(parseInt(p), 1);
                }
            }
        }

    }
}) (window.angular);



(function(){
    angular
        .module("WebAppMaker")
        .factory("UserService", UserService);

    function UserService($http) {
        // var users = [
        //     {username: 'alice', password: 'ewq', _id: 123, first: 'Alice', last: 'Wonderland'},
        //     {username: 'bob', password: 'ewq', _id: 234, first: 'Bob', last: 'Dylan'},
        //     {username: 'charlie', password: 'ewq', _id: 345, first: 'Charlie', last: 'Brown'}
        // ];

        var api = {
            findUserByCredentials: findUserByCredentials,
            findUserById: findUserById,
            createUser: createUser,
            updateUser: updateUser,
            unregisterUser: unregisterUser
        };
        return api;

        function unregisterUser(uid) {
            var url = "/api/user/" + uid;
            return $http.delete(url);
        }

        function updateUser(user) {
            var url = "/api/user/" + user._id;
            return $http.put(url, user);
        }

        function createUser(req, res) {
            var user = req.body;
            websites.push(website);
            res.send(websites);
            return $http.post("/api/user", user);
        }

        function findUserById(userId) {
            var url = "/api/user/"+userId;
            return $http.get(url);

        }

        function findUserByCredentials(username, password) {
            var url = '/api/user?username='+username+'&password='+password;
            return $http.get(url);

        }
    }
})();





(function(){
    angular
        .module("WebAppMaker")
        .factory("WebsiteService", WebsiteService);

    function WebsiteService($http) {
        // var websites = [
        //     {_id: 321, name: 'facebook.com', uid: 123},
        //     {_id: 432, name: 'wikipedia.org', uid: 123},
        //     {_id: 543, name: 'twitter.com', uid: 234}
        // ];

        var api = {
            findWebsitesForUser: findWebsitesForUser,
            findWebsiteById: findWebsiteById,
            createWebsite: createWebsite,
            updateWebsite: updateWebsite,
            removeWebsite: removeWebsite
        };
        return api;

        function removeWebsite(wid) {
            var url = "/api/website/"+wid;
            return $http.delete(url);

        }

        function updateWebsite(website) {
            var url = "/api/website/"+wid;
            return $http.put(url, website);

        }

        function createWebsite(uid, website) {
            var url = "/api/user/"+uid+"/website";
            return $http.post(url, website);
        }

        function findWebsiteById(wid) {
            var url = "/api/website/"+wid;
            return $http.get(url);

        }


        function findWebsitesForUser(uid) {
            var url = "/api/user/"+uid+"/website";
            return $http.get(url);
        }
    }
})();



var name  = req.params
var website = {
    name: name,
    description: description
};
console.log(req.params.name);

$http.post("/api/user"+vm.uid+"website", website);