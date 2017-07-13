
'use strict';

import template from './view-search.template.html';
import RecipesService from './../../services/recipes/recipes.service';
import UserService from './../../services/user/user.service';

import './view-search.style.css';

class ViewSearchComponent {
    constructor(){
        this.controller = ViewSearchComponentController;
        this.template = template;
        this.bindings = {
            recipes: '<',
        }
    }

    static get name() {
        return 'viewSearch';
    }

}

class ViewSearchComponentController {
    constructor($state,RecipesService,UserService){
        this.$state = $state;
        this.RecipesService = RecipesService;
        this.UserService = UserService;
    }


    loadTags() {
        var obj = [
             { "text": "ketchup" },
             { "text": "apple" },
             { "text": "onion" },
             { "text": "salt" },
             { "text": "sugar" },
             { "text": "tomato" },
             { "text": "potato"}];
        return obj;
    };

    loadTagsFromIngredients() {
      var ingredients_tags = [];
      var i=0;
      for(i; i< this.recipes.length ; i++){
        var j=0;
        for(j;j< this.recipes[i].ingredients.length; j++){
          ingredients_tags.push(this.recipes[i].ingredients[j].name)
        }

      }
      return JSON.stringify(ingredients_tags);

    }
    loadImage(image) {
        return require('file-loader!../../assets/' + image);
    }

    static get $inject(){
        return ['$state', RecipesService.name, UserService.name];
    }

}

export default ViewSearchComponent;
