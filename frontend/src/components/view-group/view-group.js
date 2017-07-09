
'use strict';

import angular from 'angular';

import ViewGroupComponent from './view-group.component';
import ngMap from 'ngmap';


export default angular.module('ViewGroup', ['ngMap'])
    .component(ViewGroupComponent.name, new ViewGroupComponent);
