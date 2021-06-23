import React from 'react'
import CocktailInput from '../components/CocktailInput'
import Cocktails from '../components/Cocktails'
import {Route, Switch} from 'react-router-dom';
import Cocktail from '../components/Cocktail';

class CocktailsContainer extends React.Component {
  

    render(){
        return(
            <div>
                {/* <Switch> */}
                    <CocktailInput alcohol={this.props.alcohol}/>
                    {/* <Route path={`alcohols/${alcohol.id}/cocktail/${cocktail.id}/edit`} render={(routerProps) => <Cocktail {...routerProps} alcohols={this.props.alcohols.id} cocktail={this.props.alcohols.cocktail}/>}/> */}
                    {/* <Route path='/cocktails/:id' render={(routerProps) => <Cocktail {...routerProps} cocktails={this.props.alcohols.cocktails}/>}/> */}
                    <Cocktails cocktails={this.props.alcohol && this.props.alcohol.cocktails}/>
                {/* </Switch> */}
            </div>
        )
    }
}



export default CocktailsContainer