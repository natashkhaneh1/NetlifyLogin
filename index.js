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
});
netlifyIdentity.on('login', () => {
    if (initUser == null) {
        window.location.replace('#!posts');
    }
    netlifyIdentity.close();
  });


  
  function checkLogin() {
    logStatus = netlifyIdentity.currentUser();
    if (logStatus == null) {
        console.log('not logged in')
        window.location.replace('#!home');
    }
    else {
        console.log('logged in');
    }
  }
  window.onload = checkLogin;


