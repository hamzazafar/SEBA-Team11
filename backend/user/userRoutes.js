function userRoutes(passport) {

    var userController = require('./userController');
    var router = require('express').Router();

    router.post('/login', userController.login);
    router.post('/signup', userController.signup);
    router.post('/unregister', passport.authenticate('jwt',
                                                     {session: false}),
                                                     userController.unregister);

    router.put('/updateuser', userController.updateuser)

    return router;

}

module.exports = userRoutes;
