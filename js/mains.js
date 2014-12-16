var gitHubApp = angular.module('gitHubApp', []);

gitHubApp.controller('gitHubController', ['$scope', 'gitHubService', function($scope, gitHubService){
      $scope.results= [];

      $scope.displayInfo = function() {
        gitHubService.getUrl($scope.search)
        .success( function(data, status){
          console.log(data.total_count +" and "+ status);
            if(data.total_count >=1){
              $scope.statusDisplay = "Displaying Result";
              $scope.results= [];
              angular.forEach( data.items, function( users, index ){
                console.log($scope.results);
                $scope.search="";
                $scope.results.push( users );
            });
          }else {
            $scope.results= [];
             $scope.statusDisplay = "ERROR NAME NOT FOUND";
            
          };
        })
        .error( function( data, status ) {
           $scope.statusDisplay = "Cannot Be processed at the Moment. Check your Internet Connection ERROR:"+ status;
          $scope.results= [];
        });
      }

}]);

gitHubApp.factory('gitHubService', function($http){
      
    var url = "https://api.github.com/search/users?";
    var Info = {};

    Info.getUrl = function( query ){
      return $http.get( url, { params: { q: query, order:"desc", sort:"joined" }});
   };
   
    return Info;
});