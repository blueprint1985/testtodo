angular.module('todoApp').factory('UserFactory', factory);

function factory($http) {
    var service = {
        get: get
    };

    return service;
    
    function get() {
        return $http({method : 'GET',url : 'http://localhost:8000/users'})
        .then(function(response) {
            return response.data;
        });
    }
}