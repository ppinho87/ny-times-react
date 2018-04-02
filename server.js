const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(express.static("client/build"));
app.use(routes);

mongoose.Promise = global.Promise;

mongoose.connect(
	process.env.MONGODB_URI || "mongodb://admin:admin123@ds115214.mlab.com:15214/nyt-react",
	{
		useMongoClient: true
	}
);

app.listen(PORT, function(){
	console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});