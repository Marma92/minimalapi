var fs = require("fs");
var util = require("util");

module.exports = function(app){
  /*
  *get method of our pseudo-crud api
  *will just send you a short json that will ask you to send a file to the API
  */
  app.get('/', function(req, res, next) {
      res.json({message : "Envoyez un fichier", method : req.method});
   });

   /*
   *post method of our pseudo-crud api
   *will receive data and write them in a json file
   */
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

 }
