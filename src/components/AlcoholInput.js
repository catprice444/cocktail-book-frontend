import React from 'react' 
import {connect} from 'react-redux'
import {addAlcohol} from '../actions/addAlcohol'

class AlcoholInput extends React.Component{
    state = {
        name: "",
        website: "",
        preference: ""
      }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addAlcohol(this.state)
        this.setState({
            name: "",
            website: "",
            preference: ""
        })
    } 
    
    render() {
        return (
          <div>
            <form onSubmit={this.handleSubmit}>
              <label>Name: </label>
              <input type='text' value={this.state.name} name="name" onChange={this.handleChange}/><br/>
              <label>Website: </label>
              <input type='text' value={this.state.website} name="website" onChange={this.handleChange}/><br/>
              <label>Preference: </label>
              <input type='text' value={this.state.preference} name="preference" onChange={this.handleChange}/><br/>
              <input type="submit"/>
            </form>
          </div>
        )
      }

}

export default connect(null, {addAlcohol})(AlcoholInput)