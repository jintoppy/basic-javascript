var myapp = angular.module('myapp');

myapp.directive('myList', [function(){
    return {
        restrict: 'EA',
        templateUrl: 'mylist.template.html',
        scope: {
            myTitle: '@',
            data: '='
        },
        link: function(scope, element, attrs){
            scope.onClick = function(name){
                alert('You clicked ' + name);
            };
        }
    };
}]);
