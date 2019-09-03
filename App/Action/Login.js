export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'
import {LOGIN_API} from '../Lib/Component'
import axios from 'axios'

export const Login = user =>({
    type: 'LOGIN_USER',
    payload: user
})

export const loginUser = (email, password, device_token) =>{
    var req_body = {
        email,
        password,
        device_token
    }
    console.log(req_body);
    return (dispatch, getState) =>{
        axios.post(LOGIN_API, {
            email,
            password,
            device_token
        })
        .then(function (response) {
            if(response.status == 200){
                console.log(response);
                dispatch({type:LOGIN_SUCCESS,data:response});
            }else{
                dispatch({type:LOGIN_FAILURE,islogged_in:false});
            }
        })
        .catch(function (error) {
            console.log(error);
            dispatch({type:LOGIN_FAILURE,islogged_in:false});
        });
    }
}