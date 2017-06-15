'use strict';

import angular from 'angular';

import ViewRecipesearchComponent from './view-recipesearch.component';

export default angular.module('ViewRecipesearch', [])
  .component(ViewRecipesearchComponent.name, new ViewRecipesearchComponent);
