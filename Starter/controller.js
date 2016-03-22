weatherApp.controller('homeController',['$scope', '$location','location', function($scope, $location, location){
    $scope.city = location.city;
    $scope.$watch('city',function(){
       location.city = $scope.city; 
    });
    $scope.submit = function(){
        $location.path("/forcast");
    };
    
}]);

weatherApp.controller('forcastController',['$scope', '$resource', '$routeParams', 'location', function($scope, $resource, $routeParams, location){
    $scope.city = location.city;
    $scope.APPID = 'b1b15e88fa797225412429c1c50c122a';
    $scope.days = ($routeParams.days || 2);
    $scope.weatherApi = $resource("http://api.openweathermap.org/data/2.5/forecast?", {callback: "JSON_CALLBACK"}, {get:{method: "JSONP"}});
    $scope.weatherResult = $scope.weatherApi.get({cnt:$scope.days, APPID:'b1b15e88fa797225412429c1c50c122a', q:$scope.city});
    console.log($scope.weatherResult);
    $scope.convertToCelcuis = function(degK){
        return Math.round(degK-273.15);    
    };
    $scope.convertDate = function(dt){
      return new Date(dt * 1000);  
    };
    
     
}]);