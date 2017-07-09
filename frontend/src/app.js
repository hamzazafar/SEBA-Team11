'use strict';

import angular from 'angular';
import uiRouter from '@uirouter/angularjs';

import angularMaterial from 'angular-material';
import 'angular-material/angular-material.css';

import ngMdIcons from 'angular-material-icons';

import UserService from './services/user/user';
import RecipesService from './services/recipes/recipes';
import GroupsService from './services/groups/groups';

import Routes from './config/routes';
import Middlewares from './config/middlewares';

import AppContent from './components/app-content/app-content';
import ViewLogin from './components/view-login/view-login';
import ViewAbout from './components/view-about/view-about';
import ViewRegister from './components/view-register/view-register';

import ViewRecipes from './components/view-recipes/view-recipes';
import ViewRecipe from './components/view-recipe/view-recipe';
import ViewRecipeEdit from './components/view-recipe-edit/view-recipe-edit';
import ViewRecipeCreate from './components/view-recipe-create/view-recipe-create';
import ViewRecipeSearch from  './components/view-recipe-search/view-recipe-search';

import ViewGroups from './components/view-groups/view-groups';
import ViewGroup from './components/view-group/view-group';
import ViewGroupCreate from './components/view-group-create/view-group-create'

let app = angular.module('app', [
    uiRouter,
    angularMaterial,
    ngMdIcons,
    UserService.name,
    RecipesService.name,
    GroupsService.name,

    AppContent.name,
    ViewLogin.name,
    ViewAbout.name,
    ViewRegister.name,
    ViewRecipes.name,
    ViewRecipe.name,
    ViewRecipeEdit.name,
    ViewRecipeCreate.name,
    ViewRecipeSearch.name,

    ViewGroups.name,
    ViewGroup.name,
    ViewGroupCreate.name

]);

app.constant('API_URL', 'http://localhost:3000/api');
app.config(Routes);
app.config(Middlewares);


angular.element(document).ready(function() {
    return angular.bootstrap(document.body, [app.name], {
        strictDi: true
    });
});

export default app;
