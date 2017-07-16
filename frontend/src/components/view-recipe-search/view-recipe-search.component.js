
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
            if(!this.check){
                this.recipes = JSON.parse(JSON.stringify(data));
            }
            else {
                var tempList = [];
                tempList = JSON.parse(JSON.stringify(data));
                for (var i = 0; i < tempList.length; i++) {
                    if (tempList[i].ingredients.length == this.tags.length) {
                        this.recipes.push(tempList[i]);
                    }
                }
            }
        });




        this.ingredients = [];
        //scroll to results
        this.$anchorScroll('search-results');

    }

    refreshSearch(){

        console.log("refreshSearch called")
        for (var i = 0; i < this.recipes.length; i++) {
            if (this.recipes[i].ingredients.length != this.tags.length) {
               /* delete this.recipes[i]; */

                    this.recipes.splice(i, 1);
            }
        }
    }

}
export default ViewRecipeSearchComponent;
