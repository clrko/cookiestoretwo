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
                <div className="" key={key} >
                    <div>{value.id}</div>
                    <div>{value.name}</div>
                    <div>{value.ingredient}</div>
                    <div>{value.description}</div>
                </div>
            )
        })
        
        return (
            <div>{tabRecipes}</div>
        )
    }
}

export default AllRecipes