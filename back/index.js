const express = require("express")
const morgan = require("morgan")
const bodyParser = require("body-parser")
const connection = require("./src/helper/db.js")
const recipe = require("./src/routes/recipe.js")


const app = express()

/* Middleware morgan pour voir l7activité du serveur qui se lance au lancement d'une requete*/
app.use(morgan("dev"))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use("/recipe", recipe) /* si un user demande à aller dans /recipe, redirige le vers le fichier recipe.js */

/* creation route*/
app.get("/", (req, res) => {
    res.send("I am here '/'")
})

let server = app.listen(3030, () => {
    console.log("listening on port ", server.address().port)
})