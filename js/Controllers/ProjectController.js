angular.module('todoApp').controller('ProjectController', function($scope, ProjectFactory) {
    var thisApp = this;
    
    // controller init sort of say
    function activate() {
        getProjects();
    }
    activate();
    
    function getProjects() {
        ProjectFactory.getProjects().then(function(response){ 
            thisApp.projects = response.data; 
        }, function() { 
            alert("Error getting projects"); 
        });
    }
});