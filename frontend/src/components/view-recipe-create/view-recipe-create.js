'use strict';

import angular from 'angular';

import ViewRecipeCreateComponent from './view-recipe-create.component';


export default angular.module('ViewRecipeCreate', [])
    .component(ViewRecipeCreateComponent.name, new ViewRecipeCreateComponent);
