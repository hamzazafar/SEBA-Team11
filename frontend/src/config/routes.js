'use strict';

import LoginComponent from './../components/view-login/view-login.component';
import RegisterComponent from './../components/view-register/view-register.component';

import RecipesComponent from './../components/view-recipes/view-recipes.component';
import RecipesComponent from './../components/view-recipes/view-recipes.component';
import RecipeEditComponent from './../components/view-recipe-edit/view-recipe-edit.component';
import RecipeCreateComponent from './../components/view-recipe-create/view-recipe-create.component';
import RecipesService from './../services/recipes/recipes.service';


resolveRecipe.$inject = ['$stateParams', RecipesService.name];
function resolveRecipe($stateParams,recipesService){
    return recipesService.get($stateParams.recipeId);
}

resolveRecipes.$inject = [RecipesService.name];
function resolveRecipes(recipesService){
    return recipesService.list();
}


config.$inject = ['$stateProvider', '$urlRouterProvider'];
export default function config ($stateProvider, $urlRouterProvider){

    // For any unmatched url, redirect to /home
    $urlRouterProvider.otherwise("/");

    $stateProvider
        .state('login', {
            url: '/login',
            component: LoginComponent.name,
        })
        .state('register', {
            url: '/register',
            component: RegisterComponent.name,
        })
        .state('recipes', {
            url: '/recipes',
            component: RecipesComponent.name,
            resolve: {
                recipes : resolveRecipes
            }
        })
        .state('recipeAdd', {
            url: '/recipes/new',
            component: RecipeCreateComponent.name
        })
        .state('recipe', {
            url: '/recipes/:recipeId',
            component: RecipeComponent.name,
            resolve: {
                recipe : resolveRecipe
            }
        })
        .state('recipeEdit', {
            url: '/recipes/:recipeId/edit',
            component: RecipeEditComponent.name,
            resolve: {
                recipe : resolveRecipe
            }
        })
}

