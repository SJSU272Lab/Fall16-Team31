var mongo = require("./mongo");
var mongoConnectURL = "mongodb://pavanshah77:pavanshah77@ds129028.mlab.com:29028/helpmyusersdatabase";


exports.login = function(req, res)
{
	console.log("login");
	console.log("login "+req.body.username);
	var username = req.body.username;
	var password = req.body.password;

	mongo.connect(mongoConnectURL, function(connection){
		console.log("connection received "+connection);
		
		console.log('Connected to mongo at: ' + mongoConnectURL);
		var coll = mongo.collection('usercollection');		//collection data in coll
		
		coll.findOne({username : username, password : password}, function(err, user){
			
			if (user) 
			{
				console.log("success");
				console.log(user);
				res.send(user);
				req.session.username = username;
				console.log(req.session.username);
				console.log(username);	
			} 
			
			else 
			{
				console.log("failure");
			}
		});
	});
}

exports.signUp = function(req, res)
{
	
}