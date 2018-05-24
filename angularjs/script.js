var myapp = angular.module('myapp', []);

myapp.controller('MainCtrl', ['$scope', 
function($scope){
    $scope.users = ['Ajith', 'Rajnikanth', 'Surya'];
    $scope.students = ['Ram', 'Prasanna', 'Akshatha'];

    $scope.kids = [
        'https://i.ytimg.com/vi/ivFefy28M10/maxresdefault.jpg',
        'https://i0.wp.com/www.wayoflifestudio.in/wp-content/uploads/Contemporary-Dance-Classes-for-Kids-Way-Of-Life-Studio-Mumbai.jpg?resize=640%2C400',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcXVTahgesTQuc5gbglK8IVCUoNJWOjHQQEdNlv2kUlQwO5hLa4g',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmT9OgUqLO_YfEL_P1mFT9LOYTyOfIlRFm-Q_RIUD7Gk2NexH9DA',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7jJj_2nTaEirSfZOCq80ZT5VL1GcyJ7S8XFkVLhpQKrEIwUqu',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRudI2_rQRPOHucSMGuvjPEVy9PLg4zbecXWVPbhNotnNcmc37-'
    ];

    $scope.cats = [
        'https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&h=350',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxO4ckoVJir3oGtPTVh6iZ4bVllEuoIl5TykG-m2O5YPtbiDDS',
        'https://i.ytimg.com/vi/dGFSjKuJfrI/maxresdefault.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnXMXdfDDxfAeKMuNib7Vzsm_0uixMQfjNP3B2S6275u_ZDeLp'
    ];
}]);
