var fs = require("fs");
var util = require("util");

module.exports = function(app){
  app.get('/', function(req, res) {
		res.json({message : "Envoyez un fichier", method : req.method});
  });
  app.post('/', function(req, res) {
    if (!req.is('application/json')) {
       res.json({message : "erreur d'envoi", methode : req.method});
       res.sendStatus(400);
    }
    else {
      console.log(req);
      fs.writeFile('input.json', JSON.stringify(req.body, null, "   "),  function(err) {
         if (err) {
            return console.error(err);
         }
         console.log("Data written successfully!");
      });
      res.json({message : "fichier reçu", methode : req.method});
    }
  });
	app.get('*', function(req, res){
  		res.json({message : "404", method : req.method});
	});
}
