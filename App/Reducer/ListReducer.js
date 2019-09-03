import {LIST_SUCCESS, LIST_FAILURE} from '../Action/List'

const initialState = {
    isLoading: false,
    is_response: true,
    user: {},
    username: {},
    password: {},
    required_data:{},
    isempty_field: false,
}

const List = (state = initialState, action) =>{
    if(state === null || state === undefined || action === null){
        return { ...state }
    }
    switch(action.type){
        case LIST_SUCCESS : 
            const {data} = action.data;
            return {
                ...state,
                is_response: true,
                required_data: action,

            };
        case LIST_FAILURE : 
            return {
                ...state,
                is_response: false,
                required_data: null
            } 
        default:
            return state;
    }

}

export default List;