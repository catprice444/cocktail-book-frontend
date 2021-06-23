import React from 'react';

const Cocktail = (props) => {
    console.log(props)
    let cocktail = props.cocktails.filter(cocktail => cocktail.id == props.match.params.id)[0]
    return(
        
        <div>
        
        {cocktail ? cocktail.name :null}
{/* cocktail         */}
        </div>
    )
}

export default Cocktail