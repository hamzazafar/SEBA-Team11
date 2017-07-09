'use strict';

import angular from 'angular';

import ViewGroupsComponent from './view-groups.component.js';


export default angular.module('ViewGroups', [])
    .component(ViewGroupsComponent.name, new ViewGroupsComponent);
