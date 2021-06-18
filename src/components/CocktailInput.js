import React from 'react';
import {connect} from 'react-redux';
import {addCocktail} from '../actions/addCocktail'

class CocktailInput extends React.Component {
    state = {
        name: '',
        ingredients: '',
        recipe: '',
        rating: '1'
    }

    handleChange = (event) =>{
        this.setState({
            [event.target.name]: event.target.value
        }) 
    }

    handleSubmit = (event) =>{
        event.preventDefault();
        this.props.addCocktail(this.state)
        this.setState({
            name: '',
            ingredients: '',
            recipe: '',
            rating: '1'
        })
    }
    
    render(){
        return(
            <div>
              <form onSubmit={this.handleSubmit}>
                  <label>Cocktail: </label>
                  <input type='text' name='name' value={this.state.name} onChange={this.handleChange}></input><br></br>

                  <label>Ingredients: </label>
                  <input type='text' name='ingredients' value={this.state.ingredients} onChange={this.handleChange}></input><br></br>

                  <label>Recipe: </label>
                  <input type='text' name='recipe' value={this.state.recipe} onChange={this.handleChange}></input><br></br>

                  <label>Rating: </label>
                    <select name='rating' value={this.state.rating} onChange={this.handleChange}>
                        <option> 1 </option>
                        <option> 2 </option>
                        <option> 3 </option>
                        <option> 4 </option>
                        <option> 5 </option>
                    </select> <br></br>

                <input type="submit"/>
              </form>
            </div>
        )
    }

}

export default connect(null, {addCocktail} )(CocktailInput)