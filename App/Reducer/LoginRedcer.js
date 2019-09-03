import {LOGIN_SUCCESS, LOGIN_FAILURE} from '../Action/Login'

const initialState = {
    isLoading: false,
    logged_in: true,
    user: {},
    username: {},
    password: {},
    required_data:{},
    isempty_field: false,
}

const User = (state = initialState, action) =>{
    if(state === null || state === undefined || action === null){
        return { ...state }
    }

    switch(action.type){
        case LOGIN_SUCCESS : 
            const {data} = action.data;
            return {
                ...state,
                logged_in: true,
                request_data: data,

            };
        case LOGIN_FAILURE : 
            return {
                ...state,
                logged_in: false,
                request_data: null
            } 
        default:
            return state;
    }

}

export default User;