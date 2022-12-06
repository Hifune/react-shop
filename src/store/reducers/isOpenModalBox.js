const initialState = {
    isOpenModalBox: 'registration'
}

export default function getIsOpenModalBox(state = initialState, action){
    switch(action.type){
        
        case "SET_ISOPENMODALBOX":
            return {...state, isOpenModalBox: action.payload};
        
            default:
                return state;
    }
} 
