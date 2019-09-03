import {createStore, applyMiddleware} from 'redux'
import ReduxThunk from 'redux-thunk'
import Reducer from '../Reducer/index'

export default createStore(Reducer, applyMiddleware(ReduxThunk))

