'use strict';
/* globals $, app, socket */

define('admin/plugins/composer-stupid', ['settings'], function(Settings) {

	var ACP = {};

	ACP.init = function() {
		Settings.load('composer-stupid', $('.composer-stupid-settings'));

		$('#save').on('click', function() {
			Settings.save('composer-stupid', $('.composer-stupid-settings'), function() {
				app.alert({
					type: 'success',
					alert_id: 'composer-stupid-saved',
					title: 'Settings Saved',
					message: 'Please reload your NodeBB to apply these settings',
					clickfn: function() {
						socket.emit('admin.reload');
					}
				});
			});
		});
	};

	return ACP;
});
