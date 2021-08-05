const initialState = {
    profile: {},
    // formSubmitted: false,
    error: null

}

const sellerReducer = (state = initialState, action)=>{
    switch(action.type){
        case 'LOGIN_SELLER':
            return {
                ...state,
                profile: action.payload
            }
        case 'REGISTER_SELLER':
            return {
                ...state,
                profile: action.payload,
                // formSubmitted: false
            }
        default:
            return state
    }
}
export default sellerReducer