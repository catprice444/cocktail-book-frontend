import React from 'react';
import {connect} from 'react-redux';
import {Route, Switch} from 'react-router-dom';
import {fetchCocktails} from '../actions/fetchCocktails';
import Homepage from '../components/Homepage';



class AllCocktailsContainer extends React.Component{
    
    componentDidMount(){
        this.props.fetchCocktails()
    }
    
    render(){
        return(
            <div>
            
             <Switch>
            
                <Route exact path='/' render={(routerProps) => <Homepage {...routerProps} cocktails={this.props.cocktails}/>}/>
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