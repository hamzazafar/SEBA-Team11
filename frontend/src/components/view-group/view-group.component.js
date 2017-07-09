'use strict';

import template from './view-group.template.html';
import GroupsService from './../../services/groups/groups.service';
import UserService from './../../services/user/user.service';

class ViewGroupComponent {
    constructor(){
        this.controller = ViewGroupComponentController;
        this.template = template;
        this.bindings = {
            group: '<',
        }

    }

    static get name() {
        return 'viewGroup';
    }
}

class ViewGroupComponentController{
    constructor($state,GroupsService,UserService){
        this.$state = $state;
        this.group = {};
        this.model = {};
        this.GroupsService = GroupsService;
        this.UserService = UserService;
    }

    $onInit() {
        //Clone the Group Data
        this.model = JSON.parse(JSON.stringify(this.group))
    }

    save() {
        let _id = this.group['_id'];

        this.GroupsService.update(this.model).then(data => {
            this.group = JSON.parse(JSON.stringify(data));

            this.$state.go('group',{ groupId:_id});
        });

    };

    edit () {

        if (this.UserService.isAuthenticated()) {
            let _id = this.group['_id'];
            this.$state.go('groupEdit',{ groupId:_id});
        } else {
            this.$state.go('login',{});
        }

    };

    delete() {
        if (this.UserService.isAuthenticated()) {
            let _id = this.group['_id'];

            this.GroupsService.delete(_id).then(response => {
                this.$state.go('groups',{});
            });
        } else {
            this.$state.go('login',{});
        }
    };

    loadImage(image) {
    return require('file-loader!../../assets/' + image);

    };

    getOpenSpots() {
      return this.model.max_members - this.model.members_list.length
    };

    getLatitude() {
      return this.model.location.latitude;
    }

    getLongitude() {
      return this.model.location.longitude;
    }


    static get $inject(){
        return ['$state', GroupsService.name, UserService.name];
    }

}


export default ViewGroupComponent;
