
'use strict';

import UserService from './../../services/user/user.service';

import template from './view-about.template.html';
import './view-about.style.css';

class ViewAboutComponent {
    constructor(){
        this.controller = ViewAboutComponentController;
        this.template = template;

    }

    static get name() {
        return 'viewAbout';
    }


}

class ViewAboutComponentController{
    constructor($state,UserService){
        this.$state = $state;
        this.UserService = UserService;
    }

    static get $inject(){
        return ['$state', UserService.name];
    }

}


export default ViewAboutComponent;
