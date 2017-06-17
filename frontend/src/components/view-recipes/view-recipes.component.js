/**
 * Created by aldijanabiljali on 15.06.17.
 */

'use strict';

import template from './view-recipes.template.html';
import RecipesService from './../../services/recipes/recipes.service';
import UserService from './../../services/user/user.service';

import './view-recipes.style.css';

class ViewRecipesComponent {
    constructor(){
        this.controller = ViewRecipesComponentController;
        this.template = template;
        this.bindings = {
            recipes: '<',
        }
    }

    static get name() {
        return 'viewRecipes';
    }

}

class ViewRecipesComponentController {
    constructor($state,RecipesService,UserService){
        this.$state = $state;
        this.RecipesService = RecipesService;
        this.UserService = UserService;
    }

    details (recipe) {
        let _id = recipe['_id'];
        this.$state.go('recipe',{ recipeId:_id});
    };

    edit (recipe) {
        if (this.UserService.isAuthenticated()) {
            let _id = recipe['_id'];
            this.$state.go('recipeEdit',{ recipeId:_id});
        } else {
            this.$state.go('login',{});
        }
    };

    newRecipe(){

        if (this.UserService.isAuthenticated()) {
            this.$state.go('recipeAdd',{});
        } else {
            this.$state.go('login',{});
        }

    }

    delete(recipe) {
        if (this.UserService.isAuthenticated()) {
            let _id = recipe['_id'];

            this.RecipesService.delete(_id).then(response => {
                let index = this.recipes.map(x => x['_id']).indexOf(_id);
            this.recipes.splice(index, 1);
        })

        } else {
            this.$state.go('login',{});
        }
    };

    static get $inject(){
        return ['$state', RecipesService.name, UserService.name];
    }

}

export default ViewRecipesComponent;
