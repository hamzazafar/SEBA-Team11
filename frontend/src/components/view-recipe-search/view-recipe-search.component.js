
'use strict';

import template from './view-recipe-search.template.html';


import RecipeService from './../../services/recipes/recipes.service';
import './view-recipe-search.style.css';

class ViewRecipeSearchComponent {
    constructor(){
        this.controller = ViewRecipeSearchComponentController;
        this.template = template;
        this.tags = [];
    }

    static get name() {
        return 'viewRecipeSearch';
    }
}

class ViewRecipeSearchComponentController{
    constructor($state, RecipesService){
        this.$state = $state;
        this.RecipesService = RecipesService;
    }


    static get $inject(){
        return ['$state', RecipeService.name];
    }

    loadImage(image) {
    return require('file-loader!../../assets/' + image);
  }

}


export default ViewRecipeSearchComponent;
