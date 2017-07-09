'use strict';


export default class GroupsService {

    static get $inject(){
        return ['$http', 'API_URL'];
    }

    constructor($http,API_URL) {
        this.$http = $http;
        this.resourceUrl = `${ API_URL }/groups/`;

    }

    static get name(){
        return 'groupsService';
    }

    list() {

        let url = this.resourceUrl;
        return this.$http.get(url).then(responce => {
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


    create(group) {
        let url = this.resourceUrl;
        return this.$http.post(url,group).then(responce => {
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

    update(group) {

        let url = `${ this.resourceUrl }${ group['_id'] }`;
        return this.$http.put(url,group).then(responce => {
            return new Promise((resolve, reject) => {
                resolve(responce.data);
            });
        })
    }
}
