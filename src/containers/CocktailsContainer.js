import React from 'react'
import CocktailInput from '../components/CocktailInput'
import Cocktails from '../components/Cocktails'
import {Route, Switch} from 'react-router-dom';
import Cocktail from '../components/Cocktail';
import { Fragment } from 'react';

class CocktailsContainer extends React.Component {
  

    render(){
        return(
            <div>
                
                <Switch>
                    <Route path="/alcohols/:id/cocktails/:id" render={(routerProps) => <Cocktail {...routerProps} cocktails={this.props.alcohol && this.props.alcohol.cocktails}/>}/>
                    <Route path="/alcohols/:id/cocktails" render={(routerProps) => <Cocktails {...routerProps} cocktails={this.props.alcohol && this.props.alcohol.cocktails}/>}/>
                    
                    <Route path="/alcohols/:id" render={(routerProps) => 
                    <Fragment>
                        <CocktailInput alcohol={this.props.alcohol}/>
                        <Cocktails {...routerProps} cocktails={this.props.alcohol && this.props.alcohol.cocktails}/>
                    </Fragment>
                     } />
                </Switch>

                
            </div>
        )
    }
}



export default CocktailsContainer