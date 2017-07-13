'use strict';

import angular from 'angular';

import ViewRecipeCreateComponent from './view-recipe-create.component';
import ngFileUpload from 'ng-file-upload';


export default angular.module('ViewRecipeCreate', ['ngFileUpload'])
    .component(ViewRecipeCreateComponent.name, new ViewRecipeCreateComponent);
