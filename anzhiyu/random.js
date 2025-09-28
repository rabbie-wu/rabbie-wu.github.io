var posts=["2025/09/28/hello-world/","2025/09/28/这是一篇新的博文/","2025/09/28/My-New-Post/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };