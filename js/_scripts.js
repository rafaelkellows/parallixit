/**
*@fileOverview Init's component
* @module Init
*
*/

/**
* Teste Function
* @exports Init
* @constructor
*/
function init(){
	/**
  	* Start Method
  	* @param {String} txt - value to be alerted
  	* @memberOf Init#
  	* @name start
  	*/
	this.start = function(txt){
		alert(txt);
	};	
}



var init = new init();

init.start("Testando");