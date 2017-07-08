/**
 * Created by andre on 7/8/2017.
 */
module.exports = reviewRoutes;


function reviewRoutes(passport) {

    var reviewController = require('./reviewController');
    var router = require('express').Router();
    var unless = require('express-unless');

    var mw = passport.authenticate('jwt', {session: false});
    mw.unless = unless;

    //middleware
    //router.use(mw.unless({method: ['GET', 'OPTIONS']}));

    router.route('/')
        .post(reviewController.postReview)
        .get(reviewController.getReview);

    router.route('/:review_id')
        .get(reviewController.putReview)
        .delete(reviewController.deleteReview);

    return router;
}