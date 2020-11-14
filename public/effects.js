// Plays sounds on hover
$("input").on("mouseenter", function(){
	$("#sound").attr({ 
        'src':'media/point.mp3', 
		'autoplay':'autoplay'
	})
});