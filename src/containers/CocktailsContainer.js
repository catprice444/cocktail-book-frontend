import React from 'react'
import CocktailInput from '../components/CocktailInput'
import Cocktails from '../components/Cocktails'
import {Route, Switch} from 'react-router-dom';
import Cocktail from '../components/Cocktail';

class CocktailsContainer extends React.Component {
  

    render(){
        return(
            <div>
                <Switch>
                    {/* <CocktailInput alcohol={this.props.alcohol}/> */}
                    {/* <Route path='alcohols/:id/cocktails/:id' render={(routerProps) => <Cocktail {...routerProps} cocktails={this.props.alcohols.cocktails}/>}/> */}
                    {/* <Route path='alcohols/:id/cocktails' render={(routerProps) => <Cocktails {...routerProps} cocktails={this.props.alcohols.cocktails}/>}/> */}
                    {/* <Cocktails cocktails={this.props.alcohol && this.props.alcohol.cocktails}/> */}
                    <Route path="/alcohols/:id/cocktails/:id" component={Cocktail} />
                </Switch>
            </div>
        )
    }
}



export default CocktailsContainer