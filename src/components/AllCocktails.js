import React from 'react';
import {Link} from 'react-router-dom'

const AllCocktails = (props) =>{
    return (
        <div>
            
            {props.cocktails.map(cocktail => 
            <h3 key={cocktail.id}>
                <Link to={`/cocktails/${cocktail.id}`}>{cocktail.name}</Link>
            </h3>
            )}
        </div>
    )
}

export default AllCocktails