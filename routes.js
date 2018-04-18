
module.exports = function(app){

	require("./routes/root")(app);

	app.get('*', function(req, res){
  		res.json({message : "404", method : req.method});
	});
}
