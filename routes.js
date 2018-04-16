var fs = require("fs");
var util = require("util");

module.exports = function(app){

	app.get('/', function(req, res, next) {
		res.json({message : "Envoyez un fichier", method : req.method});
 	 });
  app.post('/', function(req, res, next) {
	console.log(req.body);
    if (!req.is('application/json')) {
       res.json({message : "erreur d'envoi", methode : req.method});
       res.sendStatus(400);
    }
    else {
      fs.writeFile('input.json', JSON.stringify(req.body, null, "   "),  function(err) {
         if (err) {
            return console.error(err);
         }
         console.log("Data written successfully!");
      });
      res.json({message : "fichier reçu", method : req.method});
    }
  });
	app.get('*', function(req, res){
  		res.json({message : "404", method : req.method});
	});
}
