import React from 'react';
// import {deleteCocktail} from '../actions/deleteCocktail';
import {connect} from 'react-redux';
import {editCocktail} from '../actions/editCocktail';

const Cocktails = (props) => {

    // const handleDelete = (cocktail) =>{
    //     props.deleteCocktail(cocktail.id, cocktail.alcohol_id)
    // }

    const handleEdit = (cocktail) =>{
        props.editCocktail(cocktail.id, cocktail.alcohol_id)
    }
    
    return (
        <div>
            
            {props.cocktails && props.cocktails.map(cocktail => 
            <div key={cocktail.id}> 
            <h3><u> Cocktail: {cocktail.name}</u> </h3> 
            <p><b>{cocktail.rating}/5 Stars</b></p>

            <p><i>Ingredients:</i> {cocktail.ingredients}</p>

            <p><i>Recipe:</i> {cocktail.recipe}</p>

            {/* <button onClick={() => handleDelete(cocktail)}>Delete</button> */}
            {/* </div>)} */}

            <button onClick={() => handleEdit(cocktail)}>Edit</button>
            </div>)}

        </div>
    

    )

}

// export default connect(null, {deleteCocktail})(Cocktails)
export default connect(null, {editCocktail})(Cocktails)