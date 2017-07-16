// Load required packages
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

//recipe ingredients
var Ingredient = new mongoose.Schema({
    name: String,
    quantity: String
});

var Review = new mongoose.Schema({
    author: String,
    published_date: Date,
    stars: Number,
    comment: String,
});


// Defining our recipe schema
var Recipe  = new mongoose.Schema({
    recipe_id: String,
    title: String,
    author: String,
    description: String,
    published_date: Date,
    directions: [String],
    ingredients: [Ingredient],
    reviews: [Review],
    image: String
});

var Entry = mongoose.model('Recipe', Recipe);

var recipe1 = new Entry ({
  recipe_id: "01",
  title: 'Spaghetti Bolognese',
  author: 'Teo Lata',
  description: 'A classic Bolognese sauce still tastes great, no matter how simple. Optional ingredients: garlic.',
  published_date: new Date(),
  directions: ["Heat a large saucepan over a medium heat. Add a tablespoon of olive oil and once hot add the beef and a pinch of salt and pepper. Cook the mince until well browned over a medium-high heat (be careful not to burn the mince. It just needs to be a dark brown colour). Once browned, transfer the mince to a bowl and set aside.", "Add another tablespoon of oil to the saucepan you browned the mince in and turn the heat to medium. Add the onions and a pinch of salt and fry gently for 5-6 minutes, or until softened and translucent. Add the garlic and cook for another 2 minutes. Add the grated carrot then pour the mince and any juices in the bowl back into the saucepan.", "Add the tomatoes to the pan and stir well to mix. Pour in the stock, bring to a simmer and then reduce the temperature to simmer gently for 45 minutes, or until the sauce is thick and rich. Taste and adjust the seasoning as necessary. Once the spaghetti is cooked, drain and add to the pan."],
  ingredients: [{"name":"beef","quantity":"400g"}, {"name":"carrot","quantity":"100g"},{"name":"tomato","quantity":"800g"}, {"name":"spaghetti","quantity":"800g"} ],
  image: "http://localhost:3000/api/recipes/uploads/01.jpg",
  reviews: [{"author": "user12",
  "published_date": new Date(),
  "stars": 5,
  "comment": "I made this recipe last night. It was delicious."},
  {"author": "user366",
  "published_date": new Date(),
  "stars": 5,
  "comment": "Everyone one loved this! My daughter helped with the prep, very tasty even the littlest one gave it a thousand thumbs up."},
   {"author": "john21",
  "published_date": new Date(),
  "stars": 4,
  "comment": "Yes I will shurely make it again.."} ]

})

var recipe2 = new Entry ({
  recipe_id: "02",
  title: 'Pancakes',
  author: 'Andreea Niculescu',
  description: 'An easy pancake batter recipe with tips on how to make the best pancakes every time with sweet or savoury toppings.',
  published_date: new Date(),
  directions: ["Put the flour and a pinch of salt into a large mixing bowl. Make a well in the centre and crack the eggs into the middle. Pour in about 50ml milk and 1 tbsp oil. Start whisking from the centre, gradually drawing the flour into the eggs, milk and oil. Once all the flour is incorporated, beat until you have a smooth, thick paste. Add a little more milk if it is too stiff to beat.", "Add a good splash of milk and whisk to loosen the thick batter. While still whisking, pour in a steady stream of the remaining milk. Continue pouring and whisking until you have a batter that is the consistency of slightly thick single cream.", "Heat the pan over a moderate heat, then wipe it with oiled kitchen paper. Ladle some batter into the pan, tilting the pan to move the mixture around for a thin and even layer. Quickly pour any excess batter into a jug, return the pan to the heat, then leave to cook, undisturbed, for about 30 secs. Pour the excess batter from the jug back into the mixing bowl. If the pan is the right temperature, the pancake should turn golden underneath after about 30 secs and will be ready to turn.", "Hold the pan handle, ease a fish slice under the pancake, then quickly lift and flip it over. Make sure the pancake is lying flat against the base of the pan with no folds, then cook for another 30 secs before turning out onto a warm plate. Continue with the rest of the batter, serving them as you cook or stack onto a plate. You can freeze the pancakes for 1 month, wrapped in cling film or make them up to a day ahead." ],
  ingredients: [{"name":"flour","quantity":"100g"}, {"name":"eggs","quantity":"2"},{"name":"milk","quantity":"300ml"}],
  image: "http://localhost:3000/api/recipes/uploads/02.jpg",
  reviews: [{"author": "man",
  "published_date": new Date(),
  "stars": 4,
  "comment": "Good, but I probably won't make again just because not everyone else liked it as much."},
  {"author": "seba34",
  "published_date": new Date(),
  "stars": 3,
  "comment": "It was delicious but it took me too much time to prepare."},
   {"author": "mary222",
  "published_date": new Date(),
  "stars": 1,
  "comment": "My boyfriend didn't like it.."} ]

})

var recipe3 = new Entry ({
  recipe_id: "03",
  title: 'Veggie Egg White Omlette',
  author: 'Aldijana Bijali',
  description: 'Easy and filling egg white omelette stuffed with veggies.',
  published_date: new Date(),
  directions: ["Heat a skillet over medium heat and spray with cooking spray.", "Whisk egg whites with salt and pepper in a bowl. Pour egg mixture into the heated skillet and swirl until eggs cover entire bottom of skillet; cook for 1 to 2 minutes. Arrange carrots, spinach and tomatoes in the middle of the eggs. Cook until edges of eggs begin to curl up, 2 to 3 more minutes. Loosen omelet from the skillet using a spatula and fold in half; continue cooking 2 to 3 more minutes." ],
  ingredients: [{"name":"carrot","quantity":"100g"},{"name":"spinach","quantity":"100g"}, {"name":"eggs","quantity":"3"},{"name":"tomato","quantity":"150g"}],
  image: "http://localhost:3000/api/recipes/uploads/03.jpg",
  reviews: [{"author": "user2004",
  "published_date": new Date(),
  "stars": 5,
  "comment": "Excellent flavor!! I used Athenos tomato & added basil feta cheese for a bit more flavor."},
  {"author": "seba344",
  "published_date": new Date(),
  "stars": 4,
  "comment": "I normally wouldn't consider taking the yolks out of an omelette, but after making eggnog I had lots of whites to use."},
 ]

})

var recipe4 = new Entry ({
    recipe_id: "04",
    title: 'Simple Omlette',
    author: 'Hamza Zafar',
    description: 'An easy, quick and very simple breakfast.',
    published_date: new Date(),
    directions: ["Heat a skillet over medium heat and spray with cooking spray.", "Whisk egg whites with salt and pepper in a bowl. Pour egg mixture into the heated skillet and swirl until eggs cover entire bottom of skillet; cook for 1 to 2 minutes." ],
    ingredients: [{"name":"eggs","quantity":"3"}],
    image: "http://localhost:3000/api/recipes/uploads/04.jpg",
    reviews: [
        {"author": "seba344",
            "published_date": new Date(),
            "stars": 4,
            "comment": "Very simple but still delicious."},
    ]

})

Entry.find({recipe_id: "01"}, function (err, recipes) {
    if(recipes.length > 0){
        console.log('Recipe already exists');
    } else{
      recipe1.save(function(err, Recipe){
              if(err) return console.error("Error while saving data to MongoDB: " + err); // <- this gets executed when there's an error
              console.error(Recipe); // <- this never gets logged, even if there's no error.
          });
    }
});

Entry.find({recipe_id: "02"}, function (err, recipes) {
    if(recipes.length > 0){
        console.log('Recipe already exists');
    } else{
      recipe2.save(function(err, Recipe){
                  if(err) return console.error("Error while saving data to MongoDB: " + err); // <- this gets executed when there's an error
                  console.error(Recipe); // <- this never gets logged, even if there's no error.
              });
    }
});

Entry.find({recipe_id: "03"}, function (err, recipes) {
    if(recipes.length > 0){
        console.log('Recipe already exists');
    } else{
      recipe3.save(function(err, Recipe){
                  if(err) return console.error("Error while saving data to MongoDB: " + err); // <- this gets executed when there's an error
                  console.error(Recipe); // <- this never gets logged, even if there's no error.
              });
    }
});

Entry.find({recipe_id: "04"}, function (err, recipes) {
    if(recipes.length > 0){
        console.log('Recipe already exists');
    } else{
        recipe4.save(function(err, Recipe){
            if(err) return console.error("Error while saving data to MongoDB: " + err); // <- this gets executed when there's an error
            console.error(Recipe); // <- this never gets logged, even if there's no error.
        });
    }
});


// Export the Mongoose model
module.exports = Entry;
