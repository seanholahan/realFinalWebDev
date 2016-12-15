module.exports = function(app, model, $routeparams) {
    app.get("/api/user/:username/password/:password", login);
    app.get('/api/user', findUser);
    app.post('/api/login', findUserByCredentials);
    app.post('/api/user', createUser);
    app.get('/api/user/:uid', findUserById);
    app.put('/api/user/:uid', updateUser);
    app.delete('/api/user/:uid', unregisterUser);

    function findProductsForUser(req, res) {
        model
            .userModel
            .findProductsForUser(req.params._user)
            .then(function(products){
                res.json(products);
            })

    }

    function login(req, res) {
        var username = req.params.username;
        var password = req.params.password;
        model.userModel
            .findUserByCredentials(username, password)
            .then(
                function (user) {
                    console.log(user,"this is what we are finding")
                    if(user) {
                        res.json(user);
                    } else {
                        res.sendStatus('0');
                    }
                },
                function (error) {
                    res.sendStatus(400).send(error);
                }
            );
    }

    function unregisterUser(req, res) {
        var uid = req.params.uid;
        console.log(uid , "uid");
        model.userModel
            .removeUser(uid)
            .then(
                function (status) {
                    res.send(200);
                },
                function (error) {
                    res.sendStatus(400).send(error);
                }
            )
    }

    function updateUser(req, res) {
        var user = req.body;
        var uid = req.body._id;
        console.log(user , "user stuff");
        console.log(uid,"getit uid");
        model
            .userModel
            .updateUser(uid, user)
            .then(
                function (status) {
                    console.log("WE DID IT");
                    res.sendStatus(200);

                },
                function (error) {
                    res.sendStatus(400).send(error);
                }
            );
    }


    function createUser(req, res) {
        var user = req.body;

        //console.log("yo)))!", req);
        console.log("yo)))!", user);
        console.log(model);
        console.log(model.userModel);


        model
            .userModel
            .createUser(user)
            .then(
                function(newUser) {
                    res.send(newUser);
                },
                function(error) {
                    res.sendStatus(400).send(error);
                });
        // return res.send(0);

    }

    /*function createUser(req, res) {
        var user = req.body;
        console.log(user,"got to user");
        model
            .userModel
            .createUser(user)
            .then(
                function(newUser) {
                    console.log(newUser, "whatt");
                    res.send(newUser);
                });

    }*/

    function findUser(req, res) {
        var params = req.params;
        var query = req.query;
        if(query.password && query.username) {
            findUserByCredentials(req, res);
        } else if(query.username) {
            findUserByUsername(req, res);
        }
    }

    function findUserByCredentials(req, res) {
        var username = req.body.username;
        var password = req.body.password;
        console.log(req.body, "holah from server");
        UserModel
            .findUserByCredentials(username, password)
            .then(
                function (users) {
                    if(users[0]) {
                        res.json(users[0]);
                    } else {
                        res.send('0');
                    }
                },
                function (error) {
                    res.sendStatus(400).send(error);
                }
            );
    }
    function findUserByUsername(req, res) {
        var username = req.query.username;
        model.userModel
            .findUserByUsername(username)
            .then(function(users) {
                if (users) {
                    res.json(users[0]);
                } else {
                    res.send('0');
                }
            }, function (error) {
                res.sendStatus(400).send(error);
                {

                }
            })
    }
    function findUserById(req, res) {
        var userId = req.params.uid;
        model.userModel
            .findUserById(userId)
            .then(
                function (user) {
                    if(user) {
                        console.log("found user by id!")
                        res.send(user);
                    } else {
                        res.send('0');
                    }
                },
                function (error) {
                    res.sendStatus(400).send(error);
                }
            )
    }
};
