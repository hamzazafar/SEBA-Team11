/**
 * Created by aldijanabiljali on 15.06.17.
 */
'use strict';

import angular from 'angular';

import ViewRecipesComponent from './view-recipes.component.js';


export default angular.module('ViewRecipes', [])
    .component(ViewRecipesComponent.name, new ViewRecipesComponent);