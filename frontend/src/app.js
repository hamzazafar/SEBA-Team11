'use strict';

import angular from 'angular';
import uiRouter from '@uirouter/angularjs';

import angularMaterial from 'angular-material';
import 'angular-material/angular-material.css';

import ngMdIcons from 'angular-material-icons';

import UserService from './services/user/user';

import Routes from './config/routes';
import Middlewares from './config/middlewares';

import AppContent from './components/app-content/app-content';
import ViewLogin from './components/view-login/view-login';
import ViewRegister from './components/view-register/view-register';

//import ViewRecipes from './components/view-recipes/view-recipes';
//import ViewRecipe from './components/view-recipe/view-recipe';
//import ViewRecipeEdit from './components/view-recipe-edit/view-recipe-edit';
import ViewRecipeCreate from './components/view-recipe-create/view-recipe-create';

let app = angular.module('app', [
    uiRouter,
    angularMaterial,
    ngMdIcons,
    UserService.name,
    AppContent.name,
    ViewLogin.name,
    ViewRegister.name,
//    ViewRecipes.name,
//    ViewRecipe.name,
//    ViewRecipeEdit.name,
    ViewRecipeCreate.name
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
