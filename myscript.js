console.log("connected");

/***** STICKY NAVABAR *****/

/*var nav = document.getElementById('navbar-style');
  window.onscroll = function(){
    if (window.pageYOffset > nav.offsetTop) {
		nav.classList.add("sticky");
    }
  }

  */
 $(document).ready(function(){
 	$(window).scroll(function(){
 		if($(window).scrollTop() > $('#navbar-style').offset().top)
 			$('#navbar-style').addClass('sticky');
 	});
});
 