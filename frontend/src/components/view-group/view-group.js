
'use strict';

import angular from 'angular';

import ViewGroupComponent from './view-group.component';


export default angular.module('ViewGroup', [])
    .component(ViewGroupComponent.name, new ViewGroupComponent);
