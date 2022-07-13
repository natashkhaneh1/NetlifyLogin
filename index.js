netlifyIdentity.on('login', () => {
    if (initUser == null) {
        window.location.replace('navid-login-test.netlify.app/blog.html');
    }
    netlifyIdentity.close();
  });