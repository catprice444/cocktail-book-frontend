import React from "react";
import {connect} from 'react-redux';
import AlcoholsContainer from './containers/AlcoholsContainer';
import AllCocktailsContainer from './containers/AllCocktailsContainer';
import Navbar from './components/Navbar'




class App extends React.Component{
  componentDidMount(){
  }
  
  render(){
    return(
      <div className="Cocktail Book">
       
        <Navbar/>
        <AlcoholsContainer/>
        <AllCocktailsContainer/>
      </div>
    );
  }
}

export default connect()(App);
