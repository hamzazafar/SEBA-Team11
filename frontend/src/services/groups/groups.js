'use strict';

import angular from 'angular';

import GroupsService from './groups.service';


export default angular.module('GroupsServiceDefinition', [])
    .service(GroupsService.name, GroupsService)
