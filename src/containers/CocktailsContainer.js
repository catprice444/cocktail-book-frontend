import React from 'react'
import CocktailInput from '../components/CocktailInput'
import Cocktails from '../components/Cocktails'

class CocktailsContainer extends React.Component {
    render(){
        return(
            <div>
                <CocktailInput/>
                <Cocktails cocktails={this.props.alcohol && this.props.alcohol.cocktails}/>
            </div>
        )
    }

}

export default CocktailsContainer