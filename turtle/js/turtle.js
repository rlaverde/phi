/**
 * Blockly Demo: Turtle Graphics
 *
 * Copyright 2012 Google Inc.
 * http://blockly.googlecode.com/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Demonstration of Blockly: Turtle Graphics.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

/**
 * Create a namespace for the application.
 */
var Turtle = {};

/*document.write(turtlepage.start({}, null,
    {MSG: MSG}));*/

Turtle.HEIGHT = 400;
Turtle.WIDTH = 400;

Turtle.stepExecution = false;

/**
 * PID of animation task currently executing.
 */
Turtle.pid = 0;

/**
 * Should the turtle be drawn?
 */
Turtle.visible = true;

/**
 * Initialize Blockly and the turtle.  Called on page load.
 */
Turtle.init = function() {
  // inicio BlocklyApps
   
  // Set the HTML's language and direction.
  // document.dir fails in Mozilla, use document.body.parentNode.dir instead.
  // https://bugzilla.mozilla.org/show_bug.cgi?id=151407
  var rtl = BlocklyApps.isRtl();
  document.head.parentElement.setAttribute('dir', rtl ? 'rtl' : 'ltr');
  document.head.parentElement.setAttribute('lang', BlocklyApps.LANG);

  // Disable the link button if page isn't backed by App Engine storage.
  var linkButton = document.getElementById('linkButton');
  if ('BlocklyStorage' in window) {
    BlocklyStorage['HTTPREQUEST_ERROR'] =
        BlocklyApps.getMsg('httpRequestError');
    BlocklyStorage['LINK_ALERT'] = BlocklyApps.getMsg('linkAlert');
    BlocklyStorage['HASH_ERROR'] = BlocklyApps.getMsg('hashError');
    BlocklyStorage['XML_ERROR'] = BlocklyApps.getMsg('xmlError');
    // Swap out the BlocklyStorage's alert() for a nicer dialog.
    BlocklyStorage.alert = BlocklyApps.storageAlert;
    BlocklyApps.bindClick('linkButton', BlocklyStorage.link);
  } else if (linkButton) {
    linkButton.className = 'disabled';
  }

  if (document.getElementById('codeButton')) {
    BlocklyApps.bindClick('codeButton', BlocklyApps.showCode);
  }

  // Fixes viewport for small screens.
  var viewport = document.querySelector('meta[name="viewport"]');
  if (viewport && screen.availWidth < 725) {
    viewport.setAttribute('content',
        'width=725, initial-scale=.35, user-scalable=no');
  }
   
    
  // Fin BlocklyApps
   
    
   
  // document.dir fails in Mozilla, use document.body.parentNode.dir instead.
  // https://bugzilla.mozilla.org/show_bug.cgi?id=151407
  var rtl = BlocklyApps.isRtl();
  var toolbox = document.getElementById('toolbox');
  Blockly.inject(document.getElementById('blockly'),
      {path: 'js/',
       rtl: rtl,
       toolbox: toolbox,
       trashcan: true});

  Blockly.JavaScript.INFINITE_LOOP_TRAP = '  BlocklyApps.checkTimeout(%1);\n';

  // Add to reserved word list: API, local variables in execution evironment
  // (execute) and the infinite loop detection function.
  Blockly.JavaScript.addReservedWords('Turtle,code');

  window.addEventListener('beforeunload', function(e) {
    if (Blockly.mainWorkspace.getAllBlocks().length > 2) {
      e.returnValue = BlocklyApps.getMsg('Turtle_unloadWarning');  // Gecko.
      return BlocklyApps.getMsg('Turtle_unloadWarning');  // Webkit.
    }
    return null;
  });
  
  window.width_old = 0;
  window.height_old = 0;
  
  Turtle['onresize'] = function(e) {
  	if((window.width_old != window.innerWidth) || (window.height_old != window.innerHeight)){
	  	console.log('Resize');
	  	
	  	var blocklyEl = document.getElementById('blockly');
	  	var canvasDisplayEl = document.getElementById('display');
	  	var canvasScratchEl = document.getElementById('scratch');
	  	var controlLeft = document.getElementById('control-left');
	  	var controlRight = document.getElementById('control-right');
	  	var ctxDisplayEl = canvasDisplayEl.getContext('2d');
	  	var ctxScratchEl = canvasScratchEl.getContext('2d');
	  	var canTam = controlLeft.offsetWidth;
	  	
	  	ctxDisplayEl.canvas.height = canTam;
	    ctxDisplayEl.canvas.width = canTam;
	    ctxScratchEl.canvas.height = canTam;
	    ctxScratchEl.canvas.width = canTam;
	    
	    Turtle.WIDTH = canTam;
	    Turtle.HEIGHT = canTam;
	    
	    if(Turtle.ctxDisplay){
	    	Turtle.reset();
	    }
	    
	    blocklyEl.style.width = controlRight.offsetWidth + 'px';
	    blocklyEl.style.height = ((controlLeft.offsetHeight > window.innerHeight) ? controlLeft.offsetHeight : (window.innerHeight - 50)) + 'px';
	    
	    window.width_old = window.innerWidth;
  		window.height_old = window.innerHeight;
    }
  };
  window.addEventListener('resize', Turtle.onresize);
  Turtle.onresize();
  Blockly.fireUiEvent(window, 'resize');

 if (!(goog.userAgent.GECKO ||
       (goog.userAgent.WEBKIT && !goog.userAgent.SAFARI))) {
    document.getElementById('captureButton').className = 'disabled';
  } else {
    BlocklyApps.bindClick('captureButton', Turtle.createImageLink);
  }
 
// Initialize the slider.
  var sliderSvg = document.getElementById('slider');
  Turtle.speedSlider = new Slider(10, 35, 130, sliderSvg);

  var defaultXml =
      '<xml>' +
      '  <block type="draw_move" x="70" y="70">' +
      '    <value name="VALUE">' +
      '      <block type="math_number">' +
      '        <title name="NUM">100</title>' +
      '      </block>' +
      '    </value>' +
      '  </block>' +
      '</xml>';
  BlocklyApps.loadBlocks(defaultXml);

  Turtle.ctxDisplay = document.getElementById('display').getContext('2d');
  Turtle.ctxScratch = document.getElementById('scratch').getContext('2d');
  Turtle.reset();
	

 
  window.setTimeout(BlocklyApps.importPrettify, 1);
  /*
   if (!('BlocklyStorage' in window)) {
    document.getElementById('linkButton').className = 'disabled';
  }*/
 
  };

window.addEventListener('load', Turtle.init);

/**
 * Reset the turtle to the start position, clear the display, and kill any
 * pending tasks.
 */
Turtle.reset = function() {
// Starting location and heading of the turtle.
  Turtle.x = Turtle.HEIGHT / 2;
  Turtle.y = Turtle.WIDTH / 2;
  Turtle.heading = 0;
  Turtle.penDownValue = true;
  Turtle.visible = true;

// Clear the display.
  Turtle.ctxScratch.canvas.width = Turtle.ctxScratch.canvas.width;
  Turtle.ctxScratch.strokeStyle = '#000000';
  Turtle.ctxScratch.fillStyle = '#000000';
  Turtle.ctxScratch.lineWidth = 1;
  Turtle.ctxScratch.lineCap = 'round';
  Turtle.ctxScratch.font = 'normal 18pt Arial';
  Turtle.display();
   
  // Kill any task.
  if (Turtle.pid) {
    window.clearTimeout(Turtle.pid);
  }
  Turtle.pid = 0;
};

/**
 * Copy the scratch canvas to the display canvas. Add a turtle marker.
 */
Turtle.display = function() {

  Turtle.ctxDisplay.globalCompositeOperation = 'copy';
  Turtle.ctxDisplay.drawImage(Turtle.ctxScratch.canvas, 0, 0);
  Turtle.ctxDisplay.globalCompositeOperation = 'source-over';
	
  // Draw the turtle.
  if (Turtle.visible) {
    // Make the turtle the colour of the pen.
    Turtle.ctxDisplay.strokeStyle = Turtle.ctxScratch.strokeStyle;
    Turtle.ctxDisplay.fillStyle = Turtle.ctxScratch.fillStyle;
     
    // Draw the turtle body.
    var radius = Turtle.ctxScratch.lineWidth / 2 + 10;
    Turtle.ctxDisplay.beginPath();
    Turtle.ctxDisplay.arc(Turtle.x, Turtle.y, radius, 0, 2 * Math.PI, false);
    Turtle.ctxDisplay.lineWidth = 3;
    Turtle.ctxDisplay.stroke();

    // Draw the turtle head.
    var WIDTH = 0.3;
    var HEAD_TIP = 10;
    var ARROW_TIP = 4;
    var BEND = 6;
    var radians = 2 * Math.PI * Turtle.heading / 360;
    var tipX = Turtle.x + (radius + HEAD_TIP) * Math.sin(radians);
    var tipY = Turtle.y - (radius + HEAD_TIP) * Math.cos(radians);
    radians -= WIDTH;
    var leftX = Turtle.x + (radius + ARROW_TIP) * Math.sin(radians);
    var leftY = Turtle.y - (radius + ARROW_TIP) * Math.cos(radians);
    radians += WIDTH / 2;
    var leftControlX = Turtle.x + (radius + BEND) * Math.sin(radians);
    var leftControlY = Turtle.y - (radius + BEND) * Math.cos(radians);
    radians += WIDTH;
    var rightControlX = Turtle.x + (radius + BEND) * Math.sin(radians);
    var rightControlY = Turtle.y - (radius + BEND) * Math.cos(radians);
    radians += WIDTH / 2;
    var rightX = Turtle.x + (radius + ARROW_TIP) * Math.sin(radians);
    var rightY = Turtle.y - (radius + ARROW_TIP) * Math.cos(radians);
    Turtle.ctxDisplay.beginPath();
    Turtle.ctxDisplay.moveTo(tipX, tipY);
    Turtle.ctxDisplay.lineTo(leftX, leftY);
    Turtle.ctxDisplay.bezierCurveTo(leftControlX, leftControlY,
        rightControlX, rightControlY, rightX, rightY);
    Turtle.ctxDisplay.closePath();
    Turtle.ctxDisplay.fill();
  }
};

/**
 * Click the run button.  Start the program.
 */

Turtle.runButtonClick = function() {
  	var runButton = document.getElementById('runButton');
  	var runStepButton = document.getElementById('runStepButton');
  	var resetButton = document.getElementById('resetButton');
  	
  	// Ensure that Reset button is at least as wide as Run button.
	if (!resetButton.style.minWidth) {
		resetButton.style.minWidth = runButton.offsetWidth + 'px';
	}
  	
  	runButton.style.display = 'none';
  	runStepButton.style.display = 'none';
  	resetButton.style.display = 'inline-block';
  	
  	document.getElementById('spinner').style.display = 'inline-block';
  	Blockly.mainWorkspace.traceOn(true);
  	Turtle.stepExecution = false;
  	Turtle.execute();
};

Turtle.runStepButtonClick = function() {
	var runButton = document.getElementById('runButton');
  	var runStepButton = document.getElementById('runStepButton');
  	var resetButton = document.getElementById('resetButton');
  	
  	// Ensure that Reset button is at least as wide as Run button.
	if (!resetButton.style.minWidth) {
		resetButton.style.minWidth = runButton.offsetWidth + 'px';
	}
  	
  	runButton.style.display = 'none';
  	runStepButton.style.display = 'none';
  	resetButton.style.display = 'inline-block';
  	
  	document.getElementById('spinner').style.display = 'inline-block';
  	Blockly.mainWorkspace.traceOn(true);
  	Turtle.stepExecution = true;
  	Turtle.execute();
};

/**
 * Click the reset button.  Reset the Turtle.
 */
Turtle.resetButtonClick = function() {
  document.getElementById('runButton').style.display = 'inline-block';
  document.getElementById('runStepButton').style.display = 'inline-block';
  document.getElementById('resetButton').style.display = 'none';
  document.getElementById('spinner').style.display = 'none';
  Blockly.mainWorkspace.traceOn(false);
  document.getElementById('counter').innerHTML='0 pasos';
  Turtle.reset();
};

/**
 * Execute the user's code.  Heaven help us...
 */
Turtle.execute = function() {
  BlocklyApps.log = [];
  BlocklyApps.ticks = 1000000;
  Turtle.count = 0;

  var code = Blockly.JavaScript.workspaceToCode();
  try {
    eval(code);
  } catch (e) {
    // Null is thrown for infinite loop.
    // Otherwise, abnormal termination is a user error.
    if (e !== Infinity) {
      alert(e);
    }
  }

  // BlocklyApps.log now contains a transcript of all the user's actions.
  // Reset the graphic and animate the transcript.
 Turtle.reset();
 Turtle.pid = window.setTimeout(Turtle.animate, 100);
};

/**
 * Iterate through the recorded path and animate the turtle's actions.
 */
Turtle.animate = function() {
// All tasks should be complete now.  Clean up the PID list.
  Turtle.pid = 0;

 var tuple = BlocklyApps.log.shift();
  if (!tuple) {
    document.getElementById('spinner').style.display = 'none';
    Blockly.mainWorkspace.highlightBlock(null);
    var stepText=(Turtle.count == 1)? 'paso': 'pasos';	
    document.getElementById('counter').innerHTML=Turtle.count+' '+stepText;
    
    return;
  }
  var command = tuple.shift();
  if(Turtle.stepExecution){
  	BlocklyApps.highlight(tuple.pop()); //Metodo de alto coste
  }
  Turtle.step(command, tuple);
  Turtle.display();

  // Scale the speed non-linearly, to give better precision at the fast end.
  var stepSpeed = 1000 * Math.pow(1 - Turtle.speedSlider.getValue(), 2);
  Turtle.pid = window.setTimeout(Turtle.animate, stepSpeed);
};

/**
 * Execute one step.
 * @param {string} command Logo-style command (e.g. 'FD' or 'RT').
 * @param {!Array} values List of arguments for the command.
 */
Turtle.step = function(command, values) {
	if(command){
		Turtle.count++;
		switch (command) {
			case 'FD':  // Forward
			  if (Turtle.penDownValue) {
			    Turtle.ctxScratch.beginPath();
			    Turtle.ctxScratch.moveTo(Turtle.x, Turtle.y);
			  }
			  var distance = values[0];
			  if (distance) {
			    Turtle.x += distance * Math.sin(2 * Math.PI * Turtle.heading / 360);
			    Turtle.y -= distance * Math.cos(2 * Math.PI * Turtle.heading / 360);
			    var bump = 0;
			  } else {
			    // WebKit (unlike Gecko) draws nothing for a zero-length line.
			    var bump = 0.1;
			  }
			  if (Turtle.penDownValue) {
			    Turtle.ctxScratch.lineTo(Turtle.x, Turtle.y + bump);
			    Turtle.ctxScratch.stroke();
			  }
			  
			  break;
			case 'RT':  // Right Turn
			  Turtle.heading += values[0];
			  Turtle.heading %= 360;
			  if (Turtle.heading < 0) {
			    Turtle.heading += 360;
			  }
			  
			  break;
			case 'DP':  // Draw Print
			  Turtle.ctxScratch.save();
			  Turtle.ctxScratch.translate(Turtle.x, Turtle.y);
			  Turtle.ctxScratch.rotate(2 * Math.PI * (Turtle.heading - 90) / 360);
			  Turtle.ctxScratch.fillText(values[0], 0, 0);
			  Turtle.ctxScratch.restore();
			  break;
			case 'DF':  // Draw Font
			  Turtle.ctxScratch.font = values[2] + ' ' + values[1] + 'pt ' + values[0];
			  break;
			case 'PU':  // Pen Up
			  Turtle.penDownValue = false;
			  break;
			case 'PD':  // Pen Down
			  Turtle.penDownValue = true;
			  break;
			case 'PW':  // Pen Width
			  Turtle.ctxScratch.lineWidth = values[0];
			  break;
			case 'PC':  // Pen Colour
			  Turtle.ctxScratch.strokeStyle = values[0];
			  Turtle.ctxScratch.fillStyle = values[0];
			  break;
			case 'HT':  // Hide Turtle
			  Turtle.visible = false;
			  break;
			case 'ST':  // Show Turtle
			      Turtle.visible = true;
			      break;
		}
	}
};

/**
 * Save an image of the SVG canvas.
 */
Turtle.createImageLink = function() {
  var imgLink = document.getElementById('downloadImageLink');
  imgLink.setAttribute('href',
      document.getElementById('display').toDataURL('image/png'));
  var temp = window.onbeforeunload;
  window.onbeforeunload = null;
  imgLink.click();
  window.onbeforeunload = temp;
};


// Turtle API.

Turtle.moveForward = function(distance, id) {
  BlocklyApps.log.push(['FD', distance, id]);
};

Turtle.moveBackward = function(distance, id) {
  BlocklyApps.log.push(['FD', -distance, id]);
};

Turtle.turnRight = function(angle, id) {
  BlocklyApps.log.push(['RT', angle, id]);
};

Turtle.turnLeft = function(angle, id) {
  BlocklyApps.log.push(['RT', -angle, id]);
};

Turtle.penUp = function(id) {
  BlocklyApps.log.push(['PU', id]);
};

Turtle.penDown = function(id) {
  BlocklyApps.log.push(['PD', id]);
};

Turtle.penWidth = function(width, id) {
  BlocklyApps.log.push(['PW', Math.max(width, 0), id]);
};

Turtle.penColour = function(colour, id) {
  BlocklyApps.log.push(['PC', colour, id]);
};

Turtle.hideTurtle = function(id) {
  BlocklyApps.log.push(['HT', id]);
};

Turtle.showTurtle = function(id) {
  BlocklyApps.log.push(['ST', id]);
};

Turtle.drawPrint = function(text, id) {
  BlocklyApps.log.push(['DP', text, id]);
};

Turtle.drawFont = function(font, size, style, id) {
  BlocklyApps.log.push(['DF', font, size, style, id]);
};