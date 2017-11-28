// Back to top
	function topFunction() {
    	document.body.scrollTop = 0; // For Chrome, Safari and Opera 
    	document.documentElement.scrollTop = 0; // For IE and Firefox
	}
// Play sound
	function playSound() {
          var sound = document.getElementById("audio");
          sound.play();
    }
// Click counter
    var clicks = 0;
    function onClick() {
        clicks += 1;
        document.getElementById("clicks").innerHTML = clicks;
    };

$(document).ready(function(){
	// Make text larger
	$('#button-1').click(function() {
		$(this).animate({
			fontSize: '333px',
		}, 1000 );
	});
	// Change background color
	$('#button-2').click(function() {
		$(this).animate({
			fontSize: '333px',
		}, 1000 );
		$(this).css("background-color","red")
	});
	// Change background opacity
	$('#button-3').click(function() {
		$(this).animate({
			fontSize: '333px',
			opacity: 0.5,
		}, 1000 );
		$(this).css("background-color","red")
	});
	// Change height
	$('#button-4').click(function() {
		$(this).animate({
			fontSize: '333px',
			height: '50%',
		}, 1000 );
	});
	// Change width
	$('#button-5').click(function() {
		$(this).animate({
			fontSize: '333px',
			width: '9%',
		}, 1000 );
	});
	// "Fade out"
	$('#button-6').click(function() {
		$(this).animate({
			fontSize: '333px',
			opacity:0,
		}, 1000 );
	}); 
	// Pop up
	$('#button-7').click(function() {
		$(this).animate({
			fontSize: '333px',
		}, 3000 );
		alert("7 IS A LUCKY NUMBER.");
	});
	// Make new text appear
	$('#button-8').click(function() {
		$(this).text(":)");
		$(this).css("font-family","helvetica, arial, sans-serif")
		$(this).css("font-weight","bold")
		$(this).css("font-size","12em")
		$(this).css("text-align","center")
		$(this).css("vertical-align","middle")
	});
    // Round corners
    $('#button-9').click(function () {
		  $(this).css({
		    borderTopLeftRadius: 0, 
		    borderTopRightRadius: 0, 
		    borderBottomLeftRadius: 0, 
		    borderBottomRightRadius: 0,
		    WebkitBorderTopLeftRadius: 0, 
		    WebkitBorderTopRightRadius: 0, 
		    WebkitBorderBottomLeftRadius: 0, 
		    WebkitBorderBottomRightRadius: 0, 
		    MozBorderRadius: 0 
		  })
		  $(this).animate({
		    borderTopLeftRadius: 135, 
		    borderTopRightRadius: 135, 
		    borderBottomLeftRadius: 135, 
		    borderBottomRightRadius: 135,
		    WebkitBorderTopLeftRadius: 135, 
		    WebkitBorderTopRightRadius: 135, 
		    WebkitBorderBottomLeftRadius: 135, 
		    WebkitBorderBottomRightRadius: 135, 
		    MozBorderRadius: 135, 
		   	fontSize: '333px',
		  }, 1000); 
	});
	// Border style
	$("#button-10").click(function () {
		  $(this).css("box-shadow", "inset 0px 0px 0px 10px red")
		  $(this).animate({
		   	fontSize: '333px',
		  }, 1000); 
	});
	// Make text larger with doubleclick
	$('#button-11').dblclick(function() {
		$(this).animate({
			fontSize: '333px',
		}, 1000 );
	});
	// Make text larger with hover
	$('#button-12').mouseover(function() {
		$(this).animate({
			fontSize: '333px',
		}, 1000 );
	});
	// Change cursor
	$('#button-13').click(function() {
		$(this).animate({
			fontSize: '333px',
		}, 1000 );
		$(this).css('cursor','crosshair');
	});
	// Move left & right
    $( "#right" ).click(function() {
  		$( ".container" ).animate({ "left": "+=100px" }, "slow" );
	});
	$( "#left" ).click(function(){
  		$( ".container" ).animate({ "left": "-=100px" }, "slow" );
	});
	// Move up & down
    $( "#up" ).click(function() {
  		$( ".container" ).animate({ "top": "-=100px" }, "slow" );
	});
	$( "#down" ).click(function(){
  		$( ".container" ).animate({ "top": "+=100px" }, "slow" );
	});
	// Lights on
	$('#button-16').click(function() {
		$('body').css('background-color', 'white')
	});
	// Lights off
	$('#button-17').click(function() {
		$('body').css('background-color', 'black')
	});
	// Hightlight
	$('#button-18').click(function() {
		$('h1').css('background-color', 'yellow')
		$('p').css('background-color', 'yellow')
		$('button').css('background-color', 'yellow')
	});
	// Deselect
	$('#button-19').click(function() {
		$('h1').css('background-color', 'transparent')
		$('p').css('background-color', 'transparent')
		$('button').css('background-color', 'transparent')
	});
	// Change cursor
	$('#button-23').click(function() {
		$(this).animate({
			fontSize: '333px',
		}, 20000 );
		$(this).css('cursor','wait');
	});

	// Draggable
	$( function() {
		$("#button-24").draggable();
	} );
	// Bounce
	$('#button-25').click(function(){
    	$(this).effect("bounce", { times:3 }, 2000);
	});
	// Zoom out
	$('#button-26').click(function(){
    	$("#button-26").effect("scale", {percent: 50}, 2000);
	});
	// Zoom in
	$('#button-27').click(function(){
    	$("#button-27").effect("scale", {percent: 200}, 2000);
	});
	// Shake
	$('#button-28').click(function(){
    	$("#button-28").effect("shake", { times:3 }, 500);
	});
	// Fold
	$('#button-29').click(function(){
    	$("#button-29").effect("fold", {horizFirst: true}, 2000);
	});
	// Transfer
	$("div.green").click(function () {
        var i = 1 - $("div.green").index(this);
        $(this).effect("transfer",{ to: $("div").eq(i) }, 1000);
    });
    // Change cursor
	$('#button-33').click(function() {
		$(this).animate({
			fontSize: '333px',
		}, 1000 );
		$(this).css('cursor','help');
	});
	// Resize
	$(function() {
        $( "#resizable" ).resizable();
    });
	// Explode
	$('#button-35').click(function(){
    	$("#button-35").css("background-color","yellow")
    	$("#button-35").effect("explode", 3000);
	});
	// Change typeface
	$('#button-36').click(function() {
		$('h1').css("font-family", "Comic Sans MS")
	});
	// Change font size
  	$('#button-37').click(function() {
		$('h1').animate({
			fontSize: '20px',
		}, 1000 );
	});
  	// Remove title
  	$('#button-38').click(function() {
		$('#title').hide()
	});
	// Show
	$("#show").click(function () {
        $(".mydiv").show( 1000 );
    });
    $("#hide").click(function () {
        $(".mydiv").hide( 1000 );
    });
	// Clip
	$('#button-40').click(function(){
		$(this).animate({
			fontSize: '333px',
		}, 1000 );
    	$("#button-40").effect("clip", 1000);
	});
	// Puff
	$('#button-41').click(function(){
		$("#button-41").css("background-color","red")
    	$("#button-41").effect("puff", 2000);
	});
	// Pulsate
	$('#button-44').click(function(){
		$("#button-44").css("background-color","yellow")
    	$("#button-44").effect("pulsate", 500);
    });
	// Hide
	$('#button-45').click(function() {
		$(this).hide()
	});
	// Print
	$('#button-46').click(function() {
    	window.print();
	});
	// Close tab
	$('#button-50').click(function closeWin() {
    	window.top.close();
	});
});











