let app = angular.module("loginApp", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "dashboard.html"
    })
    .when("/home", {
        templateUrl : "dashboard.html",
        controller: "homeCtrl"
    })
    .when("/posts", {
        templateUrl : "blog.html",
        controller: "postCtrl"
    });
});

app.controller("postCtrl", function ($scope) {
    $scope.checkLogin = function() {
        logStatus = netlifyIdentity.currentUser();
        if (logStatus == null) {
            window.location.replace('#!home');
        }
        else {
        }
      };

$scope.checkLogin();
});

app.controller("homeCtrl", function ($scope) {
    $scope.writeLogStatus = function() {
        logStatus = netlifyIdentity.currentUser();
        if (logStatus == null) {
            let y = "&nbspare not logged in. Please log in to continue.";
            document.getElementById("statusText").innerHTML = y;
        }
        else {
            let y = "&nbspare logged in.";
            document.getElementById("statusText").innerHTML = y;
        }
      };

$scope.writeLogStatus();
});

netlifyIdentity.on('init', () => {
  initUser = netlifyIdentity.currentUser();
});

netlifyIdentity.on('login', () => {
    if (initUser != null) {
        window.location.replace('#!posts');
    }
    netlifyIdentity.close();
  });

  netlifyIdentity.on('logout', () => {
    if (initUser == null) {
        window.location.replace('#!home');
    }
    netlifyIdentity.close();
  });
