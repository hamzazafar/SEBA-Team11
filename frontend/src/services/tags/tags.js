'use strict';

import angular from 'angular';

import TagsService from './tags.service';


export default angular.module('RecipesServiceDefinition', [])
    .service(TagsService.name, TagsService)
