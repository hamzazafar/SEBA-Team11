/**
 * Created by andre on 7/8/2017.
 */
// importing recipe model
var Review = require('./reviewSchema');

// POST Endpoint /api/recipes
exports.postReview = function(req, res) {
    console.log('SERVER: POST review request')

    var review = new Review(req.body);
    review.published_date = new Date();

    review.save(function(err, review) {
        if (err) {
            res.status(500).send(err);
            return;
        }
        res.status(201).json(review);
    });
};

// GET Endpoint /api/review
exports.getReview = function(req, res) {
    console.log('SERVER: GET review request')

    Review.find(function(err, recipes) {
        if (err) {
            res.status(500).send(err);
            return;
        }
        res.json(review);
    });
};

// GET Endpoint /api/reviews/:review_id
exports.getReview = function(req, res) {
    console.log('SERVER: GET recipe request')

    Review.findById(req.params.review_id, function(err, review) {
        if (err) {
            res.status(500).send(err)
            return;
        };

        res.json(review);
    });
};

// PUT Endpoint /api/recipes/:recipe_id
exports.putReview = function(req, res) {
    console.log('SERVER: PUT review request')

    Recipe.findByIdAndUpdate(
        req.params.review_id,
        req.body,
        {
            //pass the new object to cb function
            new: true,
            //run validations
            runValidators: true
        }, function (err, review) {
            if (err) {
                res.status(500).send(err);
                return;
            }
            res.json(review);
        });
};

// DELETE endpoint /api/reviews/:review_id
exports.deleteReview = function(req, res) {
    console.log('SERVER: delete review request')

    Recipe.findById(req.params.review_id, function(err, review) {
        if (err) {
            res.status(500).send(err);
            return;
        }
        review.remove();
        res.sendStatus(200);
    });
};
