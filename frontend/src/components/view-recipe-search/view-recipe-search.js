'use strict';

import angular from 'angular';

import ViewRecipeSearchComponent from './view-recipe-search.component';


export default angular.module('ViewRecipeSearch', [])
    .component(ViewRecipeSearchComponent.name, new ViewRecipeSearchComponent);