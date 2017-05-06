var express=require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var nodeRoute = require("./noderoute");
var app = express();


//Data Base Connection
mongoose.connect('mongodb://krupamay:krupamay@ds033116.mlab.com:33116/krupadb');
var urlencodedParser = bodyParser.urlencoded({ extended: false});
app.use(bodyParser.json());

nodeRoute(app);

//Create a schema

var studentSchema = new mongoose.Schema({
username : String,
email : String,
password : String
});

var StudentModel = mongoose.model('StudentModel', studentSchema);

//static Files
app.use('/assets',express.static('./assets'));
app.use('/angular',express.static('./angular'));
app.use('/sections',express.static('./angular/sections'));

app.post('/signup',function(req, res){
  console.log("POST Method called");
	console.log(req.body);
	var item = StudentModel(req.body).save(function(err){
	if(err) throw err;
	console.log('Data saved');
	});
});

app.post('/login',function(req, res){
  console.log("login Method called");
	console.log(req.body);
  var query = StudentModel.findOne({ 'username': req.body.username });
  query.select('username email');

  query.exec(function (err, StudentModel) {
  if (err) throw err;
  console.log("Data after querey"+StudentModel.email + StudentModel.username);
  var result = {
    username : StudentModel.username,
    email : StudentModel.email
  };
  res.json(result);
})

});

/*app.get('/',function(req,res){

  res.render('index.ejs');
});
*/
app.listen(8000);
console.log("app is listening at port 8000");

exports = module.exports = app;
