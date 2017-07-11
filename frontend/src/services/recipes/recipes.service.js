'use strict';


export default class RecipesService {

    static get $inject(){
        return ['$http', 'API_URL'];
    }

    constructor($http,API_URL) {
        this.$http = $http;
        this.resourceUrl = `${ API_URL }/recipes/`;

    }

    static get name(){
        return 'recipesService';
    }

    list() {

        let url = this.resourceUrl;
        return this.$http.get(url).then(responce => {
            return new Promise((resolve, reject) => {
                resolve(responce.data);

            });
        });
    }

    getByIngredient(ingredients) {
        let url = this.resourceUrl+'get/ingredients';
        var config = { 
                         params: {
                             data: ingredients
                         }
                     }
        return this.$http.get(url, config).then(responce => {
            return new Promise((resolve, reject) => {
                resolve(responce.data);
            });
        });
    }

    get(id) {
        let url = `${ this.resourceUrl }${ id }`;
        return this.$http.get(url).then(responce => {
            return new Promise((resolve, reject) => {
                resolve(responce.data);
            });
        })
    }


    create(recipe) {
        let url = this.resourceUrl;
        return this.$http.post(url,recipe).then(responce => {
            return new Promise((resolve, reject) => {
                resolve(responce.data);
            });
        })
    }

    delete(id) {
        let url = `${ this.resourceUrl }${ id }`;
        return this.$http.delete(url).then(responce => {
            return new Promise((resolve, reject) => {
                resolve(responce.status);
            });
        })
    }

    update(recipe) {

        let url = `${ this.resourceUrl }${ recipe['_id'] }`;
        return this.$http.put(url,recipe).then(responce => {
            return new Promise((resolve, reject) => {
                resolve(responce.data);
            });
        })
    }
}
