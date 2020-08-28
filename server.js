const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

//Initialisation des variables ^pur créer l'app
const app = express();
const port = process.env.PORT || 8080;

app.use(cors()); //Connexion côté cline tavec le côté server
app.use(express.json()); //pas besoin du body parser

/*Connexion du MongoDB*/
 const uri = process.env.CONNEXION_BLOG; //pour la connex. au .env file

 
 mongoose.connect(uri, {
     useNewUrlParser: true // Tant que c'est vrai
 });

 const connexion = mongoose.connection; //Si la connexion est ouverte une première fois

connexion.once("open", ()=>
 console.log("La connexion avec la BDD de MongoDB a bien été effectué") //Okay
);