import React from 'react';

const Cocktail = (props) => {
    let cocktail = props.cocktails.filter(cocktail => cocktail.id == props.match.params.id)[0]
    return(
        <div className="center">
        <h2>{cocktail.name}</h2>

        <p><b>{cocktail.rating}/5 Stars</b></p>

        <p><i>Ingredients:</i> {cocktail.ingredients}</p>

        <p><i>Recipe:</i> {cocktail.recipe}</p>
        </div>
    )
}

export default Cocktail