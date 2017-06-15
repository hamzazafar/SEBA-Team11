/**
 * Created by aldijanabiljali on 15.06.17.
 */
'use strict';

import angular from 'angular';

import ViewRecipeComponent from './view-recipe.component';


export default angular.module('ViewRecipe', [])
    .component(ViewRecipeComponent.name, new ViewRecipeComponent);