// importing recipe model
var Recipe = require('./recipeSchema');

// POST Endpoint /api/recipes
exports.postRecipe = function(req, res) {
    console.log('SERVER: POST recipe request')

    var recipe = new Recipe(req.body);
    recipe.published_date = new Date();

    recipe.save(function(err, recipe) {
        if (err) {
            res.status(500).send(err);
            return;
        }
        res.status(201).json(recipe);
    });
};

// GET Endpoint /api/recipes
exports.getRecipes = function(req, res) {
    console.log('SERVER: GET recipe request')

    Recipe.find(function(err, recipes) {
        if (err) {
            res.status(500).send(err);
            return;
        }
        res.json(recipes);
    });
};

// GET Endpoint /api/recipes/:recipe_id
exports.getRecipe = function(req, res) {
    console.log('SERVER: GET recipe request')

    Recipe.findById(req.params.recipe_id, function(err, recipe) {
        if (err) {
            res.status(500).send(err)
            return;
        };

        res.json(recipe);
    });
};

// PUT Endpoint /api/recipes/:recipe_id
exports.putRecipe = function(req, res) {
    console.log('SERVER: PUT recipe request')

    Recipe.findByIdAndUpdate(
        req.params.recipe_id,
        req.body,
        {
            //pass the new object to cb function
            new: true,
            //run validations
            runValidators: true
        }, function (err, recipe) {
        if (err) {
            res.status(500).send(err);
            return;
        }
        res.json(recipe);
    });
};

// DELETE endpoint /api/recipes/:recipe_id
exports.deleteRecipe = function(req, res) {
    console.log('SERVER: delete recipe request')

    Recipe.findById(req.params.recipe_id, function(err, recipe) {
        if (err) {
            res.status(500).send(err);
            return;
        }
        recipe.remove();
        res.sendStatus(200);
    });
};
