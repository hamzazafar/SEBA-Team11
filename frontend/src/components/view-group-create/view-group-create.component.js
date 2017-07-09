'use strict';

import template from './view-group-create.template.html';

import GroupsService from './../../services/groups/groups.service';
import UserService from './../../services/user/user.service';


class ViewGroupCreateComponent {
    constructor(){
        this.controller = ViewGroupCreateComponentController;
        this.template = template;
    }

    static get name() {
        return 'viewGroupCreate';
    }
}

class ViewGroupCreateComponentController{
    constructor($state, GroupsService,UserService){
        this.group = {};
        this.temp = "";
        this.$state = $state;
        this.GroupsService = GroupsService;
        this.UserService = UserService;
    }

    cancel() {
        this.$state.go('groups',{});
    };

    save() {
        this.GroupsService.create(this.group).then(data => {
            let _id = data['_id'];
            this.$state.go('group',{ groupId:_id});
        });
    };




    static get $inject(){
        return ['$state', GroupsService.name, UserService.name];
    }
}

export default ViewGroupCreateComponent;
