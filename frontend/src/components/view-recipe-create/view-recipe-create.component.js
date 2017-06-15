
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
        this.$state = $state;
        this.RecipeService = RecipeService;
        this.UserService = UserService;
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


    static get $inject(){
        return ['$state', RecipeService.name, UserService.name];
    }

}


export default ViewRecipeCreateComponent;
