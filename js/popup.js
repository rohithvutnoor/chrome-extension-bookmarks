var app = angular.module("myApp", []);
app.controller("myCtrl", function($scope, $http, $window) {
          $scope.bookMarks = bookMarksList;
          $scope.showList = false;
          $scope.showValues = function(){
            $scope.showList = true;//$scope.searchText.length < 1 ? false : true;
          }
          $scope.openLink = function(url){
            $window.open(url, "_blank");
          }
});