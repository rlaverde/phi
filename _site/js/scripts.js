/*-----------------------------------------------------------------------------------*/
/*	BUTTON HOVER
/*-----------------------------------------------------------------------------------*/

jQuery(document).ready(function($)  {
	$("a.button, .forms fieldset .btn-submit, #commentform input#submit").css("opacity","1.0");
	$("a.button, .forms fieldset .btn-submit, #commentform input#submit").hover(
		function () {
			$(this).stop().animate({ opacity: 0.9 }, "fast");  
		},
		function () {
			$(this).stop().animate({ opacity: 1.0 }, "fast");  
	});
	
	$('#runButton').click(function(){
		console.log('Init count');
		window['time'] = new Date().getTime();
		window['copytime'] = 0;
		Turtle.runButtonClick();
		return false;
	});
	$('#runStepButton').click(function(){
		console.log('Init count');
		window['time'] = new Date().getTime();
		window['copytime'] = 0;
		Turtle.runStepButtonClick();
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
	
	Blockly.resizeBlockly = function(){
		window.width_old = 0;
  		window.height_old = 0;
		Turtle.onresize();
		Blockly.svgResize();
		Blockly.Toolbox.position_();
		Blockly.mainWorkspace.trashcan.position_()
	};
	
	$('#controls-1-1').click(function(){
		$('#control-left').removeClass( 'one-half one-third two-third');
		$('#control-right').removeClass('one-half one-third two-third last');
		$('#control-left').addClass('one-half');
		$('#control-right').addClass('one-half last');
		Blockly.resizeBlockly();
		return false;
	}); 
	
	$('#controls-1-2').click(function(){
		$('#control-left').removeClass( 'one-half one-third two-third');
		$('#control-right').removeClass('one-half one-third two-third last');
		$('#control-left').addClass('one-third');
		$('#control-right').addClass('two-third last');
		Blockly.resizeBlockly();
		return false;
	});
	
	$('#controls-2-1').click(function(){
		$('#control-left').removeClass( 'one-half one-third two-third');
		$('#control-right').removeClass('one-half one-third two-third last');
		$('#control-left').addClass('two-third');
		$('#control-right').addClass('one-third last');
		Blockly.resizeBlockly();
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