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
                <Route path='/cocktails' component={AllCocktails}/>
                {/* <Route path='/alcohols/:id' render={(routerProps) => <Alcohol {...routerProps} alcohols={this.props.alcohols}/>}/> */}
                {/* <Route path='/alcohols' render={(routerProps) => <Alcohols {...routerProps} alcohols={this.props.alcohols}/>}/> */}
                {/* <Route path='/' render={(routerProps) => <Homepage {...routerProps} alcohols={this.props.alcohols}/>}/> */}
            </Switch>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        cocktails: state.cocktails
    }
}

export default connect(mapStateToProps, {fetchCocktails})(AllCocktailsContainer)