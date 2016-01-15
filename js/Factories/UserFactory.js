angular.module('todoApp').factory('UserFactory', factory);

function factory($http) {
    var service = {
        getUsers: getUsers
    };

    return service;
    
    function getUsers() {
        return $http({method : 'GET',url : 'http://localhost:8000/users'})
        .then(function(response) {
            return response.data;
        });
    }
}