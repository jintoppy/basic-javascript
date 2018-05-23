var myapp = angular.module('myapp', []);
myapp.controller('MainCtrl', ['$scope', function($scope){
    $scope.users = [
        {
            name: 'rajni',
            age: 10
        },
        {
            name: 'vijay',
            age: 20
        }
    ];

    $scope.searchUsers = function(){
        $scope.filteredUsers = $scope.users.filter(function(user){
            return user.name.includes($scope.myval);
        });
    };

    $scope.selectUser = function(user){
        $scope.activeUser = user;
    };
    

    $scope.filteredUsers = $scope.users;

}]);