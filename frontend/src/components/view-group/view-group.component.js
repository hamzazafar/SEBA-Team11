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
        this.discussion_comment = "";
    }

    $onInit() {
        //Clone the Group Data
        this.model = JSON.parse(JSON.stringify(this.group))
        document.getElementById("groupLocation").src = this.getLocationFromUrl()
    }

    save() {
        let _id = this.group['_id'];

        this.GroupsService.update(this.model).then(data => {
            this.group = JSON.parse(JSON.stringify(data));

            this.$state.go('group',{ groupId:_id});
        });

    };

    delete() {
      $('#cancelEvent').modal('hide');
      $('.modal-backdrop').remove();


        if (this.UserService.isAuthenticated()) {
            let _id = this.group['_id'];

            this.GroupsService.delete(_id).then(response => {
                this.$state.go('groups',{});
            });
        } else {
            this.$state.go('login',{});
        }


    };

    joinGroup(){
      this.model.members_list.push(this.UserService.getCurrentUser().username);
      this.save();
    }

    getOpenSpots() {
      return this.model.max_members - this.model.members_list.length
    };

    getLocationFromUrl(){
        return "https://www.google.com/maps/embed/v1/place?key=AIzaSyDoqhTLVB9GuBZmAQtgkCnVyfEInomTH0M&q="+this.model.location.street+"+"+this.model.location.number+","+this.model.location.city+"+"+this.model.location.country;

    }

    addComment(){
      var comment = {};
      comment.author = this.UserService.getCurrentUser().username;
      comment.comment = this.discussion_comment;
      comment.published_date = new Date();
      this.model.comments.push(comment);
      this.discussion_comment = "";

      $('#myModal').modal('hide');

      this.save();

    };

    deleteComment(i){
        var index = this.model.comments.indexOf(i);
        if (index > -1) {
            this.model.comments.splice(index, 1);
        }
        this.save();
    }

    static get $inject(){
        return ['$state', GroupsService.name, UserService.name];
    }

}


export default ViewGroupComponent;
