/**Configuration du server Express */

const express = require("express"); //une nuvelle instance d'express
const mongoose = require("mongoose");
const cors = require("cors");

//Initialisation des variables ^pur créer l'app
const app = express();
const port = process.env.PORT || 8080;

app.use(cors()); //Connexion côté cline tavec le côté server
app.use(express.json()); //pas besoin du body parser

require("dotenv").config();

/*Connexion du MongoDB*/
 const uri = process.env.CONNEXION_BLOG; //pour la connex. au .env file

 
 mongoose.connect(uri, {
     useNewUrlParser: true, // Tant que c'est vrai
     useUnifiedTopology: true
 });

 const connexion = mongoose.connection; //Si la connexion est ouverte une première fois

connexion.once("open", ()=>
 console.log("La connexion avec la BDD de MongoDB a bien été effectué") //Okay
);

app.listen(port, () => console.log(`l'application est déployé sur le port suivant : ${port}`));