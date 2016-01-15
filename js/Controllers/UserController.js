angular.module('todoApp').controller('UserController', function($scope, Users) {
    var thisApp = this;
    
    // controller init sort of say
    function activate() {
        getUsers();
    }
    activate();
    
    function getUsers() {
        UserFactory.getUsers().then(function(response){ 
            thisApp.users = response.data; 
        }, function() { 
            alert("Error getting users"); 
        });
    }
});