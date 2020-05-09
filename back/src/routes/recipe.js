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

/* Pour avoir une ligne id correpsond à un apramtere, on aurait pu mettre poulet. ça correspond à la key. Params va retourner un objet. */
Router.get("/showRecipeList/:id", (req, res) => {
    console.log("REQ PARAMS", req.params.id)
    const id = req.params.id
    const sql = "SELECT * FROM cookieRecipe WHERE id = ?"
    const values = [id]
    connection.query(sql, values, (err, result) => {
        if (err) throw err
        return res.status(200).send(result[0])
    })
})

/* Update des data */
Router.put("/updateRecipe/:id", (req, res) => {
    console.log("REQ BODY", req.body)
    console.log("REQ PARAMS", req.params)
    const id = req.params.id
    const sql = "UPDATE cookieRecipe SET name = ?, ingredient = ?, description = ?, tools = ? WHERE id = ?" 
    const values = [
        req.body.name, 
        req.body.ingredient,
        req.body.description,
        req.body.tools,
        id
    ]
    connection.query(sql, values, (err, result) => {
        if (err) throw err
        return res.status(200).send(result)
    })
})

/* Delete des data */
Router.delete("/deleteRecipe/:id", (req, res) => {
    console.log("REQ PARAMS", req.params)
    const id = req.params.id
    const sql = "DELETE FROM cookieRecipe WHERE id = ?"
    const values = [id]
    connection.query(sql, values, (err, result) => {
        if (err) throw err
        return res.status(200).send(result)
    })
})


module.exports = Router
