import React, { Component } from 'react'
import { StyleSheet,
    View,
    Text,
    Platform,
    Image,
    ScrollView,
    TextInput,
    ImageBackground,
    TouchableOpacity,
    Dimensions } from 'react-native'
import { Card } from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome5';
import {loginUser} from '../../Action/Login'
import { connect } from 'react-redux';
import FCM, {FCMEvent} from 'react-native-fcm';

const { width, height } = Dimensions.get('window')

class Login extends Component{
    static navigationOptions = {
        header: null,
    }
    constructor(props){
        super(props);
        this.state ={
            secureTextkey: true,
            email: '',
            password: '',
            tokenId: ''
        }
        focusListener= null
    }

    emailTextChanged = (event) =>{
        this.setState({email: event.nativeEvent.text})
    }
    passwordTextChanged = (event) =>{
        this.setState({password: event.nativeEvent.text})
    }
    passwordRead = (status) =>{
        if(status == true){
            this.setState({secureTextkey: true})
        }else{
            this.setState({secureTextkey: false})
        }
    }

    loginSubmit = () =>{
        const { email, password, tokenId} =this.state;
        console.log(this.state);
         this.props.navigation.navigate('List')
        // if(email && password){
        //     this.props.loginUser(email, password, tokenId);
        // }
    }


    componentDidMount() {
        this.focusListener = this.props.navigation.addListener(
            'willFocus', () => {
                console.log('Loginnnnnnn========>', this.props)
            }
        );
      
    }
        
    

    render(){
        console.log('Login=======>',this.props);
        return(
            <View style={styles.Login_contener}>
                <ImageBackground source={require('../../Assats/Images/back.png')} style={styles.login_back_img}>
                    <View style={styles.login_image_view}>
                        <Image source={require('../../Assats/Images/spoon.png')} style={styles.login_spoon_img}/>
                    </View>
                    <View style={{zIndex: 1}}>
                        <Card style={styles.login_card}>
                            <View style={styles.login_input_uprview}>
                                <View style={styles.login_input_innerview}>
                                    <Icon name='user-alt' size={18} color='#ccc' style={{paddingTop: 12}}/>
                                    <TextInput style={styles.login_input_username} 
                                        underlineColorAndroid="transparent"
                                        onChange={this.emailTextChanged}
                                        placeholder='Email *'
                                    />
                                </View>
                                <View style={styles.login_input_innerview}>
                                    <Icon name='lock' size={18} color='#ccc' style={{paddingTop: 12}}/>
                                    <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-between'}}>
                                        <TextInput style={styles.login_input_password} 
                                            underlineColorAndroid="transparent"
                                            secureTextEntry={this.state.secureTextkey}
                                            onChange={this.passwordTextChanged}
                                            placeholder='Password *'
                                        />
                                        {
                                            (this.state.secureTextkey == true)?
                                            <TouchableOpacity style={{paddingRight: 15}} onPress={() => this.passwordRead(false)}>
                                                <Icon name='eye-slash' size={18} color='#ccc' style={{paddingTop: 15}}/>
                                            </TouchableOpacity>
                                            :
                                            <TouchableOpacity style={{paddingRight: 15}} onPress={() => this.passwordRead(true)}>
                                                <Icon name='eye' size={18} color='#ccc' style={{paddingTop: 15}}/>
                                            </TouchableOpacity>
                                        }
                                    </View>
                                </View>
                                <TouchableOpacity style={styles.login_btn} onPress={() => this.loginSubmit()}>
                                    <Text style={styles.login_btn_text}>Login</Text>
                                </TouchableOpacity>
                                <View style={styles.login_new_account}>
                                    <Text >New user?</Text>
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Signup')}>
                                        <Text style={styles.login_signuptxt}> Signup</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.login_social_view}>
                                    <TouchableOpacity>
                                        <Image source={require('../../Assats/Images/social-google.png')} style={styles.login_social_img}/>
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Image source={require('../../Assats/Images/social-facebook.png')} style={styles.login_social_img}/>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </Card>
                    </View>
                </ImageBackground> 
            </View>
        )
    }
}

// get data from reducer
// you can get data in any screens using reducer
const mapStateToProps = (state) =>({
    logged_in:state.LoginReducer.logged_in,
    data: state.LoginReducer.required_data,
    list_data: state.ListReducer.required_data,
})

const mapDispatchToProps = (dispatch) =>({
    loginUser: (email, password, tokenId) => dispatch(loginUser(email, password, tokenId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);

const styles = StyleSheet.create({
    Login_contener:{
        flex: 1,
        width,
        height,
        justifyContent: 'center',
        alignItems: 'center'
    },
    login_back_img:{
        width, 
        height, 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    login_spoon_img:{
        width: width*0.35,
        height: width*0.35,
        alignSelf: 'center',
        zIndex: 2,
    },
    login_input_password:{
        width: '80%',
        alignSelf: 'center',
        paddingLeft: 10
    },
    login_input_username:{
        paddingRight: 30,
        width: '100%',
        alignSelf: 'center',
        paddingLeft: 10
    },
    login_card:{
        width: width*0.80,
        borderRadius: 5,
        marginTop: -50,
        zIndex: 0,
    },
    login_input_uprview:{
        marginTop: 50,
        marginBottom: 20
    },
    login_input_innerview:{
        flexDirection: 'row', 
        borderBottomWidth: 1, 
        width: '80%',
        alignSelf: 'center'
    },
    login_social_view:{
        flexDirection: 'row', 
        alignSelf: 'center', 
        marginTop: 5
    },
    login_social_img:{
        width: 40, height: 40, margin: 15
    },
    login_btn:{
        width: '80%', 
        backgroundColor: '#63250B', 
        alignSelf: 'center', 
        marginTop: 30, borderRadius: 5
    },
    login_btn_text:{
        padding: 10, color: '#fff', alignSelf: 'center'
    },
    login_new_account:{
        alignSelf: 'center', 
        marginTop: 10, 
        flexDirection: 'row'
    },
    login_signuptxt:{
        borderBottomWidth: 1, fontSize: 16
    },
    login_image_view:{
        elevation: 20,
        width: width*0.35,
        height: width*0.35,
        borderRadius: 60,
        backgroundColor: 'transparent',
        shadowOpacity: 0.8,
        shadowColor: '#000',
        alignSelf: 'center'
    }

})