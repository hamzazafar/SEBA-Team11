'use strict';

import template from './view-group-create.component';

import GroupService from './../../services/groups/groups.service';
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

class ViewRGroupCreateComponentController{
    constructor($state, GroupService,UserService){
        this.$state = $state;
        this.RecipeService = GroupService;
        this.UserService = UserService;
    }

    cancel() {
        this.$state.go('groups',{});
    };

    save() {
        this.GroupService.create(this.group).then(data => {
            let _id = data['_id'];
            this.$state.go('group',{ groupId:_id});
        });
    };



    static get $inject(){
        return ['$state', RecipeService.name, UserService.name];
    }
}

export default ViewGroupCreateComponent;
