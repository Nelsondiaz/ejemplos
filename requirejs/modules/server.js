define(['express','user'], function (express, User) {
	var server = express();

	server.get('/', function (req,res) {
		User.all(function(err, docs){
			res.send(err || docs);
		});
	});

	return server;
});