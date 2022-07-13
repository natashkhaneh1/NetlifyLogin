netlifyIdentity.on('init', () => {
    initUser = netlifyIdentity.currentUser();
  });
netlifyIdentity.on('login', () => {
    if (initUser == null) {
        window.location.replace('blog');
    }
    netlifyIdentity.close();
  });