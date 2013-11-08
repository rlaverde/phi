// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

if (typeof turtlepage == 'undefined') { var turtlepage = {}; }


turtlepage.start = function(opt_data, opt_ignored, opt_ijData) {
  return 	'<table width="100%" height="100%">'+
				'<tr height="50">'+
					'<td colspan=2>'+
						'<h1>'+
							'<a href="../index.html">Blockly</a> : ' + 'Turtle Graphics' + 
						'</h1>'+
					'</td>'+
				'</tr>'+
				'<tr>'+
					'<td width="410" valign="top">'+
						'<div>'+
							'<canvas id="scratch" width="400" height="400" style="display: none"></canvas>'+
							'<canvas id="display" width="400" height="400"></canvas>'+
						'</div>'+
						'<table style="padding-top: 1em;">'+
							'<tr>'+
								'<td style="width: 190px; text-align: center">'+
									'<script type="text/javascript" src="js/slider.js"><\/script>'+
									'<svg id="slider" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="150" height="50">'+
										'<!-- Slow icon. -->'+
										'<clipPath id="slowClipPath">'+
											'<rect width=26 height=12 x=5 y=14 />'+
										'</clipPath>'+
										'<image xlink:href="img/icons.png" height=42 width=106 x=-21 y=-10 clip-path="url(#slowClipPath)" /><!-- Fast icon. -->'+
										'<clipPath id="fastClipPath"><rect width=26 height=16 x=120 y=10 /></clipPath>'+
										'<image xlink:href="img/icons.png" height=42 width=106 x=120 y=-11 clip-path="url(#fastClipPath)" />'+
									'</svg>'+
								'</td>'+
								'<td style="width: 15px;">'+
									'<img id="spinner" style="visibility: hidden;" src="img/loading.gif" height=15 width=15>'+
								'</td>'+
								'<td style="width: 190px; text-align: center">'+
									'<button id="runButton" class="launch" onclick="Turtle.runButtonClick();">' + 'Ejecutar Programa' + '</button>'+
									'<button id="resetButton" class="launch" onclick="Turtle.resetButtonClick();" style="display: none">' + '\u00A0 \u00A0 Reiniciar \u00A0 \u00A0' + '</button>'+
								'</td>'+
							'</tr>'+
						'</table>'+
					'<div id="toolbarDiv">'+
						'<button title="' + 'Ver el código JavaScript generado.' + '" onclick="BlocklyApps.showCode();">'+
							'<img src=\'js/media/1x1.gif\' class="code">'+
						'</button>'+
						'<button id="linkButton" title="' + 'Guardar y enlazar los bloques.' + '" onclick="BlocklyStorage.link();">'+
							'<img src=\'js/media/1x1.gif\' class="link">'+
						'</button>'+
						'<button id="captureButton" title="' + 'Guardar el dibujo.' + '" onclick="Turtle.createImageLink();">'+
							'<img src=\'js/media/1x1.gif\' class="img">'+
						'</button>'+
						'<a id="downloadImageLink" download="' + 'drawing.png' + '">'+
						'</a>'+
					'</div>'+
					'</td>'+
					'<td id="edit" valign="top">'+
						'<script type="text/javascript" src="js/blockly_compressed.js"><\/script>'+
						'<script type="text/javascript" src="js/javascript_compressed.js"><\/script>'+
						'<script type="text/javascript" src="js/common.js"><\/script>'+
						'<script type="text/javascript">BlocklyApps.loadLanguageScripts(languageSrc);<\/script>'+
						'<script type="text/javascript" src="js/blocks.js"><\/script>' + 
						turtlepage.toolbox(null, null, opt_ijData) + 
						'<div id="blockly">'+
						
						'</div>'+
					'</td>'+
				'</tr>'+
			'</table>';
};


turtlepage.toolbox = function(opt_data, opt_ignored, opt_ijData) {
  return '<xml id="toolbox" style="display: none"><category name="' + soy.$$escapeHtml(opt_ijData.MSG.catTurtle) + '"><block type="draw_move"><value name="VALUE"><block type="math_number"><title name="NUM">10</title></block></value></block><block type="draw_turn"><value name="VALUE"><block type="math_number"><title name="NUM">90</title></block></value></block><block type="draw_width"><value name="WIDTH"><block type="math_number"><title name="NUM">1</title></block></value></block><block type="draw_pen"></block><block type="turtle_visibility"></block><block type="draw_print"><value name="TEXT"><block type="text"></block></value></block><block type="draw_font"></block></category><category name="' + soy.$$escapeHtml(opt_ijData.MSG.catColour) + '"><block type="draw_colour"><value name="COLOUR"><block type="colour_picker"></block></value></block><block type="colour_picker"></block><block type="colour_random"></block><block type="colour_rgb"></block><block type="colour_blend"></block></category><category name="' + soy.$$escapeHtml(opt_ijData.MSG.catControl) + '"><block type="controls_if"></block><block type="controls_repeat_ext"><value name="TIMES"><block type="math_number"><title name="NUM">10</title></block></value></block><block type="controls_whileUntil"></block><block type="controls_for"><value name="FROM"><block type="math_number"><title name="NUM">1</title></block></value><value name="TO"><block type="math_number"><title name="NUM">10</title></block></value></block><block type="controls_forEach"></block><block type="controls_flow_statements"></block></category><category name="' + soy.$$escapeHtml(opt_ijData.MSG.catLogic) + '"><block type="logic_compare"></block><block type="logic_operation"></block><block type="logic_negate"></block><block type="logic_boolean"></block><block type="logic_null"></block><block type="logic_ternary"></block></category><category name="' + soy.$$escapeHtml(opt_ijData.MSG.catMath) + '"><block type="math_number"></block><block type="math_arithmetic"></block><block type="math_single"></block><block type="math_trig"></block><block type="math_constant"></block><block type="math_number_property"></block><block type="math_change"><value name="DELTA"><block type="math_number"><title name="NUM">1</title></block></value></block><block type="math_round"></block><block type="math_on_list"></block><block type="math_modulo"></block><block type="math_constrain"><value name="LOW"><block type="math_number"><title name="NUM">1</title></block></value><value name="HIGH"><block type="math_number"><title name="NUM">100</title></block></value></block><block type="math_random_int"><value name="FROM"><block type="math_number"><title name="NUM">1</title></block></value><value name="TO"><block type="math_number"><title name="NUM">100</title></block></value></block><block type="math_random_float"></block></category><category name="' + soy.$$escapeHtml(opt_ijData.MSG.catLists) + '"><block type="lists_create_empty"></block><block type="lists_create_with"></block><block type="lists_repeat"><value name="NUM"><block type="math_number"><title name="NUM">5</title></block></value></block><block type="lists_length"></block><block type="lists_isEmpty"></block><block type="lists_indexOf"><value name="VALUE"><block type="variables_get"><title name="VAR">list</title></block></value></block><block type="lists_getIndex"><value name="VALUE"><block type="variables_get"><title name="VAR">list</title></block></value></block><block type="lists_setIndex"><value name="LIST"><block type="variables_get"><title name="VAR">list</title></block></value></block><block type="lists_getSublist"><value name="LIST"><block type="variables_get"><title name="VAR">list</title></block></value></block></category><category name="' + soy.$$escapeHtml(opt_ijData.MSG.catVariables) + '" custom="VARIABLE"></category><category name="' + soy.$$escapeHtml(opt_ijData.MSG.catProcedures) + '" custom="PROCEDURE"></category></xml>';
};