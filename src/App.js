import React from "react";
import {connect} from 'react-redux';
// import {fetchAlcohols} from './actions/fetchAlcohols'
import AlcoholsContainer from './containers/AlcoholsContainer'


class App extends React.Component{
  componentDidMount(){
  //  this.props.fetchAlcohols({type: "FETCH_ALCOHOLS", payload: {name: "Vodka"}})
  }
  
  render(){
    return(
      <div className="Cocktail Book">
        <AlcoholsContainer/>
      </div>
    );
  }
}

// const mapStateToProps = (state) =>{
//   return {
//     alcohols: state.alcohols
//   }
// }
 

export default connect(null, {fetchAlcohols})(App);
