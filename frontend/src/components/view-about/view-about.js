'use strict';

import angular from 'angular';

import ViewAboutComponent from './view-about.component';


export default angular.module('ViewAbout', [])
    .component(ViewAboutComponent.name, new ViewAboutComponent);
