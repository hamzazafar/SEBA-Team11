'use strict';

import LoginComponent from './../components/view-login/view-login.component';
import RegisterComponent from './../components/view-register/view-register.component';
import AboutComponent from './../components/view-about/view-about.component';

import RecipesComponent from './../components/view-recipes/view-recipes.component';
import RecipeComponent from './../components/view-recipe/view-recipe.component';
import RecipeEditComponent from './../components/view-recipe-edit/view-recipe-edit.component';
import RecipeCreateComponent from './../components/view-recipe-create/view-recipe-create.component';
import RecipesService from './../services/recipes/recipes.service';
import RecipeSearchComponent from './../components/view-recipe-search/view-recipe-search.component';
import CatalogueComponent from './../components/view-catalogue/view-catalogue.component';

import GroupsComponent from './../components/view-groups/view-groups.component';
import GroupComponent from './../components/view-group/view-group.component';
import GroupCreateComponent from './../components/view-group-create/view-group-create.component';
import GroupsService from './../services/groups/groups.service';



resolveRecipe.$inject = ['$stateParams', RecipesService.name];
function resolveRecipe($stateParams,recipesService){
    return recipesService.get($stateParams.recipeId);
}

resolveRecipes.$inject = [RecipesService.name];
function resolveRecipes(recipesService){
    return recipesService.list();
}

resolveGroup.$inject = ['$stateParams', GroupsService.name];
function resolveGroup($stateParams,groupsService){
    return groupsService.get($stateParams.groupId);
}

resolveGroups.$inject = [GroupsService.name];
function resolveGroups(groupsService){
    return groupsService.list();
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
        .state('catalogue', {
            url: '/catalogue',
            component: CatalogueComponent.name,
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
        .state('about', {
            url: '/about',
            component: AboutComponent.name,
        })

        .state('recipeSearch', {
            url: '/',
            component: RecipeSearchComponent.name,
        })
        .state('groupAdd', {
            url: '/groups/new',
            component: GroupCreateComponent.name
        })
        .state('group', {
            url: '/groups/:groupId',
            component: GroupComponent.name,
            resolve: {
                group : resolveGroup
            }
        })
        .state('groups', {
            url: '/groups',
            component: GroupsComponent.name,
            resolve: {
                groups : resolveGroups
            }
        })


}
