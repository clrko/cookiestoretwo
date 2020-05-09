import React from "react"
import axios from "axios"

class AddRecipes extends React.Component {
    state = {
        description: "",
        ingredient: "",
        name: "", 
        tools: "",
        success: false,
    }

    handleChange = event => {
        this.setState({[event.target.name]: event.target.value })
        // console.log("this.state.name", this.state.name)
    }

    handleSubmit = event => {
        event.preventDefault()
        console.log("affiche la state", this.state)
        axios.post(`http://localhost:3030/recipe/addRecipe`, {
            name: event.target.name.value,
            ingredient: event.target.ingredient.value,
            description: event.target.description.value,
            tools: event.target.name.value
        })
        .then(() => {
            this.setState({success: true})
        })
    }

    render() {
        return (
        <div className="recipeForm">
            <form onSubmit={this.handleSubmit}>
                <input 
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={this.state.name}
                    onChange={this.handleChange}
                />

                <input 
                    type="text"
                    name="ingredient"
                    placeholder="Ingredient"
                    value={this.state.ingredient}
                    onChange={this.handleChange}
                />

                <input 
                    type="text"
                    name="description"
                    placeholder="Description"
                    value={this.state.description}
                    onChange={this.handleChange}
                />

                <input 
                    type="text"
                    name="tools"
                    placeholder="Tools"
                    value={this.state.tools}
                    onChange={this.handleChange}
                />

                <input type="submit" value="Submit" />
            </form>
            {this.state.success ? <p>ok</p> : null }
        </div>
        )
    }
}

export default AddRecipes