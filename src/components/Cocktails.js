import React from 'react';
import {deleteCocktail} from '../actions/deleteCocktail';
import {connect} from 'react-redux';

const Cocktails = (props) => {
    const handleDelete = () =>{

    }
    
    return (
        <div>

            {props.cocktails && props.cocktails.map(cocktail => 
            <div key={cocktail.id}> 
            <h3><u> Cocktail: {cocktail.name}</u> </h3> 
            <p><b>{cocktail.rating}/5 Stars</b></p>

            <p><i>Ingredients:</i> {cocktail.ingredients}</p>

            <p><i>Recipe:</i> {cocktail.recipe}</p>

            <button onClick={handleDelete}>Delete</button>
            </div>)}

        </div>
    

    )

}

export default connect(null, {deleteCocktail})(Cocktails)