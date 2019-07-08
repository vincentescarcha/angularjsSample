// Code goes here
//IIFE imediately invoke function expression
(function() {

  var app = angular.module("githubViewer", [])

  var MainController = function($scope, $http) {
    //var person = { //object literal syntax
    //  firstName: "Scott",
    //  lastName: "Allen",
    //  imageSrc: "https://odetocode.com/images/scott_allen_2.jpg"
    //};
    //$scope.person = person;
    var onUserComplete = function(response){
      $scope.user = response.data;
    };
    
    var onError = function(reason){
      $scope.error = "Could not fetch the user";
      //debugger;
    };

    $http.get("https://api.github.com/users/vincentescarcha")
      .then(onUserComplete,onError);

    $scope.message = "hello world";
    
  }

  app.controller("MainController", MainController);

  var createWorker = function() {
    var workCount = 0;

    var task1 = function() {
      workCount += 1;
      console.log("task1 " + workCount);
    };

    var task2 = function() {
      workCount += 1;
      console.log("task2 " + workCount);
    };

    return {
      job1: task1,
      job2: task2
    };
  };

  var worker = createWorker();
  worker.job1();
  worker.job2();
  worker.job2();
  worker.job2();
}());