module.exports = recipeRoutes;


function recipeRoutes(passport) {

    var recipeController = require('./recipeController');
    var router = require('express').Router();
    var unless = require('express-unless');
    var path = require('path');
    var multer = require('multer');
    var storage = multer.diskStorage({destination: './uploads/',filename: function (req, file, cb) {
        cb(null, file.originalname.replace(path.extname(file.originalname), "") + path.extname(file.originalname))
      }
    });
    var upload = multer({ 'storage': storage });

    var mw = passport.authenticate('jwt', {session: false});
    mw.unless = unless;

    //middleware

    //router.use(mw.unless({method: ['GET', 'OPTIONS']}));
router.post('/savedata', upload.single('file'), function(req,res,next){
    console.log('Uploade Successful ', req.file, req.body);
    res.status(201).json(req.file.filename);
});

router.route('/uploads/:filename')
    .get(function(req, res) {
        var file = __dirname + '/../uploads/' + req.params.filename;
        res.download(file);
    });

    router.route('/')
        .post(recipeController.postRecipe)
        .get(recipeController.getRecipes);

    router.route('/:recipe_id')
        .get(recipeController.getRecipe)
        .put(recipeController.putRecipe)
        .delete(recipeController.deleteRecipe);

    router.get('/get/ingredients', recipeController.getRecipesByIngredients);

    return router;
}
