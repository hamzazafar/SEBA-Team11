'use strict';

import angular from 'angular';

import ViewGroupsComponent from './view-groups.component.js';
import ngMap from 'ngmap';


export default angular.module('ViewGroups', ['ngMap'])
    .component(ViewGroupsComponent.name, new ViewGroupsComponent);
