var myapp = angular.module('myapp');

myapp.directive('myList', [function(){
    return {
        restrict: 'EA',
        templateUrl: 'mylist.template.html',
        scope: {}
    };
}]);
