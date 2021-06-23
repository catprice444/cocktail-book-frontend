import React from 'react';
import {deleteCocktail} from '../actions/deleteCocktail';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

const Cocktails = (props) => {

    const handleDelete = (cocktail) =>{
        props.deleteCocktail(cocktail.id, cocktail.alcohol_id)
    }

   
    
    return (
        <div>
            <h3>Cocktail List</h3>
            {props.cocktails && props.cocktails.map(cocktail => 
            <div key={cocktail.id}> 
            <h4><u> Cocktail:<Link to={`/alcohols/${cocktail.alcohol_id}/cocktails/${cocktail.id}`}>{cocktail.name}</Link></u> </h4> 
            <p><b>{cocktail.rating}/5 Stars</b></p>

            <p><i>Ingredients:</i> {cocktail.ingredients}</p>

            <p><i>Recipe:</i> {cocktail.recipe}</p>

            <button onClick={() => handleDelete(cocktail)}>Delete</button>
            </div>)}

            

        </div>
    

    )

}

export default connect(null, {deleteCocktail})(Cocktails)
