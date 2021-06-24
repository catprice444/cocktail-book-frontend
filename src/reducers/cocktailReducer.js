export default function cocktailReducer(state = {cocktails: []}, action){
  
    switch (action.type) {

        case 'FETCH_COCKTAILS':
            return {cocktails: action.payload}

        default: 
            return state
    }
    
}