import React from 'react'
import {Link} from 'react-router-dom'

const Homepage = (props) => {
    return(
        <div className='center'>
            <h1>Welcome To Your Cocktail Book! </h1>

            <h3>List of current cocktails</h3>

           {props.cocktails.map(cocktail => 
            <ol key={cocktail.id}>
                <b><Link to={`/alcohols/${cocktail.alcohol_id}`}>{cocktail.name}</Link></b> <br></br>
                Rating: {cocktail.rating}/5 stars
            </ol>
            )}
        </div>
    )
}

export default Homepage