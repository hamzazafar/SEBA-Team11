
'use strict';

import angular from 'angular';

import ViewCatalogueComponent from './view-catalogue.component.js';


export default angular.module('ViewCatalogue', [])
    .component(ViewCatalogueComponent.name, new ViewCatalogueComponent);
