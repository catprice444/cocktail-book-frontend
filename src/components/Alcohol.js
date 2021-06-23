import React from 'react';
import CocktailsContainer from '../containers/CocktailsContainer';


const Alcohol = (props) => {
    let alcohol = props.alcohols.filter(alcohol => alcohol.id == props.match.params.id)[0]
    
    return(
        
        <div>
        <h1>
            {alcohol ? alcohol.name : null}
        </h1>
        

        <CocktailsContainer alcohol={alcohol}/>
        </div>
    )
}

export default Alcohol