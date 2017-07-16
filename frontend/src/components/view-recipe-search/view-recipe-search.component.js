
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
    constructor($state, RecipesService, $anchorScroll){
        this.$state = $state
        this.$anchorScroll = $anchorScroll;
        this.RecipesService = RecipesService;
        this.tags = [];
        this.recipes = [];
        this.allRecipes = [];
        this.ingredients= [];
        this.check;
    }


    static get $inject(){
        return ['$state', RecipeService.name, '$anchorScroll'];
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
            this.allRecipes = JSON.parse(JSON.stringify(data));
            if(!this.check){
                this.recipes = Array.from(this.allRecipes);
            }
            else {
                for (var i = 0; i < this.allRecipes.length; i++) {
                    if (this.allRecipes[i].ingredients.length == this.tags.length) {
                        this.recipes.push(this.allRecipes[i]);
                    }
                }
            }
        });

        this.ingredients = [];
        //scroll to results
        this.$anchorScroll('search-results');

    }

    refreshSearch(){

          if(this.check){
            for (var i = 0; i < this.recipes.length; i++) {
              if (this.recipes[i].ingredients.length != this.tags.length) {
                      this.recipes.splice(i, 1);
              }
            }
          }
          else{
             this.recipes = [];
             this.recipes = Array.from(this.allRecipes);
          }
   }
}
export default ViewRecipeSearchComponent;
