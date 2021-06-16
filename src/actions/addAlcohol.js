export function addAlcohol(data) {

    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/alcohols', {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          method: 'POST',
          body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(alcohol => dispatch({type: 'ADD_ALCOHOL', payload: alcohol}))
      }
    
}
