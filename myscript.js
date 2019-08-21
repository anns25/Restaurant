console.log("connected");
var nav = document.getElementById('navbar-font');
  window.scroll = function(){
    if (window.pageYOffset > 5) {
    	nav.style.background = "#5e2706";
    }
    else{
    	nav.style.background = "transparent";
    }
  }