'use strict';


export default class TagsService {

    constructor() {

   }

    static get name(){
        return 'tagsService';
    }

    load (query) {
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
        var deferred = query.defer();
        deferred.resolve(tags);
        return deferred.promise;
    };
}
