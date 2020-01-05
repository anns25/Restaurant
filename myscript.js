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

 $('#hamburger-click').click(function(){
 	$('#navbarSupportedContent').fadeToggle(500);
 })
 
if($(window).width() < 992) {
 	$('#contact .box').removeClass('ml-auto mr-auto ml-5 mr-5');
  }
 else{
 	$('#contact .box').addClass('ml-auto mr-auto ml-5 mr-5');
 }
