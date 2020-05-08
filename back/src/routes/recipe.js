const express = require("express")
const connection = require("../helper/db.js")
const Router = express.Router()

Router.get("/", (req, res) => {
    res.send("I am here GET '/recipe'")
})

/* recuprérer des data */
Router.get("/showRecipeList", (req, res) => {
    const sql = "SELECT * FROM cookieRecipe"
    connection.query(sql, (err, result) => {
        if (err) throw err
        return res.status(200).send(result)
    })
    // res.send("I am on  Get '/recipe/showRecipeList'")
})

/* envoyer des data */
Router.post("/addRecipe", (req, res) => {
    console.log("req BODY", req.body)
    const sql = "INSERT INTO cookieRecipe (name, ingredient, description) VALUES (?, ?, ?)"
    
    const values = [
        req.body.name, 
        req.body.ingredient,
        req.body.description,
    ]

    connection.query(sql, values, (err, result) => {
        if (err) throw err
        return res.status(200).send(result)
    })
    // res.send("I am on  Get '/recipe/showRecipeList'")
})

/* Update des data */
Router.put("/updateRecipe", (req, res) => {
    // res.send("I am on  Get '/recipe/showRecipeList'")
})

/* Delete des data */
Router.delete("/deleteRecipe", (req, res) => {
    // res.send("I am on  Get '/recipe/showRecipeList'")
})


module.exports = Router
