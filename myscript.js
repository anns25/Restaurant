console.log("connected");
var nav = document.getElementById('navbar-style');
  window.onscroll = function(){
    if (window.pageYOffset > nav.offsetTop) {
		nav.classList.add("sticky");
    }
  }
