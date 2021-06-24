import React from 'react';
// import {Link} from 'react-router-dom'

const AllCocktails = (props) =>{
    console.log(props)
    return (
        <div>
            
            {props.cocktails.map(cocktail => 
            <h3 key={cocktail.id}>
                {cocktail.name}
            </h3>
            )}
        </div>
    )
}

export default AllCocktails