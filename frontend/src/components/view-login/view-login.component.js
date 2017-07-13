
'use strict';

import UserService from './../../services/user/user.service';

import template from './view-login.template.html';
import './view-login.style.css';

class ViewLoginComponent {
    constructor(){
        this.controller = ViewLoginComponentController;
        this.template = template;

    }

    static get name() {
        return 'viewLogin';
    }


}

class ViewLoginComponentController{
    constructor($state,UserService){
        this.$state = $state;
        this.UserService = UserService;
        this.usern = "";
        this.que = "";
        this.ans ="";
    }

    $onInit() {
        this.login = {};
    }

    submit(){
        let user = this.login.username;
        let password = this.login.password;

        this.UserService.login(user,password).then(()=> {
            this.$state.go('recipeSearch');
        });
    }


    updatePassword(){
        let user = this.UserService.getCurrentUser().username;
        let password = this.UserService.getCurrentUser().password;
        let password2 = this.UserService.getCurrentUser().password2;
        let fullname = this.UserService.getCurrentUser().fullname;
        let useremail = this.UserService.getCurrentUser().useremail;
        let question = this.UserService.getCurrentUser().question;
        let answer= this.UserService.getCurrentUser().answer;

        this.UserService.register(user,password,password2,fullname,useremail, question,answer).then(()=> {
            this.$state.go('/',{});
        });
    }

    static get $inject(){
        return ['$state', UserService.name];
    }

}


export default ViewLoginComponent;
