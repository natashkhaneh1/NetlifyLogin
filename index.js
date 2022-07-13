netlifyIdentity.on('init', () => {
  initUser = netlifyIdentity.currentUser();
});
netlifyIdentity.on('login', () => {
    if (initUser == null) {
        // window.location.replace('blog');
        window.location.replace("navid-login-test.netlify.app/blog.html");
    }
    netlifyIdentity.close();
  });