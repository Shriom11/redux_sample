import {combineReducers} from 'redux'
import LoginReducer from './LoginRedcer'
import ListReducer from './ListReducer'

const AppReducer = combineReducers({
    LoginReducer,
    ListReducer
});

const rootReducer = (state, action) => {
    return AppReducer(state, action);
}

export default rootReducer;
