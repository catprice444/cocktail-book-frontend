export function fetchAlcohols(){
    return (dispatch) => {
        fetch("http://localhost:3000/api/v1/alcohols")
        .then(resp => resp.json())
        .then(alcohols => dispatch({
            type: 'FETCH_ALCOHOLS', 
            payload: alcohols
        })) 
    }
}