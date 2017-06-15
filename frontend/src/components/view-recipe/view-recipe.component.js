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
        this.RecipesService = RecipesService;
        this.UserService = UserService;

    }

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

    static get $inject(){
        return ['$state', RecipesService.name, UserService.name];
    }

}


export default ViewRecipeComponent;