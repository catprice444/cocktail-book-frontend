import React from 'react';
import {connect} from 'react-redux';
import {Route, Switch} from 'react-router-dom';
import {fetchCocktails} from '../actions/fetchCocktails';
import AllCocktails from '../components/AllCocktails';


class AllCocktailsContainer extends React.Component{
    
    componentDidMount(){
        this.props.fetchCocktails()
    }
    
    render(){
        return(
            <div>
            
             <Switch>
                <Route path='/cocktails' render={(routerProps) => <AllCocktails {...routerProps} cocktails={this.props.cocktails}/>}/> 
            </Switch>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        cocktails: state.cocktails.cocktails
    }
}

export default connect(mapStateToProps, {fetchCocktails})(AllCocktailsContainer)