import * as string from '../string'

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
        case string.AVATAR_SELLER:
            return{
                ...state,
                profile: action.payload.profile
            }
        case string.UPDATE_BUYER:
            console.log('halo', state.profile.data);
            return{
                ...state,
                profile: action.payload
            }
        case string.UPDATE_ADDRESS:
            return{
                ...state,
                profile: action.payload
            }
        case 'CHANGE_VALUE':
            return{
                profile:{
                        ...state.profile,
                        ...action.payload
                },
            }
      
        default:
            return state
    }
}
export default buyerReducer