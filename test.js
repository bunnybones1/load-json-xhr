loadJson = require('./');

loadJson('test.json', function(obj) {
	console.log(obj);
}, function(err) {
	console.log(err);
})