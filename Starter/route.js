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