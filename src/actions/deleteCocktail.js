export const deleteCocktail = (alcoholId, cocktailId) => {
    return(dispatch) =>{
        fetch(`http://localhost:3000/api/v1/alcohols/${alcoholId}/cocktail/${cocktailId}`, {
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(cocktail => dispatch({type: 'DELETE_COCKTAIL', payload: cocktail}))
    }
}