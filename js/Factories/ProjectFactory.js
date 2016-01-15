angular.module('todoApp').factory('ProjectFactory', factory);

function factory($http) {
    var service = {
        getProjects: getProjects
    };

    return service;
    
    function getProjects() {
        return $http({method : 'GET',url : 'http://localhost:8000/projects'})
        .then(function(response) {
            return response.data;
        });
    }
}