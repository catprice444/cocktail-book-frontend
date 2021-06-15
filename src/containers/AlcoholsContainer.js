import React from 'react'
import {connect} from 'react-redux'
import {fetchAlcohols} from '../actions/fetchAlcohols'
import AlcoholInput from '../components/AlcoholInput'
import Alcohols from '../components/Alcohols'

class AlcoholsContainer extends React.Component{
    
    componentDidMount(){
        this.props.fetchAlcohols()
    }
    
    render(){
        return(
            <div>
                <AlcoholInput/>
                <Alcohols/>
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