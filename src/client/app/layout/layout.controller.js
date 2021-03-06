( function () {
	'use strict';

	/* @ngInject */
	function LayoutController( $rootScope, $timeout, config, logger ) {
		var self = this;

		self.navline = {
			title: config.appTitle
		};

		activate();

		function activate() {
			logger.success( config.appTitle + ' loaded!', null );
		}
	}

	angular
		.module('app.layout')
		.controller('LayoutController', LayoutController);

} ) ();
