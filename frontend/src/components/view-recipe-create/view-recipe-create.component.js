'use strict';

import template from './view-recipe-create.template.html';

import RecipeService from './../../services/recipes/recipes.service';
import UserService from './../../services/user/user.service';


class ViewRecipeCreateComponent {
    constructor(){
        this.controller = ViewRecipeCreateComponentController;
        this.template = template;
    }

    static get name() {
        return 'viewRecipeCreate';
    }
}

class ViewRecipeCreateComponentController{
    constructor($state, RecipeService,UserService){
        this.recipe = {};
        this.temp = "";
        this.iName = "";
        this.iQuantity = "";
        this.recipe.ingredients = [];
        this.recipe.directions = [];
        this.$state = $state;
        this.RecipeService = RecipeService;
        this.UserService = UserService;
        this.image= {};
    }

    cancel() {
        this.$state.go('recipes',{});
    };

    save() {
        this.RecipeService.create(this.recipe).then(data => {
            let _id = data['_id'];
            this.$state.go('recipe',{ recipeId:_id});
        });
    };

    addDirection(){
      this.recipe.directions.push(this.temp);
      this.temp = "";
    }

    addIngredient(){
      var ingredient = {};
      ingredient.name = this.iName;
      ingredient.quantity = this.iQuantity;
      this.recipe.ingredients.push(ingredient);
      this.iName = "";
      this.iQuantity = "";
    };

    static get $inject(){
        return ['$state', RecipeService.name, UserService.name];
    }
}

export default ViewRecipeCreateComponent;
