var myapp = angular.module('myapp');

myapp.directive('myDir', [function(){
    return {
        restrict: 'EA',
        templateUrl: 'newdirective.template.html',
        scope: {
            myTitle: '='
        }
    };
}]);
