
'use strict';

import angular from 'angular';

import ViewGroupComponent from './view-groups.component';


export default angular.module('ViewGroup', [])
    .component(ViewGroupComponent.name, new ViewGroupComponent);
