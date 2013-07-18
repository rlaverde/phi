/**
 * Visual Blocks Language
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
 * @fileoverview English strings.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

/**
 * Due to the frequency of long strings, the 80-column wrap rule need not apply
 * to message files.
 */

// Context menus.
Blockly.MSG_DUPLICATE_BLOCK = 'Duplicado';
Blockly.MSG_REMOVE_COMMENT = 'Eliminar Comentario';
Blockly.MSG_ADD_COMMENT = 'Añadir Comentario';
Blockly.MSG_EXTERNAL_INPUTS = 'Entradas Externas';
Blockly.MSG_INLINE_INPUTS = 'Entradas embebidas (Internas)';
Blockly.MSG_DELETE_BLOCK = 'Borrar Bloque';
Blockly.MSG_DELETE_X_BLOCKS = 'Borrar %1 Bloques';
Blockly.MSG_COLLAPSE_BLOCK = 'Colapsar Bloque';
Blockly.MSG_EXPAND_BLOCK = 'Expandir Bloque';
Blockly.MSG_DISABLE_BLOCK = 'Desactivar Bloque';
Blockly.MSG_ENABLE_BLOCK = 'Activar Bloque';
Blockly.MSG_HELP = 'Ayuda';
Blockly.MSG_COLLAPSE_ALL = 'Colapsar Bloques';
Blockly.MSG_EXPAND_ALL = 'Expandir Bloques';

// Variable renaming.
Blockly.MSG_CHANGE_VALUE_TITLE = 'Cambiar valor:';
Blockly.MSG_NEW_VARIABLE = 'Nueva variable...';
Blockly.MSG_NEW_VARIABLE_TITLE = 'Nuevo nombre de la variable:';
Blockly.MSG_RENAME_VARIABLE = 'Renombrar variable...';
Blockly.MSG_RENAME_VARIABLE_TITLE = 'Renombrar todas las "%1" variables a:';

// Colour Blocks.
Blockly.LANG_COLOUR_PICKER_HELPURL = 'http://es.wikipedia.org/wiki/Color';
Blockly.LANG_COLOUR_PICKER_TOOLTIP = 'Escoja un color de la paleta.';

Blockly.LANG_COLOUR_RANDOM_HELPURL = 'http://randomcolour.com';
Blockly.LANG_COLOUR_RANDOM_TITLE = 'color aleatorio';
Blockly.LANG_COLOUR_RANDOM_TOOLTIP = 'Escojer un color aleatoriamente.';

Blockly.LANG_COLOUR_RGB_HELPURL = 'http://www.december.com/html/spec/colorper.html';
Blockly.LANG_COLOUR_RGB_TITLE = 'color con';
Blockly.LANG_COLOUR_RGB_RED = 'rojo';
Blockly.LANG_COLOUR_RGB_GREEN = 'verde';
Blockly.LANG_COLOUR_RGB_BLUE = 'azul';
Blockly.LANG_COLOUR_RGB_TOOLTIP = 'Crear un color con una cantidad especifica de rojo, verde,\n' +
    'y azul.  Todos los valores deben estar entre 0 y 100.';

Blockly.LANG_COLOUR_BLEND_HELPURL = 'http://meyerweb.com/eric/tools/color-blend/';
Blockly.LANG_COLOUR_BLEND_TITLE = 'mezclador';
Blockly.LANG_COLOUR_BLEND_COLOUR1 = 'color 1';
Blockly.LANG_COLOUR_BLEND_COLOUR2 = 'color 2';
Blockly.LANG_COLOUR_BLEND_RATIO = 'proporción';
Blockly.LANG_COLOUR_BLEND_TOOLTIP = 'Mezcla dos colores con una proporción dada (0.0 - 1.0).';

// Control Blocks.
Blockly.LANG_CONTROLS_IF_HELPURL = 'http://code.google.com/p/blockly/wiki/If_Then';
Blockly.LANG_CONTROLS_IF_TOOLTIP_1 = 'Si el valor es verdadero, hace la siguientes instrucciones.';
Blockly.LANG_CONTROLS_IF_TOOLTIP_2 = 'Si el valor es verdadero, hace el primer bloque de instrucciones.\n' +
    'De lo contrario, hace el segundo bloque de instrucciones.';
Blockly.LANG_CONTROLS_IF_TOOLTIP_3 = 'Si el primer valor es verdadero, hace el primer bloque de instrucciones.\n' +
    'De lo contrario, si el segundo valor es verdadero, hace el segundo bloque de instrucciones.';
Blockly.LANG_CONTROLS_IF_TOOLTIP_4 = 'Si el primer valor es verdadero, hace el primer bloque de instrucciones.\n' +
    'De lo contrario, si el segundo valor es verdadero, hace el segundo bloque de instrucciones.\n' +
    'Si ninguno de los valores es verdadero, hace el último bloque de instrucciones.';
Blockly.LANG_CONTROLS_IF_MSG_IF = 'si';
Blockly.LANG_CONTROLS_IF_MSG_ELSEIF = 'si no, si';
Blockly.LANG_CONTROLS_IF_MSG_ELSE = 'si no';
Blockly.LANG_CONTROLS_IF_MSG_THEN = 'haga';

Blockly.LANG_CONTROLS_IF_IF_TITLE_IF = 'si';
Blockly.LANG_CONTROLS_IF_IF_TOOLTIP = 'Añadir, remover, o reordenar secciones\n' +
    'para reconfigurar este bloque "si".';

Blockly.LANG_CONTROLS_IF_ELSEIF_TITLE_ELSEIF = 'si no, si';
Blockly.LANG_CONTROLS_IF_ELSEIF_TOOLTIP = 'Añadir una condición al bloque "si".';

Blockly.LANG_CONTROLS_IF_ELSE_TITLE_ELSE = 'si no, si';
Blockly.LANG_CONTROLS_IF_ELSE_TOOLTIP = 'Añadir un final, Para todas las condiciones del bloque "si".';

Blockly.LANG_CONTROLS_REPEAT_HELPURL = 'http://es.wikipedia.org/wiki/Bucle_for';
Blockly.LANG_CONTROLS_REPEAT_TITLE_REPEAT = 'repetir';
Blockly.LANG_CONTROLS_REPEAT_TITLE_TIMES = 'veces';
Blockly.LANG_CONTROLS_REPEAT_INPUT_DO = 'haga';
Blockly.LANG_CONTROLS_REPEAT_TOOLTIP = 'Realice algunas instrucciones varias veces.';

Blockly.LANG_CONTROLS_WHILEUNTIL_HELPURL = 'http://code.google.com/p/blockly/wiki/Repeat';
Blockly.LANG_CONTROLS_WHILEUNTIL_INPUT_DO = 'haga';
Blockly.LANG_CONTROLS_WHILEUNTIL_OPERATOR_WHILE = 'repetir mientras';
Blockly.LANG_CONTROLS_WHILEUNTIL_OPERATOR_UNTIL = 'repetir hasta';
Blockly.LANG_CONTROLS_WHILEUNTIL_TOOLTIP_WHILE = 'Mientras un valor es verdadero, hace algunas instrucciones.';
Blockly.LANG_CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL = 'Mientras un valor es falso, hace algunas instrucciones.';

Blockly.LANG_CONTROLS_FOR_HELPURL = 'http://es.wikipedia.org/wiki/Bucle_for';
Blockly.LANG_CONTROLS_FOR_INPUT_WITH = 'contar con';
Blockly.LANG_CONTROLS_FOR_INPUT_VAR = 'x';
Blockly.LANG_CONTROLS_FOR_INPUT_FROM = 'desde';
Blockly.LANG_CONTROLS_FOR_INPUT_TO = 'hasta';
Blockly.LANG_CONTROLS_FOR_INPUT_BY = 'por';
Blockly.LANG_CONTROLS_FOR_INPUT_DO = 'haga';
Blockly.LANG_CONTROLS_FOR_TAIL = '';
Blockly.LANG_CONTROLS_FOR_TOOLTIP = 'Cuenta desde un número inicial hasta un número final con el intervalo indicado.\n' +
    'Por cada vez, asigna el valor del contador a\n' +
    'la variable "%1", y hace algunas instrucciones.';

Blockly.LANG_CONTROLS_FOREACH_HELPURL = 'http://es.wikipedia.org/wiki/Bucle_for';
Blockly.LANG_CONTROLS_FOREACH_INPUT_ITEM = 'para cada elemento';
Blockly.LANG_CONTROLS_FOREACH_INPUT_VAR = 'x';
Blockly.LANG_CONTROLS_FOREACH_INPUT_INLIST = 'en la lista';
Blockly.LANG_CONTROLS_FOREACH_INPUT_INLIST_TAIL = '';
Blockly.LANG_CONTROLS_FOREACH_INPUT_DO = 'haga';
Blockly.LANG_CONTROLS_FOREACH_TOOLTIP = 'Para cada elemento en la lista, asigna el elemento a \n' +
    'la variable "%1", y hace algunas instrucciones.';

Blockly.LANG_CONTROLS_FLOW_STATEMENTS_HELPURL = 'http://es.wikipedia.org/wiki/Estructuras_de_control';
Blockly.LANG_CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK = 'salir del bucle';
Blockly.LANG_CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE = 'continue con la siguente iteración del bucle';
Blockly.LANG_CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK = 'Salir sel bucle actual.';
Blockly.LANG_CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE = 'Omitir el resto de esta iteración, y\n' +
    'continuar con la siguiente iteración.';
Blockly.LANG_CONTROLS_FLOW_STATEMENTS_WARNING = 'Advertencia:\n' +
    'Este bloque solo puede\n' +
    'ser usado dentro de un loop.';

// Logic Blocks.
Blockly.LANG_LOGIC_COMPARE_HELPURL = 'http://es.wikipedia.org/wiki/Desigualdad_matemática';
Blockly.LANG_LOGIC_COMPARE_TOOLTIP_EQ = 'Devuelve verdadero si ambas entradas son iguales entre sí.';
Blockly.LANG_LOGIC_COMPARE_TOOLTIP_NEQ = 'Devuelve verdadero si ambas entradas no son iguales entre sí.';
Blockly.LANG_LOGIC_COMPARE_TOOLTIP_LT = 'Devuelve verdadero si la primera entrada es menor\n' +
    'que la segunda entrada.';
Blockly.LANG_LOGIC_COMPARE_TOOLTIP_LTE = 'Devuelve verdadero si la primera entrada es menor\n' +
    'o igual que la segunda entrada.';
Blockly.LANG_LOGIC_COMPARE_TOOLTIP_GT = 'Devuelve verdadero si la primera entrada es mayor\n' +
    'que la segunda entrada.';
Blockly.LANG_LOGIC_COMPARE_TOOLTIP_GTE = 'Devuelve verdadero si la primera entrada es mayor\n' +
    'o igual que la segunda entrada.';

Blockly.LANG_LOGIC_OPERATION_HELPURL = 'http://code.google.com/p/blockly/wiki/And_Or';
Blockly.LANG_LOGIC_OPERATION_AND = 'y';
Blockly.LANG_LOGIC_OPERATION_OR = 'o';
Blockly.LANG_LOGIC_OPERATION_TOOLTIP_AND = 'Devuelve verdadero si las dos entradas son verdaderas.';
Blockly.LANG_LOGIC_OPERATION_TOOLTIP_OR = 'Devuelve verdadero si alguna de las entradas es verdadera.';

Blockly.LANG_LOGIC_NEGATE_HELPURL = 'http://code.google.com/p/blockly/wiki/Not';
Blockly.LANG_LOGIC_NEGATE_INPUT_NOT = 'no';
Blockly.LANG_LOGIC_NEGATE_TOOLTIP = 'Devuelve verdadero se la entrada es falsa.\n' +
    'Devuelve falso si la entrada es verdadera.';

Blockly.LANG_LOGIC_BOOLEAN_HELPURL = 'http://code.google.com/p/blockly/wiki/True_False';
Blockly.LANG_LOGIC_BOOLEAN_TRUE = 'verdadero';
Blockly.LANG_LOGIC_BOOLEAN_FALSE = 'falso';
Blockly.LANG_LOGIC_BOOLEAN_TOOLTIP = 'Devuelve verdadero o falso.';

Blockly.LANG_LOGIC_NULL_HELPURL = 'http://es.wikipedia.org/wiki/Null';
Blockly.LANG_LOGIC_NULL = 'nulo';
Blockly.LANG_LOGIC_NULL_TOOLTIP = 'Devuelve nulo.';

Blockly.LANG_LOGIC_TERNARY_HELPURL = 'http://es.wikipedia.org/wiki/Operador_ternario';
Blockly.LANG_LOGIC_TERNARY_CONDITION = 'evaluar';
Blockly.LANG_LOGIC_TERNARY_IF_TRUE = 'si es verdadero';
Blockly.LANG_LOGIC_TERNARY_IF_FALSE = 'si es falso';
Blockly.LANG_LOGIC_TERNARY_TOOLTIP = 'Evalua la condición en "evaluar". Si la condición es verdadera\n' +
    'devuelve el valor de "si es verdadero", de lo contrario devuelve el valor de "si es falso".';

// Math Blocks.
Blockly.LANG_MATH_NUMBER_HELPURL = 'http://es.wikipedia.org/wiki/Número';
Blockly.LANG_MATH_NUMBER_TOOLTIP = 'Un número.';

Blockly.LANG_MATH_ARITHMETIC_HELPURL = 'http://es.wikipedia.org/wiki/Aritmética';
Blockly.LANG_MATH_ARITHMETIC_TOOLTIP_ADD = 'Devuelve la suma de dos números.';
Blockly.LANG_MATH_ARITHMETIC_TOOLTIP_MINUS = 'Devuelve la diferencia de dos números.';
Blockly.LANG_MATH_ARITHMETIC_TOOLTIP_MULTIPLY = 'Devuelve el producto de dos números.';
Blockly.LANG_MATH_ARITHMETIC_TOOLTIP_DIVIDE = 'Devuelve el cociente de dos números.';
Blockly.LANG_MATH_ARITHMETIC_TOOLTIP_POWER = 'Devuelve el primer número elevado a\n' +
    'la potencia del segundo número.';

Blockly.LANG_MATH_SINGLE_HELPURL = 'http://es.wikipedia.org/wiki/Raíz_cuadrada';
Blockly.LANG_MATH_SINGLE_OP_ROOT = 'raíz cuadrada';
Blockly.LANG_MATH_SINGLE_OP_ABSOLUTE = 'absoluto';
Blockly.LANG_MATH_SINGLE_TOOLTIP_ROOT = 'Devuelve la raíz cuadrada de un número.';
Blockly.LANG_MATH_SINGLE_TOOLTIP_ABS = 'Devuelve el valor absoluto de un número.';
Blockly.LANG_MATH_SINGLE_TOOLTIP_NEG = 'Devuelve la negación de un número.';
Blockly.LANG_MATH_SINGLE_TOOLTIP_LN = 'Devuelve el logaritmo natural de un número.';
Blockly.LANG_MATH_SINGLE_TOOLTIP_LOG10 = 'Devuelve el logaritmo en base 10 de un número.';
Blockly.LANG_MATH_SINGLE_TOOLTIP_EXP = 'Devuelve e elevado a la potencia de un número.';
Blockly.LANG_MATH_SINGLE_TOOLTIP_POW10 = 'Devuelve 10 elevado a la potencia de un número.';

Blockly.LANG_MATH_TRIG_HELPURL = 'http://es.wikipedia.org/wiki/Función_trigonométrica';
Blockly.LANG_MATH_TRIG_TOOLTIP_SIN = 'Devuelve el seno de un arco en grados hexadecimales (no radianes).';
Blockly.LANG_MATH_TRIG_TOOLTIP_COS = 'Devuelve el coseno de un arco en grados hexadecimales (no radianes).';
Blockly.LANG_MATH_TRIG_TOOLTIP_TAN = 'Devuelve la tangente de un arco en grados hexadecimales (no radianes).';
Blockly.LANG_MATH_TRIG_TOOLTIP_ASIN = 'Devuelve el arcoseno de un número.';
Blockly.LANG_MATH_TRIG_TOOLTIP_ACOS = 'Devuelve el arcocoseno de un número.';
Blockly.LANG_MATH_TRIG_TOOLTIP_ATAN = 'Devuelve el arcotangente de un número.';

Blockly.LANG_MATH_CONSTANT_HELPURL = 'http://es.wikipedia.org/wiki/Anexo:Constantes_matemáticas';
Blockly.LANG_MATH_CONSTANT_TOOLTIP = 'Devuelve una de las constantes más comunes: \u03c0 (3.141\u2026), e (2.718\u2026), \u03c6 (1.618\u2026),\n' +
    'raíz(2) (1.414\u2026), raíz(\u00bd) (0.707\u2026), o \u221e (infinito).';

Blockly.LANG_MATH_IS_EVEN = 'es par';
Blockly.LANG_MATH_IS_ODD = 'es impar';
Blockly.LANG_MATH_IS_PRIME = 'es primo';
Blockly.LANG_MATH_IS_WHOLE = 'es entero';
Blockly.LANG_MATH_IS_POSITIVE = 'es positivo';
Blockly.LANG_MATH_IS_NEGATIVE = 'es negativo';
Blockly.LANG_MATH_IS_DIVISIBLE_BY = 'es divisible por';
Blockly.LANG_MATH_IS_TOOLTIP = 'Evalua si un número es par, impar, primo, entero, positivo, negativo,\n' +
    'o si es divisible por cierto número.  Devuelve verdadero o falso.';

Blockly.LANG_MATH_CHANGE_HELPURL = 'http://en.wikipedia.org/wiki/Programming_idiom#Incrementing_a_counter';
Blockly.LANG_MATH_CHANGE_TITLE_CHANGE = 'cambiar';
Blockly.LANG_MATH_CHANGE_TITLE_ITEM = 'elemento';
Blockly.LANG_MATH_CHANGE_INPUT_BY = 'incremento';
Blockly.LANG_MATH_CHANGE_TOOLTIP = 'Incrementa en un número la varible "%1".';

Blockly.LANG_MATH_ROUND_HELPURL = 'http://es.wikipedia.org/wiki/Redondeo';
Blockly.LANG_MATH_ROUND_TOOLTIP = 'Redondear un número al siguiente o al anterior entero.';
Blockly.LANG_MATH_ROUND_OPERATOR_ROUND = 'redondear';
Blockly.LANG_MATH_ROUND_OPERATOR_ROUNDUP = 'redondear siguiente';
Blockly.LANG_MATH_ROUND_OPERATOR_ROUNDDOWN = 'redondear anterior';

Blockly.LANG_MATH_ONLIST_HELPURL = '';
Blockly.LANG_MATH_ONLIST_OPERATOR_SUM = 'suma de la lista';
Blockly.LANG_MATH_ONLIST_OPERATOR_MIN = 'menor de la lista';
Blockly.LANG_MATH_ONLIST_OPERATOR_MAX = 'máximo de la lista';
Blockly.LANG_MATH_ONLIST_OPERATOR_AVERAGE = 'promedio de la lista';
Blockly.LANG_MATH_ONLIST_OPERATOR_MEDIAN = 'mediana de la lista';
Blockly.LANG_MATH_ONLIST_OPERATOR_MODE = 'modas de la lista';
Blockly.LANG_MATH_ONLIST_OPERATOR_STD_DEV = 'desviación estandar de la lista';
Blockly.LANG_MATH_ONLIST_OPERATOR_RANDOM = 'elemento aleatorio de la lista';
Blockly.LANG_MATH_ONLIST_TOOLTIP_SUM = 'Devuelve la suma de todos los números en la lista.';
Blockly.LANG_MATH_ONLIST_TOOLTIP_MIN = 'Devuelve el menor número de la lista.';
Blockly.LANG_MATH_ONLIST_TOOLTIP_MAX = 'Devuelve el máximo número de la lista.';
Blockly.LANG_MATH_ONLIST_TOOLTIP_AVERAGE = 'Devuelve la media aritmética de la lista.';
Blockly.LANG_MATH_ONLIST_TOOLTIP_MEDIAN = 'Devuelve el número del medio de la lista.';
Blockly.LANG_MATH_ONLIST_TOOLTIP_MODE = 'Devuelve una lista con los elementos mas comunes de la lista.';
Blockly.LANG_MATH_ONLIST_TOOLTIP_STD_DEV = 'Devuelve la desviación estandar de la lista.';
Blockly.LANG_MATH_ONLIST_TOOLTIP_RANDOM = 'Devuelve un elemento aleatorio de la lista.';

Blockly.LANG_MATH_MODULO_HELPURL = 'http://en.wikipedia.org/wiki/Modulo_operation';
Blockly.LANG_MATH_MODULO_INPUT_DIVIDEND = 'residuo de';
Blockly.LANG_MATH_MODULO_TOOLTIP = 'Devuelve el residuo de dividir dos números.';

Blockly.LANG_MATH_CONSTRAIN_HELPURL = 'http://en.wikipedia.org/wiki/Clamping_%28graphics%29';
Blockly.LANG_MATH_CONSTRAIN_INPUT_CONSTRAIN = 'contener entre';
Blockly.LANG_MATH_CONSTRAIN_INPUT_LOW = 'bajo';
Blockly.LANG_MATH_CONSTRAIN_INPUT_HIGH = 'alto';
Blockly.LANG_MATH_CONSTRAIN_TOOLTIP = 'Contener un número entre dos límites especificos (inclusive).';

Blockly.LANG_MATH_RANDOM_INT_HELPURL = 'http://es.wikipedia.org/wiki/Generador_de_números_aleatorios';
Blockly.LANG_MATH_RANDOM_INT_INPUT_FROM = 'número aleatorio de';
Blockly.LANG_MATH_RANDOM_INT_INPUT_TO = 'a';
Blockly.LANG_MATH_RANDOM_INT_TOOLTIP = 'Retorna un número aleatorio entre los dos\n' +
    'límites especificos, inclusive.';

Blockly.LANG_MATH_RANDOM_FLOAT_HELPURL = 'http://es.wikipedia.org/wiki/Generador_de_números_aleatorios';
Blockly.LANG_MATH_RANDOM_FLOAT_TITLE_RANDOM = 'fracción aleatoria';
Blockly.LANG_MATH_RANDOM_FLOAT_TOOLTIP = 'retorna una fracción aleatoria entre\n' +
    '0.0 (inclusive) y 1.0 (exclusiyendolo).'

//  Blocks.
Blockly.LANG_TEXT_TEXT_HELPURL = 'http://es.wikipedia.org/wiki/Cadena_de_caracteres';
Blockly.LANG_TEXT_TEXT_TOOLTIP = 'Una letra, una palabra, o una línea de texto.';

Blockly.LANG_TEXT_JOIN_HELPURL = '';
Blockly.LANG_TEXT_JOIN_TITLE_CREATEWITH = 'crear texto con';
Blockly.LANG_TEXT_JOIN_TOOLTIP = 'Crea un texto uniendo\n' +
    'cualquier número de elementos juntamente.';

Blockly.LANG_TEXT_CREATE_JOIN_TITLE_JOIN = 'unir';
Blockly.LANG_TEXT_CREATE_JOIN_TOOLTIP = 'Añadir, remover, o reordenar secciones para reconfigurar un bloque de texto.';

Blockly.LANG_TEXT_CREATE_JOIN_ITEM_TITLE_ITEM = 'elemento';
Blockly.LANG_TEXT_CREATE_JOIN_ITEM_TOOLTIP = 'Añade un elemento al texto.';

Blockly.LANG_TEXT_APPEND_HELPURL = 'http://www.liv.ac.uk/HPC/HTMLF90Course/HTMLF90CourseNotesnode91.html';
Blockly.LANG_TEXT_APPEND_TO = 'a';
Blockly.LANG_TEXT_APPEND_APPENDTEXT = 'añadir el texto';
Blockly.LANG_TEXT_APPEND_VARIABLE = 'elemento';
Blockly.LANG_TEXT_APPEND_TOOLTIP = 'Añade texto a la variable "%1".';

Blockly.LANG_TEXT_LENGTH_HELPURL = 'http://www.liv.ac.uk/HPC/HTMLF90Course/HTMLF90CourseNotesnode91.html';
Blockly.LANG_TEXT_LENGTH_INPUT_LENGTH = 'longitud de';
Blockly.LANG_TEXT_LENGTH_TOOLTIP = 'Devuelve el número de letras (incluyendo los espacios)\n' +
    'de un texto dado.';

Blockly.LANG_TEXT_ISEMPTY_HELPURL = 'http://www.liv.ac.uk/HPC/HTMLF90Course/HTMLF90CourseNotesnode91.html';
Blockly.LANG_TEXT_ISEMPTY_INPUT_ISEMPTY = 'está vacío';
Blockly.LANG_TEXT_ISEMPTY_TOOLTIP = 'Devuelve verdadero si el texto dado está vacío.';

Blockly.LANG_TEXT_INDEXOF_HELPURL = 'http://publib.boulder.ibm.com/infocenter/lnxpcomp/v8v101/index.jsp?topic=%2Fcom.ibm.xlcpp8l.doc%2Flanguage%2Fref%2Farsubex.htm';
Blockly.LANG_TEXT_INDEXOF_INPUT_INTEXT = 'en el texto';
Blockly.LANG_TEXT_INDEXOF_OPERATOR_FIRST = 'encontrar la primera ocurrencia del texto';
Blockly.LANG_TEXT_INDEXOF_OPERATOR_LAST = 'encontrar la última ocurrencia del textfind last occurrence of text';
Blockly.LANG_TEXT_INDEXOF_TOOLTIP = 'Devuelve el indice de la primera/última ocurrencia\n' +
    'del primer texto en el segundo.\n' +
    'Devuelve 0 si no el texto no es encontrado.';

Blockly.LANG_TEXT_CHARAT_HELPURL = 'http://publib.boulder.ibm.com/infocenter/lnxpcomp/v8v101/index.jsp?topic=%2Fcom.ibm.xlcpp8l.doc%2Flanguage%2Fref%2Farsubex.htm';
Blockly.LANG_TEXT_CHARAT_INPUT_INTEXT = 'en el texto';
Blockly.LANG_TEXT_CHARAT_FROM_START = 'obtener letra #';
Blockly.LANG_TEXT_CHARAT_FROM_END = 'obtener letra # desde el final';
Blockly.LANG_TEXT_CHARAT_FIRST = 'obtener primera letra';
Blockly.LANG_TEXT_CHARAT_LAST = 'obtener última letra';
Blockly.LANG_TEXT_CHARAT_RANDOM = 'obtener una letra aleatoriamente';
Blockly.LANG_TEXT_CHARAT_TOOLTIP = 'Devuelve la letra de la posición dada.';

Blockly.LANG_TEXT_SUBSTRING_HELPURL = 'http://publib.boulder.ibm.com/infocenter/lnxpcomp/v8v101/index.jsp?topic=%2Fcom.ibm.xlcpp8l.doc%2Flanguage%2Fref%2Farsubex.htm';
Blockly.LANG_TEXT_SUBSTRING_INPUT_IN_TEXT = 'en el text';
Blockly.LANG_TEXT_SUBSTRING_INPUT_AT1 = 'obtener la subcadena desde';
Blockly.LANG_TEXT_SUBSTRING_INPUT_AT2 = 'hasta';
Blockly.LANG_TEXT_SUBSTRING_FROM_START = 'la letra #';
Blockly.LANG_TEXT_SUBSTRING_FROM_END = 'la letra # desde el final';
Blockly.LANG_TEXT_SUBSTRING_FIRST = 'primera letra';
Blockly.LANG_TEXT_SUBSTRING_LAST = 'última letra';
Blockly.LANG_TEXT_SUBSTRING_TOOLTIP = 'Devuelve la porción especifica de texto.';

Blockly.LANG_TEXT_CHANGECASE_HELPURL = 'http://www.liv.ac.uk/HPC/HTMLF90Course/HTMLF90CourseNotesnode91.html';
Blockly.LANG_TEXT_CHANGECASE_OPERATOR_UPPERCASE = 'a MAYUSCULAS';
Blockly.LANG_TEXT_CHANGECASE_OPERATOR_LOWERCASE = 'a minusculas';
Blockly.LANG_TEXT_CHANGECASE_OPERATOR_TITLECASE = 'a la primera en mayuscula';
Blockly.LANG_TEXT_CHANGECASE_TOOLTIP = 'Devuelve una copia del texto en una capitalización diferente.';

Blockly.LANG_TEXT_TRIM_HELPURL = 'http://www.liv.ac.uk/HPC/HTMLF90Course/HTMLF90CourseNotesnode91.html';
Blockly.LANG_TEXT_TRIM_OPERATOR_BOTH = 'elimina espacios al inicio y a los dos lados';
Blockly.LANG_TEXT_TRIM_OPERATOR_LEFT = 'elimina espacios a la izquierda';
Blockly.LANG_TEXT_TRIM_OPERATOR_RIGHT = 'elimina espacios a la derecha';
Blockly.LANG_TEXT_TRIM_TOOLTIP = 'Devuelve una copia del texto sin los espacios\n' +
    'de uno o los dos lados.';

Blockly.LANG_TEXT_PRINT_HELPURL = 'http://www.liv.ac.uk/HPC/HTMLF90Course/HTMLF90CourseNotesnode91.html';
Blockly.LANG_TEXT_PRINT_TITLE_PRINT = 'imprimir';
Blockly.LANG_TEXT_PRINT_TOOLTIP = 'Imprime el texto dado, número u otro valor.';

Blockly.LANG_TEXT_PROMPT_HELPURL = 'http://www.liv.ac.uk/HPC/HTMLF90Course/HTMLF90CourseNotesnode92.html';
Blockly.LANG_TEXT_PROMPT_TYPE_TEXT = 'aviso para texto con mensaje';
Blockly.LANG_TEXT_PROMPT_TYPE_NUMBER = 'aviso para número con mensaje';
Blockly.LANG_TEXT_PROMPT_TOOLTIP_NUMBER = 'Aviso para que el usuario inserte un número.';
Blockly.LANG_TEXT_PROMPT_TOOLTIP_TEXT = 'Aviso para que el usuario inserte texto';

// Lists Blocks.
Blockly.LANG_LISTS_CREATE_EMPTY_HELPURL = 'http://es.wikipedia.org/wiki/Lista_(informá1tica)';
Blockly.LANG_LISTS_CREATE_EMPTY_TITLE = 'crea una lista vacía';
Blockly.LANG_LISTS_CREATE_EMPTY_TOOLTIP = 'Devuelve una lista, de longitud 0, qu no contiene datos';

Blockly.LANG_LISTS_CREATE_WITH_INPUT_WITH = 'crea una lista con';
Blockly.LANG_LISTS_CREATE_WITH_TOOLTIP = 'Crea una lista con un número de elementos.';

Blockly.LANG_LISTS_CREATE_WITH_CONTAINER_TITLE_ADD = 'lista';
Blockly.LANG_LISTS_CREATE_WITH_CONTAINER_TOOLTIP = 'Añadir, eliminar, o reordenar secciones para reconfigurar esta lista de bloques.';

Blockly.LANG_LISTS_CREATE_WITH_ITEM_TITLE = 'elemento';
Blockly.LANG_LISTS_CREATE_WITH_ITEM_TOOLTIP = 'Añade un elemento a la lista.';

Blockly.LANG_LISTS_REPEAT_HELPURL = 'http://publib.boulder.ibm.com/infocenter/lnxpcomp/v8v101/index.jsp?topic=%2Fcom.ibm.xlcpp8l.doc%2Flanguage%2Fref%2Farsubex.htm';
Blockly.LANG_LISTS_REPEAT_INPUT_WITH = 'crea una lista con el elemento';
Blockly.LANG_LISTS_REPEAT_INPUT_REPEATED = 'repetido';
Blockly.LANG_LISTS_REPEAT_INPUT_TIMES = 'veces';
Blockly.LANG_LISTS_REPEAT_TOOLTIP = 'Crea una lista que consiste en un valor dado\n' +
    'repetido un número especifico de veces.';

Blockly.LANG_LISTS_LENGTH_HELPURL = 'http://www.liv.ac.uk/HPC/HTMLF90Course/HTMLF90CourseNotesnode91.html';
Blockly.LANG_LISTS_LENGTH_INPUT_LENGTH = 'longitud de';
Blockly.LANG_LISTS_LENGTH_TOOLTIP = 'Devuelve la longitud de una lista.';

Blockly.LANG_LISTS_IS_EMPTY_HELPURL = 'http://www.liv.ac.uk/HPC/HTMLF90Course/HTMLF90CourseNotesnode91.html';
Blockly.LANG_LISTS_INPUT_IS_EMPTY = 'está vacía.';
Blockly.LANG_LISTS_TOOLTIP = 'Devuleve verdadero si la lista está vacía.';

Blockly.LANG_LISTS_INDEX_OF_HELPURL = 'http://publib.boulder.ibm.com/infocenter/lnxpcomp/v8v101/index.jsp?topic=%2Fcom.ibm.xlcpp8l.doc%2Flanguage%2Fref%2Farsubex.htm';
Blockly.LANG_LISTS_INDEX_OF_INPUT_IN_LIST = 'en la lista';
Blockly.LANG_LISTS_INDEX_OF_FIRST = 'encontrar la primera ocurrencia del elemento';
Blockly.LANG_LISTS_INDEX_OF_LAST = 'encontrar la última ocurrencia del elemento';
Blockly.LANG_LISTS_INDEX_OF_TOOLTIP = 'Devuelve el indice de la primera/última ocurrencia\n' +
    'de el elemento en la lista.\n' +
    'Devuelve 0 si el elemento no es encontrado.';

Blockly.LANG_LISTS_GET_INDEX_HELPURL = 'http://publib.boulder.ibm.com/infocenter/lnxpcomp/v8v101/index.jsp?topic=%2Fcom.ibm.xlcpp8l.doc%2Flanguage%2Fref%2Farsubex.htm';
Blockly.LANG_LISTS_GET_INDEX_GET = 'obtener';
Blockly.LANG_LISTS_GET_INDEX_GET_REMOVE = 'obtener y eliminar';
Blockly.LANG_LISTS_GET_INDEX_REMOVE = 'eliminar';
Blockly.LANG_LISTS_GET_INDEX_FROM_START = '#';
Blockly.LANG_LISTS_GET_INDEX_FROM_END = '# desde el final';
Blockly.LANG_LISTS_GET_INDEX_FIRST = 'primero';
Blockly.LANG_LISTS_GET_INDEX_LAST = 'último';
Blockly.LANG_LISTS_GET_INDEX_RANDOM = 'aleatorio';
Blockly.LANG_LISTS_GET_INDEX_INPUT_IN_LIST = 'en la lista';
Blockly.LANG_LISTS_GET_INDEX_TOOLTIP_GET_FROM_START = 'Devuelve el elemento en la posición dada de una lista.\n' +
    '#1 es el primer elemento.';
Blockly.LANG_LISTS_GET_INDEX_TOOLTIP_GET_FROM_END = 'Devuelve el elemento en la posición dada de una lista.\n' +
    '#1 es el último elemento.';
Blockly.LANG_LISTS_GET_INDEX_TOOLTIP_GET_FIRST = 'Devuelve el primer elemento de una lista.';
Blockly.LANG_LISTS_GET_INDEX_TOOLTIP_GET_LAST = 'Devuelve el último elemento de una lista.';
Blockly.LANG_LISTS_GET_INDEX_TOOLTIP_GET_RANDOM = 'Devuelve un elemento aleatorio de la lista.';
Blockly.LANG_LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FROM_START = 'Elimina y devuelve el elemento de la posición dada\n' +
    ' en una lista.  #1 es el primer elemento.';
Blockly.LANG_LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FROM_END = 'Elimina y devuelve el elemento de la posición dada\n' +
    ' en una lista.  #1 es el último elemento.';
Blockly.LANG_LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FIRST = 'Elimina y devuelve el primer elemento de la lista.';
Blockly.LANG_LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_LAST = 'Elimina y devuelve el último elemento de una lista.';
Blockly.LANG_LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_RANDOM = 'Elimina y devuelve un elemento aleatorio de una lista.';
Blockly.LANG_LISTS_GET_INDEX_TOOLTIP_REMOVE_FROM_START = 'Elimina el elemento a la posición dada\n' +
    ' en la lista.  #1 es el primer elemento.';
Blockly.LANG_LISTS_GET_INDEX_TOOLTIP_REMOVE_FROM_END = 'Elimina el elemento a la posición dada\n' +
    ' en la lista.  #1 es el último elemento.';
Blockly.LANG_LISTS_GET_INDEX_TOOLTIP_REMOVE_FIRST = 'Elimina el primer elemento de una lista.';
Blockly.LANG_LISTS_GET_INDEX_TOOLTIP_REMOVE_LAST = 'Elimina el último elemento de una lista.';
Blockly.LANG_LISTS_GET_INDEX_TOOLTIP_REMOVE_RANDOM = 'Elimina un elemento aleatorio de una lista.';

Blockly.LANG_LISTS_SET_INDEX_HELPURL = 'http://publib.boulder.ibm.com/infocenter/lnxpcomp/v8v101/index.jsp?topic=%2Fcom.ibm.xlcpp8l.doc%2Flanguage%2Fref%2Farsubex.htm';
Blockly.LANG_LISTS_SET_INDEX_INPUT_IN_LIST = 'en la lista';
Blockly.LANG_LISTS_SET_INDEX_SET = 'asignar';
Blockly.LANG_LISTS_SET_INDEX_INSERT = 'insertar a';
Blockly.LANG_LISTS_SET_INDEX_INPUT_TO = 'como';
Blockly.LANG_LISTS_SET_INDEX_TOOLTIP_SET_FROM_START = 'Asigna el elemento a la posición dada de una lista.\n' +
    '#1 es el primer elemento.';
Blockly.LANG_LISTS_SET_INDEX_TOOLTIP_SET_FROM_END = 'Asigna el elemento a la posición dada de una lista.\n' +
    '#1 es el último elemento.';
Blockly.LANG_LISTS_SET_INDEX_TOOLTIP_SET_FIRST = 'Asigna el primer elemento de la lista.';
Blockly.LANG_LISTS_SET_INDEX_TOOLTIP_SET_LAST = 'Asigna el último elemento de la lista.';
Blockly.LANG_LISTS_SET_INDEX_TOOLTIP_SET_RANDOM = 'Asigna un elemento aleatorio en una lista.';
Blockly.LANG_LISTS_SET_INDEX_TOOLTIP_INSERT_FROM_START = 'Inserta el elemento a la pocision dad de una lista.\n' +
    '#1 es el primer elemento.';
Blockly.LANG_LISTS_SET_INDEX_TOOLTIP_INSERT_FROM_END = 'Inserta el elemento a la posición dada en una lista.\n' +
    '#1 es el último elemento.';
Blockly.LANG_LISTS_SET_INDEX_TOOLTIP_INSERT_FIRST = 'Inserte el elemento al inicio de una lista.';
Blockly.LANG_LISTS_SET_INDEX_TOOLTIP_INSERT_LAST = 'Coloque el elemento al final de una lista.';
Blockly.LANG_LISTS_SET_INDEX_TOOLTIP_INSERT_RANDOM = 'Inserte el elemento aleatoriamente en una lista.';

Blockly.LANG_LISTS_GET_SUBLIST_HELPURL = 'http://publib.boulder.ibm.com/infocenter/lnxpcomp/v8v101/index.jsp?topic=%2Fcom.ibm.xlcpp8l.doc%2Flanguage%2Fref%2Farsubex.htm';
Blockly.LANG_LISTS_GET_SUBLIST_INPUT_IN_LIST = 'en la lista';
Blockly.LANG_LISTS_GET_SUBLIST_INPUT_AT1 = 'obtener la sub-lista desde';
Blockly.LANG_LISTS_GET_SUBLIST_INPUT_AT2 = 'hasta';
Blockly.LANG_LISTS_GET_SUBLIST_TOOLTIP = 'Crea una copia de la porción especificada de una lista.';

// Variables Blocks.
Blockly.LANG_VARIABLES_GET_HELPURL = 'http://es.wikipedia.org/wiki/Variable_(programación)';
Blockly.LANG_VARIABLES_GET_TITLE = 'obtener';
Blockly.LANG_VARIABLES_GET_ITEM = 'elemento';
Blockly.LANG_VARIABLES_GET_TOOLTIP = 'Devuelve el valor de la variable.';
Blockly.LANG_VARIABLES_GET_CREATE_SET = 'Crear "asignar %1"';

Blockly.LANG_VARIABLES_SET_HELPURL = 'http://es.wikipedia.org/wiki/Variable_(programación)';
Blockly.LANG_VARIABLES_SET_TITLE = 'asignar';
Blockly.LANG_VARIABLES_SET_ITEM = 'elemento';
Blockly.LANG_VARIABLES_SET_TOOLTIP = 'Asigna el valor de la entrada a esta variable.';
Blockly.LANG_VARIABLES_SET_CREATE_GET = 'Crea "asignar %1"';

// Procedures Blocks.
Blockly.LANG_PROCEDURES_DEFNORETURN_HELPURL = 'http://es.wikipedia.org/wiki/Subrutina';
Blockly.LANG_PROCEDURES_DEFNORETURN_TITLE = 'para';
Blockly.LANG_PROCEDURES_DEFNORETURN_PROCEDURE = 'hacer algo';
Blockly.LANG_PROCEDURES_BEFORE_PARAMS = 'con:';
Blockly.LANG_PROCEDURES_DEFNORETURN_DO = '';
Blockly.LANG_PROCEDURES_DEFNORETURN_TOOLTIP = 'Crea una función que no devuelve nada.';

Blockly.LANG_PROCEDURES_DEFRETURN_HELPURL = 'http://es.wikipedia.org/wiki/Subrutina';
Blockly.LANG_PROCEDURES_DEFRETURN_TITLE = Blockly.LANG_PROCEDURES_DEFNORETURN_TITLE;
Blockly.LANG_PROCEDURES_DEFRETURN_PROCEDURE = Blockly.LANG_PROCEDURES_DEFNORETURN_PROCEDURE;
Blockly.LANG_PROCEDURES_DEFRETURN_DO = Blockly.LANG_PROCEDURES_DEFNORETURN_DO;
Blockly.LANG_PROCEDURES_DEFRETURN_RETURN = 'devuelve';
Blockly.LANG_PROCEDURES_DEFRETURN_TOOLTIP = 'Creates una función que devuelve datos.';

Blockly.LANG_PROCEDURES_DEF_DUPLICATE_WARNING = 'Advertencia:\n' +
    'La función tiene\n' +
    'parametros duplicados.';

Blockly.LANG_PROCEDURES_CALLNORETURN_HELPURL = 'http://es.wikipedia.org/wiki/Subrutina';
Blockly.LANG_PROCEDURES_CALLNORETURN_CALL = '';
Blockly.LANG_PROCEDURES_CALLNORETURN_TOOLTIP = 'Ejecuta la función definida por el usuario "%1".';

Blockly.LANG_PROCEDURES_CALLRETURN_HELPURL = 'http://es.wikipedia.org/wiki/Subrutina';
Blockly.LANG_PROCEDURES_CALLRETURN_CALL = Blockly.LANG_PROCEDURES_CALLNORETURN_CALL;
Blockly.LANG_PROCEDURES_CALLRETURN_TOOLTIP = 'Ejecuta la función definida por el usuario "%1" y usa su salida.';

Blockly.LANG_PROCEDURES_MUTATORCONTAINER_TITLE = 'entradas';
Blockly.LANG_PROCEDURES_MUTATORARG_TITLE = 'nombre de la entrada:';

Blockly.LANG_PROCEDURES_HIGHLIGHT_DEF = 'Resaltar definición del procedimiento';
Blockly.LANG_PROCEDURES_CREATE_DO = 'Crear "%1"';

Blockly.LANG_PROCEDURES_IFRETURN_TOOLTIP = 'Si el valor es verdadero, devuelve un valor.';
Blockly.LANG_PROCEDURES_IFRETURN_WARNING = 'Advertencia:\n' +
    'Este bloque solo puede ser\n' +
    'usado dentro de una función.';
