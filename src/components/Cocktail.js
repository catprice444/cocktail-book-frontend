import React from 'react';

const Cocktail = (props) => {
    let cocktail = props.alcohols.filter(alcohol => alcohol.id.cocktail.id == props.match.params.id)[0]
    return(
        
        <div>
        
        
        <h1>
            {cocktail ? cocktail.name : null}
        </h1>
        
        </div>
    )
}

export default Cocktail