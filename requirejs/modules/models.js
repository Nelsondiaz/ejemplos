define(['resourceful'], function (resourceful) {
	resourceful.use('couchdb', {
		database : 'test'
	});

	return resourceful;
});