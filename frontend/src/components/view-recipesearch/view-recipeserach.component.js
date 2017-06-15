
'use strict';

//import UserService from './../../services/user/user.service';
import RecipesService from './../../services/recipes/recipes.service';
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
    constructor($state,RecipesService){
        this.$state = $state;
        this.RecipesService = RecipesService;
    }



    static get $inject(){
        return ['$state', UserService.name];
    }
}

export default ViewRecipesearchComponent;
