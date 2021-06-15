import React from 'react' 

class AlcoholInput extends React.Component{
    state = {name: '', website: '', preference: ''}

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    
    render(){
        return(
            <div>
                <form>
                   <label>Alcohol Name:</label><input type='text' value={this.state.name} name='name' onChange={this.handleChange}></input><br></br>
                
                   <label>Alcohol Website:</label><input type='url' value={this.state.website} name='website' onChange={this.handleChange}></input><br></br>

                   <label>Alcohol Preference:</label><input type='number' min='1' value={this.state.preference} name='preference' onChange={this.handleChange}></input> 
                </form>
            </div>
        )
    }
}

export default AlcoholInput