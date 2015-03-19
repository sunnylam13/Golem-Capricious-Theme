jQuery(document).ready(function($) {

//////////////////////////////////////////////////
// GLOBAL VARIABLES


//////////////////////////////////////////////////
// FUNCTIONS

////////////////////////////////////////////
/////     FACEBOOK COMMENTS FOR POSTS
///////////////////////////////////////////////

(function(d, s, id) {
	var js, fjs = d.getElementsByTagName(s)[0];
	if (d.getElementById(id)) return;
	js = d.createElement(s); js.id = id;
	js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&appId=85034356421&version=v2.0";
	fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

// END FACEBOOK COMMENTS FOR POSTS

function checkIfActiveClass (thisEntry) {
  // $activeList = $('a.filter').value();
  // // $.each($activeList, function(index, val) {
  // //   if (val='active') {
  // //     $this.
  // //   }
  // // });
  // $this.addClass('active');
  $('ul.filtering-nav li a.filter').each(function (index, el) {
    if (thisEntry.is('.active')) {
      thisEntry.removeClass('active');
    };
  });
}

// Use return false to break out of each() loops early
// $('button.ex4').click(function(event) {
//   $('div.ex4').each(function(index, el) {
//     // element == this
//     $(this).css('backgroundColor', 'yellow');

//     if ($(this).is('#stop')) {
//       $('span').text("Stopped at div index #" + index);
//       return false; // this breaks the loop once we find the correct span
//     };
//   });
// });


////////////////////////////////////////////
/////     TOGGLE BOXES ON FEATURES PAGES
///////////////////////////////////////////////

function toggleBoxClick () {
  $('h2.trigger').click(function() {
    $(this).siblings('.toggleBox').toggle('slow');
  });
}

//////////////////////////////////////////


//////////////////////////////////////////////////
// EXECUTION CODE

////////////////////////////////////////////
/////     IMAGE SLIDER FOR HOME WITH CAROUSEL
///////////////////////////////////////////////

$('.bxslider').bxSlider({
	controls: true,
	auto: true,
	autoControls: true,
	slideWidth: 702
});

// END IMAGE SLIDER FOR HOME WITH CAROUSEL

////////////////////////////////////////////
/////     LATEST WORKS IMAGE SLIDER
///////////////////////////////////////////////

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

// END LATEST WORKS IMAGE SLIDER

////////////////////////////////////////////
/////     PORTFOLIO FILTER
///////////////////////////////////////////////

$("a.all").on('click', function() {
  // if (!$(this).hasClass('active')) {
  //   // $('a.filter').removeClass('active');
  //   $(this).addClass('active');
  // }
  // checkIfActiveClass($(this));
  $(this).toggleClass('active');
  $('.portWeb').show("fast");
  $('.portPhoto').show("fast");
  $('.portGraphic').show("fast");
  $('.portVideo').show("fast");
});

$("a.web").on('click', function() {
  // if (!$this.hasClass('active')) {
  //   $('.filter').removeClass('active');
  //   $this.addClass('active');
  // }
  // checkIfActiveClass($(this));
  $(this).toggleClass('.active');
  $('.portWeb').show("fast");
  $('.portPhoto').hide("fast");
  $('.portGraphic').hide("fast");
  $('.portVideo').hide("fast");
});

$("a.photo").on('click', function() {
  // if (!$this.hasClass('active')) {
  //   $('.filter').removeClass('active');
  //   $this.addClass('active');
  // }
  // checkIfActiveClass($(this));
  $(this).toggleClass('active');
  $('.portWeb').hide("fast");
  $('.portPhoto').show("fast");
  $('.portGraphic').hide("fast");
  $('.portVideo').hide("fast");
});

$("a.graphic").on('click', function() {
  // if (!$this.hasClass('active')) {
  //   $('.filter').removeClass('active');
  //   $this.addClass('active');
  // }
  // checkIfActiveClass($(this));
  $(this).toggleClass('active');
  $('.portWeb').hide("fast");
  $('.portPhoto').hide("fast");
  $('.portGraphic').show("fast");
  $('.portVideo').hide("fast");
});

$("a.video").on('click', function() {
  // if (!$this.hasClass('active')) {
  //   $('.filter').removeClass('active');
  //   $this.addClass('active');
  // }
  // checkIfActiveClass($(this));
  $(this).toggleClass('active');
  $('.portWeb').hide("fast");
  $('.portPhoto').hide("fast");
  $('.portGraphic').hide("fast");
  $('.portVideo').show("fast");
});


// END PORTFOLIO FILTER

// enable toggleBox click on the Features pages
toggleBoxClick();


//////////////////////////////////////////////////

});  //end doc.onready function
