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

var bookMarksList = [
    {
        "id":1,
        "name":"Google",
        "url":"http://www.google.com",
        "tags":["google", "search", "find"]
    },
    {
        "id":2,
        "name":"Youtube",
        "url":"http://www.youtube.com",
        "tags":["google", "video"]
    },
    {
        "id":3,
        "name":"Prime Video",
        "url":"http://www.primevideo.com",
        "tags":["amazon", "video"]
    },
    {
        "id":4,
        "name":"Prime Video",
        "url":"http://www.primevideo.com",
        "tags":["amazon", "video"]
    },
    {
        "id":5,
        "name":"Prime Video",
        "url":"http://www.primevideo.com",
        "tags":["amazon", "video"]
    },
    {
        "id":6,
        "name":"Prime Video",
        "url":"http://www.primevideo.com",
        "tags":["amazon", "video"]
    },
    {
        "id":7,
        "name":"Prime Video",
        "url":"http://www.primevideo.com",
        "tags":["amazon", "video"]
    },
]