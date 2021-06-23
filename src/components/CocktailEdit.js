import React from 'react';
import {connect} from 'react-redux';
import {editCocktail} from '../actions/editCocktail'

class CocktailEdit extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            name: props.alcohol.cocktails.name,
            ingredients: props.alcohol.cocktails.ingredients,
            recipe: props.alcohol.cocktails.recipe,
            rating: props.alcohol.cocktails.rating
        }
    }

    handleChange = (event) =>{
        this.setState({
            [event.target.name]: event.target.value
        }) 
    }

    handleSubmit = (event) =>{
        event.preventDefault();
        let cocktail = {...this.state, id: this.props.cocktail.id}
        this.props.editCocktail(cocktail)
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

export default connect(null, {editCocktail} )(CocktailEdit)