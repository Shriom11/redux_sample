import React, {Component} from 'react'
import { StyleSheet, View, Text, Dimensions, Animated, Easing, Image, ImageBackground } from 'react-native'
import { StackActions, NavigationActions} from 'react-navigation';

const { width, height } = Dimensions.get('window');
let login;
let Home;

export default class Landing extends Component {
    static navigationOptions = {
        header: null,
    }
    constructor(props){
        super(props);
        this.spinValue = new Animated.Value(0)
        this.state={

        }
    }

    spin () {
        this.spinValue.setValue(0)
        Animated.timing(
            this.spinValue,
            {
            toValue: 1,
            duration: 4000,
            easing: Easing.linear
            }
        ).start(() => this.spin())
    }

    componentWillMount(){
        this.spin()
        // LocalStorage.getUser((user) => {
            setTimeout(() => {
                login = StackActions.reset({
                    index: 0,
                    actions: [
                        NavigationActions.navigate({
                            routeName: "Login"
                        }),
                    ],
                });
                this.props.navigation.dispatch(login)
            }, 4000);
            // if(!user){
            //     this.setState({user_id:user})
                // login = StackActions.reset({
                //     index: 0,
                //     actions: [
                //         NavigationActions.navigate({
                //             routeName: "Login"
                //         }),
                //     ],
                // });
                // this.props.navigation.dispatch(login)
            // }else{
            //     LocalStorage.getUserData((user) => {
            //         Home = StackActions.reset({
            //             index: 0,
            //             actions: [
            //                 NavigationActions.navigate({
            //                     routeName: "Home"
            //                 }),
            //             ],
            //         });
            //         this.props.navigation.dispatch(Home)
            //     })
                
            // }
        // })
        
    }

    render(){
        const spin = this.spinValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg']
        })
        return(
            <View style={styles.landing_contener}>
                <ImageBackground source={require('../../Assats/Images/back.png')} style={styles.landing_background}>
                    <Animated.Image
                        style={{resizeMode: 'contain',
                        width: 227,
                        height: 200,
                        transform: [{rotate: spin}]}}
                        source={require('../../Assats/Images/spoon.png')}
                    />
                    <Text style={{fontSize: 20, fontWeight: 'bold', color: '#ccc'}}>McCafe</Text>
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    landing_contener:{
        flex:1, 
        width, 
        height, 
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: '#000'
    },
    landing_background:{
        width, 
        height, 
        justifyContent: 'center', 
        alignItems: 'center'
    },
})