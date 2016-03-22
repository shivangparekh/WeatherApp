weatherApp.service('location', function(){
    this.city = '';
});

weatherApp.service('getWeather', ['resource', function(count, appid, days){
    this.getWeather = function(){
       $resource("http://api.openweathermap.org/data/2.5/forecast?", {callback: "JSON_CALLBACK"}, {get:{method: "JSONP"}});  
       return weatherApi.get({cnt:days, APPID:'b1b15e88fa797225412429c1c50c122a', q:city});
   };  
}]); 