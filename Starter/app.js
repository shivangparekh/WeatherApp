// UPDATED
var weatherApp = angular.module ('weatherApp', ['ngRoute', 'ngResource']);

weatherApp.config(function($routeProvider){
   $routeProvider
   .when('/',{
       templateUrl: 'pages/home.html',
       controller: 'homeController'
   })
   .when('/forcast.html',{
       templateUrl: 'pages/forcast.html',
       controller: 'forcastController'
   })
   .when('/forcast.html/:days',{
       templateUrl: 'pages/forcast.html',
       controller: 'forcastController'
   })
   
});

weatherApp.service('location', function(){
    this.city = '';
    
    
    
});

weatherApp.controller('homeController',['$scope', 'location', function($scope, location){
    $scope.city = location.city;
    $scope.$watch('city',function(){
       location.city = $scope.city; 
    });
    $scope.add = function(){
        
     
    };
    
}]);

weatherApp.controller('forcastController',['$scope', '$resource', '$routeParams', 'location', function($scope, $resource, $routeParams, location){
    $scope.city = location.city;
    $scope.APPID = '44db6a862fba0b067b1930da0d769e98';
    $scope.days = ($routeParams.days || 2);
    console.log($scope.APPID);
    console.log($scope.city);
    $scope.weatherApi = $resource("http://api.openweathermap.org/data/2.5/forecast?", {callback: "JSON_CALLBACK"}, {get:{method: "JSONP"}});
    
    $scope.weatherResult = $scope.weatherApi.get({q:$scope.city, APPID:'44db6a862fba0b067b1930da0d769e98', cnt:$scope.days});
    console.log($scope.weatherResult);
    $scope.convertToCelcuis = function(degK){
        return Math.round(degK-273.15);    
    };
    $scope.convertDate = function(dt){
      return new Date(dt * 1000);  
    };
    
     
}]);