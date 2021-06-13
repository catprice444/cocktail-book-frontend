import React from "react";

class App extends React.Component{
  componentDidMount(){
    fetch("http://localhost:3000/api/v1/alcohols")
    .then(resp => resp.json())
    .then(data => console.log(data[0].name))
  }
  
  render(){
    return(
      <div className="Cocktail Book">
        Cocktail Book
      </div>
    );
  }
}
 

export default App;
