
'use strict';

import template from './view-recipe-search.template.html';


import RecipeService from './../../services/recipes/recipes.service';
import './view-recipe-search.style.css';

class ViewRecipeSearchComponent {
    constructor(){
        this.controller = ViewRecipeSearchComponentController;
        this.template = template;
    }

    static get name() {
        return 'viewRecipeSearch';
    }
}

class ViewRecipeSearchComponentController{
    constructor($state, RecipesService){
        this.$state = $state;
        this.RecipesService = RecipesService;
        this.tags = [];
        this.recipes = [];
        this.ingredients= [];
    }


    static get $inject(){
        return ['$state', RecipeService.name];
    }

    loadImage(image) {
        return require('file-loader!../../assets/' + image);
    }


    details (recipe) {
        let _id = recipe['_id'];
        this.$state.go('recipe',{ recipeId:_id});
    };

    getByIngredients(){

        for(var i=0; i< this.tags.length; i++){
            this.ingredients.push(this.tags[i].text);
        }

        this.RecipesService.getByIngredient(this.ingredients).then(data => {
            this.recipes = JSON.parse(JSON.stringify(data));
        });

        this.ingredients = [];
    }

}
export default ViewRecipeSearchComponent;
