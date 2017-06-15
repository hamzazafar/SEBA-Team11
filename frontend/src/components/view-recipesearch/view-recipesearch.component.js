
'use strict';

//import UserService from './../../services/user/user.service';
import TagsService from './../../services/tags/tags.service';
import template from './view-recipesearch.template.html';
import './view-recipesearch.style.css';

class ViewRecipesearchComponent {
    constructor(){
        this.controller = ViewRecipesearchComponentController;
        this.template = template;
    }

    static get name() {
        return 'viewRecipesearch';
    }
}

class ViewRecipesearchComponentController{
    constructor($state,TagsService){
        this.$state = $state;
        this.TagsService = TagsService;
        this.tags = [];
    }

    loadTags(query) {
        return this.TagsService.load();
    };



    static get $inject(){
        return ['$state', TagsService.name];
    }
}

export default ViewRecipesearchComponent;
