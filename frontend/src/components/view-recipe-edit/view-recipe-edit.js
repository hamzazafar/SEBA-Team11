'use strict';

import angular from 'angular';

import ViewRecipeEditComponent from './view-recipe-edit.component';


export default angular.module('ViewRecipeEdit', [])
    .component(ViewRecipeEditComponent.name, new ViewRecipeEditComponent);