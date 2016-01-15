angular.module('todoApp').factory('ProjectFactory', factory);

function factory($http) {
    var service = {
        get: get
    };

    return service;
    
    function get() {
        return $http({method : 'GET',url : 'http://localhost:8000/projects'})
        .then(function(response) {
            return response.data;
        });
    }
}