angular.module('todoApp', [])
    .controller('UserController', function($scope, Users) {

    //.....
    var getUsers = Users.get().then(function(data){
        thisApp.users = response.data;
    }, function() {
        alert("Error getting users");
    });

   getUsers();

}