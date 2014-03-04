$(document).ready(function() {
  $('.ryu').mouseenter(function() {
   $('.ryu-still').hide();
   $('.ryu-ready').show();
   })
  .mouseleave(function() {
    $('.ryu-ready').hide();
    $('.ryu-still').show();
  })
  .mousedown(function() {
     playHadouken();    
	  $('.ryu-ready').hide();
	  $('.ryu-throwing').show();
	  $('.hadouken').finish().toggleClass('throwing')
		.animate(
		   {'left': '300px'},
		    500,
		    function() {
		      $(this).toggleClass('throwing').css('left', '-212px');   
		    }
		 );
  })
  .mouseup(function() {
	  $('.ryu-throwing').hide();
	  $('.ryu-ready').show();
  });
   
});

	function playHadouken () {
	  $('#hadouken-sound')[0].volume = 0.1;
	  $('#hadouken-sound')[0].load();
	  $('#hadouken-sound')[0].play();
	}

	$(document).keydown(function(e) {
	    if(e.which == 88) {
	      $('.ryu-throwing').hide();
	      $('.ryu-still').hide();
	      $('.ryu-ready').hide();
	      $('.ryu-cool').show();
		 }
	  });
	 
	$(document).keyup(function(e) {
	    if(e.which == 88) {
	      $('.ryu-throwing').hide();
	      $('.ryu-ready').hide();
	      $('.ryu-cool').hide();
	      $('.ryu-still').show();
		 }
  });


  