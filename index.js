netlifyIdentity.on('init', () => {
  initUser = netlifyIdentity.currentUser();
});
netlifyIdentity.on('login', () => {
    if (initUser == null) {
        // window.location.replace('blog');
        window.location.replace("https://navid-login-test.netlify.app/blog.html")
    }
    else if (window.location.href === "https://navid-login-test.netlify.app/blog.html") {
        console.log(test);
    }
    netlifyIdentity.close();

  });