'use strict';

import angular from 'angular';

import RecipesService from './recipes.service';


export default angular.module('RecipesServiceDefinition', [])
    .service(RecipesService.name, RecipesService)