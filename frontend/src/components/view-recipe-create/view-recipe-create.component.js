'use strict';

import template from './view-recipe-create.template.html';

import RecipeService from './../../services/recipes/recipes.service';
import UserService from './../../services/user/user.service';
import './view-recipe-create.style.css';



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
    constructor($state, RecipeService,UserService, $http, API_URL, Upload){
        this.recipe = {};
        this.temp = "";
        this.iName = "";
        this.iQuantity = "";
        this.recipe.ingredients = [];
        this.recipe.directions = [];
        this.recipe.image = "";
        this.$state = $state;
        this.$http = $http;
        this.Upload = Upload;
        this.URL = `${ API_URL }/recipes/`;
        this.RecipeService = RecipeService;
        this.UserService = UserService;
        this.image ={};
        this.recipe.author = this.UserService.getCurrentUser().username;
    }

    cancel() {
        this.$state.go('recipes',{});
    };

    save(file) {
        this.RecipeService.create(this.recipe).then(data => {
            let _id = data['_id'];
            this.$state.go('recipe',{ recipeId:_id});
        });

        this.uploadFile(file);
    };


    uploadFile(file){
      console.log(file);
      file.upload = this.Upload.upload({
        url: this.URL + `savedata/`,
        data: {file: file},
      });
    this.recipe.image = this.URL + `uploads/` + file.name;
    }
    /*
    uploadFileToUrl(file, uploadUrl){
      let fd = new FormData();
      fd.append('file', file);

      return this.$http.post(uploadUrl, fd, {
        transformRequest: angular.identity,
        headers: {'Content-Type': undefined}
      });
    }*/

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
        return ['$state', RecipeService.name, UserService.name, '$http', 'API_URL', 'Upload'];
    }
}

export default ViewRecipeCreateComponent;
