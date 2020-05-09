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

    handleSubmit = event => {
        event.preventDefault()
        console.log("affiche la state", this.state)
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
            {/* {this.state.success ? <p>ok</p> : null } */}
        </div>
        )
    }
}

export default AddRecipes