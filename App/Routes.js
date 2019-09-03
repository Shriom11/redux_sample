import React, {Component} from 'react'
import {createStackNavigator, createAppContainer} from 'react-navigation'
import Login from './Screens/Login/Login'
import Landing from './Screens/Landing/Landing'
import List from './Screens/List/List'
import RazzleList from './Screens/RazzleList/RazzleList'
import Video from './Screens/Video/Video'

export default class Routes extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        const Roots = createStackNavigator({
            Landing: { screen: Landing },
            Login: { screen: Login },
            List: { screen: List },
            RazzleList: { screen: RazzleList },
            Video: { screen: Video }
        })
        const Root = createAppContainer(Roots);
        return(
            <Root/>
        )
    }
    
}