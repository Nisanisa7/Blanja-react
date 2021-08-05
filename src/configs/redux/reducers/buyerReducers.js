const initialState = {
    profile: {},
    // formSubmitted: false,
    error: null

}

const buyerReducer = (state = initialState, action)=>{
    switch(action.type){
        case 'LOGIN_BUYER':
            return {
                ...state,
                profile: action.payload
            }
        case 'REGISTER_BUYER':
            return {
                ...state,
                profile: action.payload,
                // formSubmitted: false
            }
        default:
            return state
    }
}
export default buyerReducer