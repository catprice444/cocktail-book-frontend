export default function alcoholReducer(state = {alcohols: []}, action){
    // debugger;
    switch (action.type) {
        case 'FETCH_ALCOHOLS':
            return {alcohols: action.payload}

        case 'ADD_ALCOHOL':
            return {...state, alcohols: [...state.alcohols, action.payload]}

        case 'ADD_COCKTAIL':
            return{...state, alcohols: state.alcohols.map(alcohol => {
                if (alcohol.id === action.payload.id){
                    return action.payload
                } else {
                    return alcohol
                }
            })}

        default: 
            return state
    }
    
}