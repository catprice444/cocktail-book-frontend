import React from "react";
import {connect} from 'react-redux';
import AlcoholsContainer from './containers/AlcoholsContainer'



class App extends React.Component{
  componentDidMount(){
  }
  
  render(){
    return(
      <div className="Cocktail Book">
        <AlcoholsContainer/>
      </div>
    );
  }
}

export default connect()(App);
