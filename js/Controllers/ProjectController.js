angular.module('todoApp')
    .controller('ProjectController', function($scope, ProjectFactory) {

    //.....
    var getProjects = ProjectFactory.get().then(function(data){
        thisApp.users = response.data;
    }, function() {
        alert("Error getting users");
    });


}
