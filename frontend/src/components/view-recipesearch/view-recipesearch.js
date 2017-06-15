'use strict';

import angular from 'angular';

import ViewRecipesearchComponent from './view-recipesearch.component';

var app = angular.module('ViewRecipesearch', ['ngTagsInput']);
app.controller('ViewRecipesearchComponentController', function($scope, tags) {

$scope.loadTags = function(query) {
    return tags.load();
};
});

app.service('tags', function($q) {
    var tags = [
        { "text": "Tag1" },
        { "text": "Tag2" },
        { "text": "Tag3" },
        { "text": "Tag4" },
        { "text": "Tag5" },
        { "text": "Tag6" },
        { "text": "Tag7" },
        { "text": "Tag8" },
        { "text": "Tag9" },
        { "text": "Tag10" }
    ];

    this.load = function() {
        var deferred = $q.defer();
        deferred.resolve(tags);
        return deferred.promise;
    };




    /*   export default angular.module('ViewRecipesearch', ['ngTagsInput'])
    .component(ViewRecipesearchComponent.name, new ViewRecipesearchComponent);
   .controller('ViewRecipesearchComponentController', function($scope, $http) {
        $scope.tags = [
            { text: 'just' },
            { text: 'some' },
            { text: 'cool' },
            { text: 'tags' }
        ];
        $scope.loadTags = function(query) {
            return $http.get('/tags?query=' + query);
        };*/
    });
//export default angular.module('ViewRecipesearch', [])
 //   .component(ViewRecipesearchComponent.name, new ViewRecipesearchComponent);
