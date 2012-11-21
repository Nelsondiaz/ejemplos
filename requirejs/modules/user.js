define(['models'], function(models){
	var User = models.define('user', function () {
		//Properties
		this.string('username');
		this.object('password');
	});

	return User;	
});