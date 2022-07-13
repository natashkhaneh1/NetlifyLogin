netlifyIdentity.on('init', () => {
  initUser = netlifyIdentity.currentUser();
});
netlifyIdentity.on('login', () => {
    if (initUser == null) {
        // window.location.replace('blog');
        window.location.replace("blog.html");
    }
    netlifyIdentity.close();
  });