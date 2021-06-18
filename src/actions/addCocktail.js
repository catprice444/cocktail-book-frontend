export const addCocktail = (cocktail, alcoholId) =>{
    return(dispatch) =>{
        fetch(`http://localhost:3000/api/v1/alcohols/${alcoholId}/cocktails`,{
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
              },
              method: 'POST',
              body: JSON.stringify(cocktail)
        })
        .then(response => response.json())
        .then(alcohol => {
            if (alcohol && alcohol.error)  {
              alert(alcohol.error)
            } else {
              dispatch({type: 'ADD_COCKTAIL', payload: alcohol})
            }
          }
        )
    }

}