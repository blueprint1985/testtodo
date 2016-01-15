angular.module('todoApp').controller('UserController', function($scope, Users) {
    var getUsers = Users.getUsers().then(function(data){
        thisApp.users = response.data;
    }, function() {
        alert("Error getting users");
    });
});