const initialState = {
    isInfo: ''
}

export default function getIsInfo(state = initialState, action){
    switch(action.type){
        
        case "SET_ISINFO":
            return {...state, card: action.payload};
        
            default:
                return state;
    }
} 
