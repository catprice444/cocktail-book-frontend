import React from "react";
import {connect} from 'react-redux';
import {fetchAlcohols} from './actions/fetchAlcohols'


class App extends React.Component{
  componentDidMount(){
   this.props.fetchAlcohols({type: "FETCH_ALCOHOLS", payload: {name: "Vodka"}})
  }
  
  render(){
    return(
      <div className="Cocktail Book">
        Cocktail Book
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
