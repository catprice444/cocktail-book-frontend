import React from 'react';
import {connect} from 'react-redux';

class CocktailInput extends React.Component {
    render(){
        return(
            <div>
              <form>
                  <label>Cocktail: </label>
                  <input type='text'></input><br></br>

                  <label>Ingredients: </label>
                  <input type='text'></input><br></br>

                  <label>Recipe: </label>
                  <input type='text'></input><br></br>

                  <label>Rating: </label>
                    <select>
                        <option> 1 </option>
                        <option> 2 </option>
                        <option> 3 </option>
                        <option> 4 </option>
                        <option> 5 </option>
                    </select>

              </form>
            </div>
        )
    }

}

export default connect(null, )(CocktailInput)