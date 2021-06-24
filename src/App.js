import React from "react";
import {connect} from 'react-redux';
import AlcoholsContainer from './containers/AlcoholsContainer';
import HomepageContainer from './containers/HomepageContainer';
import Navbar from './components/Navbar';
import './App.css';



class App extends React.Component{
  componentDidMount(){

  }
  
  render(){
    return(
      <div className="Cocktail Book">
       
        <Navbar/>
        <AlcoholsContainer/>
        <HomepageContainer/>
      </div>
    );
  }
}

export default connect()(App);
