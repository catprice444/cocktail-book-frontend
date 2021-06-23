export const editCocktail = (alcoholId, cocktailId) => {
    return(dispatch)=>{
        fetch(`http://localhost:3000/api/v1/alcohols/${alcoholId}/cocktails/${cocktailId}/edit`, {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
            method: 'PATCH',
            body: JSON.stringify(cocktailId)
    })
        .then(response => response.json())
        .then(cocktail => dispatch({type: 'EDIT_COCKTAIL', payload: cocktail}))
  }
}