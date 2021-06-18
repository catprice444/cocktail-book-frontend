import React from 'react';
// import {Link} from 'react-router-dom';
import CocktailsContainer from '../containers/CocktailsContainer'

const Alcohol = (props) => {
    let alcohol = props.alcohols.filter(alcohol => alcohol.id == props.match.params.id)[0]
    return(
        <div>
        <h1>
            {alcohol ? alcohol.name : null} 
            {/* {alcohol ? <a href='${alcohol.website}'/> : null} */}
            {/* Fix the link */}
        </h1>
        <CocktailsContainer alcohol={alcohol}/>
        </div>
    )
}

export default Alcohol