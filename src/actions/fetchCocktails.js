export function fetchCocktails(){
    return (dispatch) => {
        fetch("http://localhost:3000/api/v1/cocktails", {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
            method: 'GET',
            body: JSON.stringify()
    })

        .then(resp => resp.json())
        .then(cocktails => dispatch({
            type: 'FETCH_COCKTAILS', 
            payload: cocktails
        })) 
        
    }
    
}