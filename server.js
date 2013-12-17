
var util    = require('util')
				,http = require('http')
				,port = 1214
				,open = require('open');

var express = require('express');
var app = express();


app.configure(function() {
	app.use(express.logger('dev'));						// Affichage des requêtes sur la console ('default', 'short', 'tiny', 'dev')
	app.use(express.bodyParser());      				// Recupération des messages envoyés par le client (req.body)
	app.use(app.router);                            	// Router (requetes app.VERB, VERB = GET, POST ...)
	app.use(express.static(__dirname + '/')); 	// Répertoire des fichiers statiques (page HTML, CSS, etc)
	app.use(express.errorHandler({dumpExceptions: true, showStack: true})); // Si une erreur 500 intervient, Express retourne un rapport au format HTML
});


app.listen(port, '0.0.0.0', 511, function() {
	// Once the server is listening we automatically open up a browser
	console.log('+---------------------------------------------------+');
	console.log('|                      Présentation Angular          |');
	console.log('+---------------------------------------------------+');
	console.log('');
	console.log('Serveur HTTP  : http://localhost:' + port + '/');
	console.log('');
	open('http://localhost:' + port + '/');
});