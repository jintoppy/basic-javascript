var myapp = angular.module('myapp', []);

myapp.controller('MainCtrl', ['$scope', 
function($scope){
    $scope.myval = 'parentval';
}]);
