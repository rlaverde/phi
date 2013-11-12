/*-----------------------------------------------------------------------------------*/
/*	BUTTON HOVER
/*-----------------------------------------------------------------------------------*/

jQuery(document).ready(function($)  {
	$("a.button, .forms fieldset .btn-submit, #commentform input#submit").css("opacity","1.0");
	$("a.button, .forms fieldset .btn-submit, #commentform input#submit").hover(function () {
		$(this).stop().animate({ opacity: 0.85 }, "fast");  },
		function () {
		$(this).stop().animate({ opacity: 1.0 }, "fast");  
	});
	
	$('#runButton').click(function(){
		Turtle.runButtonClick();
		return false;
	});
	$('#resetButton').click(function(){
		Turtle.resetButtonClick();
		return false;
	});
	$('#viewCode').click(function(){
		BlocklyApps.showCode();
		return false;
	});
	$('#linkButton').click(function(){
		BlocklyStorage.link();
		return false;
	});
	$('#captureButton').click(function(){
		Turtle.createImageLink();
		return false;
	});
	
	
});

/*-----------------------------------------------------------------------------------*/
/*	MENU
/*-----------------------------------------------------------------------------------*/
ddsmoothmenu.init({
	mainmenuid: "menu",
	orientation: 'h',
	classname: 'menu',
	contentsource: "markup"
})