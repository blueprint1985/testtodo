angular.module('todoApp').controller('ProjectController', function($scope, ProjectFactory) {
    var getProjects = ProjectFactory.getProjects().then(function(data){
        thisApp.projects = response.data;
    }, function() {
        alert("Error getting projects");
    });
});