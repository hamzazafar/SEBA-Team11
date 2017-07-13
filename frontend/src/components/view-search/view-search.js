/**
 * Created by aldijanabiljali on 15.06.17.
 */
'use strict';

import angular from 'angular';


import ViewSearchComponent from './view-search.component.js';


export default angular.module('ViewSearch', [])
    .component(ViewSearchComponent.name, new ViewSearchComponent);
