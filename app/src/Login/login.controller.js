/**
 * @ngdoc controller
 * @name app.Login.controller:Login
 * @description < description placeholder >
 */

(function(){

  'use strict';

	angular
		.module('app.Login')
		.controller('Login', Login);

  /* @ngInject */
	function Login(){
		var vm = this;

		vm.testFunction = testFunction;

    /////////////////////

    /**
     * @ngdoc method
     * @name testFunction
     * @param {number} num number is the number of the number
     * @methodOf app.Login.controller:Login
     * @description
     * My Description rules
     */
    function testFunction(num){
			console.info('This is a test function');
		}
	}

}());
