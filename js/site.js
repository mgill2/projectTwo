// Tell jQuery to give up the dollar sign
$.noConflict();

// jQuery 3.x-style ready event and locally scoped $
jQuery(function($) {
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');
});



$('#login').on('submit', function(e){
if (user === '' || password === '') {
  alert('This field cannot be left blank!');
  //when working send the user to the landing.html page
  window.location.replace('landing.html');
}else{ 
	console.log('bad username or password');

	}
});  


$(document).ready(function() {
  $("select").change(function() {
    var classes = $(this).val();
    if (classes == "Advanced Architecture") {
      $(".box").not(".adv").hide();
      $(".adv").show();
    } else if (classes == "Architecture and Urbanism") {
      $(".box").not(".urb").hide();
      $(".urb").show();
    } else if (classes == "Art and Architectural History") {
      $(".box").not(".art").hide();
      $(".art").show();
    } else if (classes == "Biology") {
      $(".box").not(".bio").hide();
      $(".bio").show();
    } else if (classes == "Biomedical Engineering") {
      $(".box").not(".biomed").hide();
      $(".biomed").show();
    } else if (classes == "Business") {
      $(".box").not(".bus").hide();
      $(".bus").show();
    } else if (classes == "Economics") {
      $(".box").not(".eco").hide();
      $(".eco").show();
    } else {
      $(".box").hide();
    }
  });
});
$.noConflict();

// jQuery 3.x-style ready event and locally scoped $
jQuery(function($) {
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');
});

// Tell jQuery to give up the dollar sign
$.noConflict();

// jQuery 3.x-style ready event and locally scoped $
jQuery(function($) {
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');
});