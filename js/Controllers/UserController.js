angular.module('todoApp').controller('UserController', function($scope, UserFactory) {
    var thisApp = this;
    
    // controller init sort of say
    function activate() {
        getUsers();
    }
    activate();
    
    function getUsers() {
        UserFactory.getUsers().then(function(response){ 
            thisApp.users = response.data;
            console.log(response.data);
            console.log(thisApp.users);
        }, function() { 
            alert("Error getting users"); 
        });
    }
});