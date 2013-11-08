// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

var MSG = {
	  // Block text.
	  moveForward: 'mover adelante',
	  moveBackward: 'mover atrás',
	  turnRight: 'girar a la derecha',
	  turnLeft: 'girar a la izquierda',
	  setWidth: 'asignar ancho',
	  setColour: 'asignar color',
	  penUp: 'levantar pluma',
	  penDown: 'bajar pluma',
	  hideTurtle: 'esconder tortuga',
	  showTurtle: 'mostrar tortuga',
	  print: 'imprimir',
	  font: 'fuente',
	  fontSize: 'tamaño',
	  fontNormal: 'normal',
	  fontBold: 'negrita',
	  fontItalic: 'italica',
	  // Tooltips for general blocks.
	  moveTooltip: 'Mueve la tortuga adelante o atrás\n' +
	  'una cantidad dada.',
	  turnTooltip: 'Gira la tortuga a la izquierda o a la derecha\n' +
	  'una cantidad de grados dada.',
	  widthTooltip: 'Cambia el ancho de la pluma.',
	  penTooltip: 'Sube o Baja el pluma,\n' +
	  'para empezar o dejar de dibujar.',
	  colourTooltip: 'Cambia el color de la pluma.',
	  turtleVisibilityTooltip: 'Hace que la tortuga (el circulo verde con una flecha) este visible o invisible.',
	  printTooltip: 'Dibuja texto en la posición y dirección de la tortuga.',
	  fontTooltip: 'Asigna la fuente que se usara con el bloque imprimir.',
	  codeTooltip: 'Ver el código JavaScript generado.',
	  linkTooltip: 'Guardar y enlazar los bloques.',
	  captureTooltip: 'Guardar el dibujo.',
	  // HelpUrl links.
	  printHelpUrl: 'http://es.wikipedia.org/wiki/Impresión',
	  fontHelpUrl: 'http://es.wikipedia.org/wiki/Tipo_de_letra',
	  // Toolbox categories.
	  catTurtle: 'Tortuga',
	  catControl: 'Control',
	  catLogic: 'Lógica',
	  catMath: 'Matemática',
	  catLists: 'Listas',
	  catColour: 'Color',
	  catVariables: 'Variables',
	  catProcedures: 'Funciones',
	  // Misc text.
	  unloadWarning: 'Abandonar la pagina hará que su trabajo se pierda.',
	  runProgram: 'Ejecutar Programa',
	  resetProgram: '\u00A0 \u00A0 Reiniciar \u00A0 \u00A0',
	  title: 'Turtle Graphics',
	  imgFilename: 'drawing.png'
    };

if (typeof turtlepage == 'undefined') { var turtlepage = {}; }


turtlepage.start = function(opt_data, opt_ignored, opt_ijData) {
	return '';
};


turtlepage.toolbox = function(opt_data, opt_ignored, opt_ijData) {
  return 
  	'<xml id="toolbox" style="display: none">'+
  		'<category name="Tortuga">'+
  			'<block type="draw_move">'+
  				'<value name="VALUE">'+
	  				'<block type="math_number">'+
	  					'<title name="NUM">10</title>'+
					'</block>'+
				'</value>'+
			'</block>'+
			'<block type="draw_turn">'+
				'<value name="VALUE">'+
					'<block type="math_number">'+
						'<title name="NUM">90</title>'+
					'</block>'+
				'</value>'+
			'</block>'+
			'<block type="draw_width">'+
				'<value name="WIDTH">'+
					'<block type="math_number">'+
						'<title name="NUM">1</title>'+
					'</block>'+
				'</value>'+
			'</block>'+
			'<block type="draw_pen">'+
			'</block>'+
			'<block type="turtle_visibility">'+
			'</block>'+
			'<block type="draw_print">'+
				'<value name="TEXT">'+
					'<block type="text">'+
					'</block>'+
				'</value>'+
			'</block>'+
			'<block type="draw_font">'+
			'</block>'+
		'</category>'+
		'<category name="Color">'+
			'<block type="draw_colour">'+
				'<value name="COLOUR">'+
					'<block type="colour_picker">'+
				'</block>'+
		'</value>'+
		'</block>'+
		'<block type="colour_picker"></block>'+
		'<block type="colour_random"></block>'+
		'<block type="colour_rgb"></block><block type="colour_blend"></block></category><category name="Control">'+
		'<block type="controls_if"></block><block type="controls_repeat_ext"><value name="TIMES"><block type="math_number"><title name="NUM">10</title></block></value></block><block type="controls_whileUntil"></block><block type="controls_for"><value name="FROM"><block type="math_number"><title name="NUM">1</title></block></value><value name="TO"><block type="math_number"><title name="NUM">10</title></block></value></block><block type="controls_forEach"></block>'+
		'<block type="controls_flow_statements"></block></category>'+
		'<category name="Lógica">'+
		'<block type="logic_compare"></block><block type="logic_operation"></block><block type="logic_negate"></block><block type="logic_boolean"></block>'+
		'<block type="logic_null"></block><block type="logic_ternary"></block></category><category name="' + soy.$$escapeHtml(opt_ijData.MSG.catMath) + '"><block type="math_number"></block><block type="math_arithmetic"></block><block type="math_single"></block><block type="math_trig"></block><block type="math_constant"></block><block type="math_number_property"></block><block type="math_change"><value name="DELTA"><block type="math_number"><title name="NUM">1</title></block></value></block><block type="math_round"></block><block type="math_on_list"></block><block type="math_modulo"></block><block type="math_constrain"><value name="LOW"><block type="math_number"><title name="NUM">1</title></block></value><value name="HIGH"><block type="math_number"><title name="NUM">100</title></block></value></block><block type="math_random_int"><value name="FROM"><block type="math_number"><title name="NUM">1</title></block></value><value name="TO"><block type="math_number"><title name="NUM">100</title></block></value></block><block type="math_random_float"></block></category><category name="' + soy.$$escapeHtml(opt_ijData.MSG.catLists) + '"><block type="lists_create_empty"></block><block type="lists_create_with"></block><block type="lists_repeat"><value name="NUM"><block type="math_number"><title name="NUM">5</title></block></value></block><block type="lists_length"></block><block type="lists_isEmpty"></block><block type="lists_indexOf"><value name="VALUE"><block type="variables_get"><title name="VAR">list</title></block></value></block><block type="lists_getIndex"><value name="VALUE"><block type="variables_get"><title name="VAR">list</title></block></value></block><block type="lists_setIndex"><value name="LIST"><block type="variables_get"><title name="VAR">list</title></block></value></block><block type="lists_getSublist"><value name="LIST"><block type="variables_get"><title name="VAR">list</title></block></value></block></category><category name="' + soy.$$escapeHtml(opt_ijData.MSG.catVariables) + '" custom="VARIABLE"></category><category name="' + soy.$$escapeHtml(opt_ijData.MSG.catProcedures) + '" custom="PROCEDURE"></category></xml>';
};