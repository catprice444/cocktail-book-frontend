import React from 'react';
import {connect} from 'react-redux';
import {Route, Switch} from 'react-router-dom';
import {fetchAlcohols} from '../actions/fetchAlcohols';
import AlcoholInput from '../components/AlcoholInput';
import Alcohols from '../components/Alcohols';
import Alcohol from '../components/Alcohol';


class AlcoholsContainer extends React.Component{
    
    componentDidMount(){
        this.props.fetchAlcohols()
    }
    
    render(){
        return(
            <div>
             <Switch>
                <Route path='/alcohols/new' component={AlcoholInput}/>
                <Route path='/alcohols/:id' render={(routerProps) => <Alcohol {...routerProps} alcohols={this.props.alcohols}/>}/>
                <Route path='/alcohols' render={(routerProps) => <Alcohols {...routerProps} alcohols={this.props.alcohols}/>}/>
            </Switch>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        alcohols: state.alcohols
    }
}

export default connect(mapStateToProps, {fetchAlcohols})(AlcoholsContainer)