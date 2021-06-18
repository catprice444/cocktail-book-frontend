import React from 'react';

const Cocktails = (props) => {
    return (
        <div>

            {props.cocktails && props.cocktails.map(cocktail => 
            <div key={cocktail.id}> 
            <h3><u> Cocktail: {cocktail.name}</u> </h3> 
            <p><b>{cocktail.rating}/5 Stars</b></p>

            <p><i>Ingredients:</i> {cocktail.ingredients}</p>

            <p><i>Recipe:</i> {cocktail.recipe}</p>
            </div>)}<br></br>

        </div>
    

    )

}

export default Cocktails 