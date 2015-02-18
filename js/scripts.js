jQuery(document).ready(function($) {

//////////////////////////////////////////////////
// GLOBAL VARIABLES


//////////////////////////////////////////////////
// FUNCTIONS

(function(d, s, id) {
	var js, fjs = d.getElementsByTagName(s)[0];
	if (d.getElementById(id)) return;
	js = d.createElement(s); js.id = id;
	js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&appId=85034356421&version=v2.0";
	fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

//////////////////////////////////////////////////
// EXECUTION CODE

$('.bxslider').bxSlider({
	controls: true,
	auto: true,
	autoControls: true,
	slideWidth: 702
});

$('.bxsliderLW').bxSlider({
  minSlides: 3,
  maxSlides: 4,
  slideWidth: 161,
  slideMargin: 10,
  auto: true,
  autoControls: true
  // nextSelector: '.prev',
  // prevSelector: '.next'
  // nextText: 'Onward →',
  // prevText: '← Go back'
});

//////////////////////////////////////////////////

});  //end doc.onready function
