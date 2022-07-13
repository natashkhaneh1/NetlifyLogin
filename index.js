let app = angular.module("loginApp", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "dashboard.html"
    })
    .when("/home", {
        templateUrl : "dashboard.html"
    })
    .when("/posts", {
        templateUrl : "blog.html"
    });
});

netlifyIdentity.on('init', () => {
  initUser = netlifyIdentity.currentUser();
  debugger;
});

netlifyIdentity.on('login', () => {
    if (initUser != null) {
        window.location.replace('#!posts');
    }
    netlifyIdentity.close();
  });

  function checkLogin() {
    debugger;
    logStatus = netlifyIdentity.currentUser();
    if (logStatus == null) {
        window.location.replace('#!home');
        console.log('not logged in')
    }
    else {
        console.log('logged in');
    }
  }

  window.onload = checkLogin();


