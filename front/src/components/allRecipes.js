import React, { Component } from "react"

import axios from "axios"

class AllRecipes extends Component {
    state = {
        recipe: null
    }

    componentDidMount() {
        axios.get(`http://localhost:3030/recipe/showRecipeList/`)
        .then(result => {
            // console.log("result.data est", result.data)
            this.setState({ recipe: result.data})
        })
    }

    render() {
        console.log("state recipe", this.state.recipe)
        if (this.state.recipe === null ) {
            return <p>Loading....</p>
        }

        const tabRecipes = this.state.recipe.map((value, key) => {
            return (
                <div className="recipeContainer" key={key} >
                    <div className="recipeValues">{value.id}</div>
                    <div className="recipeValues">{value.name}</div>
                    <div className="recipeValues">{value.ingredient}</div>
                    <div className="recipeValues">{value.description}</div>
                </div>
            )
        })

        return (
            <div className="globalForm">{tabRecipes}</div>
        )
    }
}

export default AllRecipes