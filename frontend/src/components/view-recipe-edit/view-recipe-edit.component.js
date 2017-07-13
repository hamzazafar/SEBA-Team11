
'use strict';

import template from './view-recipe-edit.template.html';


import RecipeService from './../../services/recipes/recipes.service';
import './view-recipe-edit.style.css';

class ViewRecipeEditComponent {
    constructor(){
        this.controller = ViewRecipeEditComponentController;
        this.template = template;
        this.bindings = {
            recipe: '<',
        }
    }

    static get name() {
        return 'viewRecipeEdit';
    }
}

class ViewRecipeEditComponentController{
    constructor($state, RecipesService){
        this.model = {};
        this.$state = $state;
        this.RecipesService = RecipesService;
        this.recipe = {};
        this.temp = "";
        this.iName = "";
        this.iQuantity = "";
        this.recipe.ingredients = [];
        this.recipe.directions = [];
    }

    $onInit() {
        //Clone the Recipe Data
        this.model = JSON.parse(JSON.stringify(this.recipe))
    }

    cancel() {
        this.model = JSON.parse(JSON.stringify(this.recipe));
        this.$state.go('recipes',{});
    };

    save() {
        let _id = this.recipe['_id'];

        this.RecipesService.update(this.model).then(data => {
            this.recipe = JSON.parse(JSON.stringify(data));

            this.$state.go('recipe',{ recipeId:_id});
        });

    };

    delete() {
        let _id = this.recipe['_id'];

        this.RecipesService.delete(_id).then(response => {
            this.$state.go('recipes',{});
        });
    };

    addDirection(){
        this.model.directions.push(this.temp);
        this.temp = "";
    }

    addIngredient(){
        var ingredient = {};
        ingredient.name = this.iName;
        ingredient.quantity = this.iQuantity;
        this.model.ingredients.push(ingredient);
        this.iName = "";
        this.iQuantity = "";
    }

    deleteDirection(d){
        var index = this.model.directions.indexOf(d);
        if (index > -1) {
            this.model.directions.splice(index, 1);
        }
    }

    deleteIngredient(i){
        var index = this.model.ingredients.indexOf(i);
        if (index > -1) {
            this.model.ingredients.splice(index, 1);
        }
    }

    static get $inject(){
        return ['$state', RecipeService.name];
    }

}


export default ViewRecipeEditComponent;
