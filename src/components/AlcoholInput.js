import React from 'react' 
import {connect} from 'react-redux'
import {addAlcohol} from '../actions/addAlcohol'

class AlcoholInput extends React.Component{
    state = {name: '', website: '', preference: ''}

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addAlcohol(this.state)
    } 
    
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                   <label>Alcohol Name:</label><input type='text' value={this.state.name} name='name' onChange={this.handleChange}></input><br></br>
                
                   <label>Alcohol Website:</label><input type='text' value={this.state.website} name='website' onChange={this.handleChange}></input><br></br>

                   <label>Alcohol Preference:</label><input type='number' min='1' value={this.state.preference} name='preference' onChange={this.handleChange}></input><br></br> 
                
                <input type='submit'></input>
                </form>
            </div>
        )
    }
}

export default connect(null, {addAlcohol})(AlcoholInput)