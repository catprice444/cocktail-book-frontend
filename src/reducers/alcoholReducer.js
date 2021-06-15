export default function alcoholReducer(state = {alcohols: []}, action){
    switch (action.type) {
        case 'FETCH_ALCOHOLS':
            return {alcohols: action.payload}

        default: 
            return state
    }
    
}