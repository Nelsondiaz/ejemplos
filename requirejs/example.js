var requirejs = require('requirejs');

requirejs.config({
    baseUrl: 'modules',
    nodeRequire: require
});

requirejs(['server'], function(server){
	server.listen(3000);

	console.log('server running at http://localhost:3000');
});