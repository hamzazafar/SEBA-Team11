
'use strict';

import template from './view-recipe-edit.template.html';

import RecipeService from './../../services/recipes/recipes.service';

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

    static get $inject(){
        return ['$state', RecipeService.name];
    }

}


export default ViewRecipeEditComponent;