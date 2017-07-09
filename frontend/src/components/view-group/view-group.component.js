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
        this.review_comment = "";
        this.group.reviews = [];
        this.stars = 0;


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

    addReview(){
      var review = {};
      review.author = this.UserService.getCurrentUser().username;
      review.comment = this.review_comment;
      review.published_date = new Date();
      review.stars = this.stars;
      this.model.reviews.push(review);
      this.review_comment = "";


      $('#myModal').modal('hide');

      this.save();

    };

    deleteReview(i){
        var index = this.model.reviews.indexOf(i);
        if (index > -1) {
            this.model.reviews.splice(index, 1);
        }
        this.save();
    }

    getRating() {
      var countReviews = this.model.reviews.length;
      console.log(countReviews)

      var sumReviews = 0;
      var i = 0;
      for ( i = 0; i < this.model.reviews.length; i++) {
        sumReviews += +this.model.reviews[i].stars;
        console.log(this.model.reviews[i].stars)
      }
      console.log(sumReviews)
      if (countReviews == 0) {
        return 5;
      } else {

       return Math.round(sumReviews/countReviews);
     }

    }

    getNumberofRevies(){
        var countReview = this.model.reviews.length;
        return countReview;
    }


    loadImage(image) {
    return require('file-loader!../../assets/' + image);
};

    static get $inject(){
        return ['$state', GroupsService.name, UserService.name];
    }

}


export default ViewGroupComponent;
