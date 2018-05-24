var myapp = angular.module('myapp');

myapp.directive('slideshow', [function(){
    return {
        restrict: 'E',
        templateUrl: 'slideshow.template.html',
        scope: {
            slideShowTitle: '@',
            list: '='
        },
        link: function(scope){
            scope.currIndex = 0;
            scope.goPrevious = function(){
                scope.currIndex = scope.currIndex - 1;
            };

            scope.goForward = function(){
                scope.currIndex = scope.currIndex + 1;
            };
        }
    };
}]);
