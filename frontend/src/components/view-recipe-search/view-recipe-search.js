'use strict';

import angular from 'angular';
import ngTagsInput from 'ng-tags-input';

import ViewRecipeSearchComponent from './view-recipe-search.component';


export default angular.module('ViewRecipeSearch', ['ngTagsInput'])
    .component(ViewRecipeSearchComponent.name, new ViewRecipeSearchComponent);
