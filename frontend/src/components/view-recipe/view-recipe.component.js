/**
 * Created by aldijanabiljali on 15.06.17.
 */

'use strict';

import template from './view-recipe.template.html';
import RecipesService from './../../services/recipes/recipes.service';
import UserService from './../../services/user/user.service';

class ViewRecipeComponent {
    constructor(){
        this.controller = ViewRecipeComponentController;
        this.template = template;
        this.bindings = {
            recipe: '<',
        }

    }

    static get name() {
        return 'viewRecipe';
    }
}

class ViewRecipeComponentController{
    constructor($state,RecipesService,UserService){
        this.$state = $state;
        this.recipe = {};
        this.model = {};
        this.RecipesService = RecipesService;
        this.UserService = UserService;
        this.review_comment = "";
        this.recipe.reviews = [];
        this.stars = 0;


    }
    $onInit() {
        //Clone the Recipe Data
        this.model = JSON.parse(JSON.stringify(this.recipe))
    }

    save() {
        let _id = this.recipe['_id'];

        this.RecipesService.update(this.model).then(data => {
            this.recipe = JSON.parse(JSON.stringify(data));

            this.$state.go('recipe',{ recipeId:_id});
        });

    };

    edit () {

        if (this.UserService.isAuthenticated()) {
            let _id = this.recipe['_id'];
            this.$state.go('recipeEdit',{ recipeId:_id});
        } else {
            this.$state.go('login',{});
        }

    };

    delete() {
        if (this.UserService.isAuthenticated()) {
            let _id = this.recipe['_id'];

            this.RecipesService.delete(_id).then(response => {
                this.$state.go('recipes',{});
            });
        } else {
            this.$state.go('login',{});
        }
    };

    addReview(){
      var review = {};
      review.author = this.UserService.getCurrentUser().username;
      review.comment = this.review_comment;
      review.published_date = new Date();
      review.stars = this.stars;
      this.model.reviews.push(review);
      this.review_comment = "";


      $('#myModal').modal('hide');

      this.save();

    };

    deleteReview(i){
        var index = this.model.reviews.indexOf(i);
        if (index > -1) {
            this.model.reviews.splice(index, 1);
        }
        this.save();
    }

    getRating() {
      var countReviews = this.model.reviews.length;
      console.log(countReviews)

      var sumReviews = 0;
      var i = 0;
      for ( i = 0; i < this.model.reviews.length; i++) {
        sumReviews += +this.model.reviews[i].stars;
        console.log(this.model.reviews[i].stars)
      }
      console.log(sumReviews)
      if (countReviews == 0) {
        return 5;
      } else {

       return Math.round(sumReviews/countReviews);
     }

    }

    getNumberofRevies(){
        var countReview = this.model.reviews.length;
        return countReview;
    }


    loadImage(image) {
    return require('file-loader!../../assets/' + image);
};

    static get $inject(){
        return ['$state', RecipesService.name, UserService.name];
    }

}


export default ViewRecipeComponent;
