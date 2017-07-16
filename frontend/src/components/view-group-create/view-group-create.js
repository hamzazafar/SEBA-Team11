'use strict';

import angular from 'angular';


import ViewGroupCreateComponent from './view-group-create.component';


export default angular.module('ViewGroupCreate', [])
    .component(ViewGroupCreateComponent.name, new ViewGroupCreateComponent);
