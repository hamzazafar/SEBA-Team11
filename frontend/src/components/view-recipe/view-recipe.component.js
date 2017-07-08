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
      review.rating = 5;
      this.model.reviews.push(review);
      this.review_comment = "";

      $('#myModal').modal('hide');

      this.save();

    };


    static get $inject(){
        return ['$state', RecipesService.name, UserService.name];
    }

}


export default ViewRecipeComponent;
