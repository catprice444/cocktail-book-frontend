export const deleteCocktail = (cocktailId, alcoholId) => {
    return (dispatch) =>{
        fetch(`http://localhost:3000/api/v1/alcohols/${alcoholId}/cocktails/${cocktailId}`, {
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(cocktail => dispatch({type: 'DELETE_COCKTAIL', payload: cocktail}))
    }
}