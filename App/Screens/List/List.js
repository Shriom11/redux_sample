import React, { Component } from 'react'
import { StyleSheet,
    View,
    Text,
    Platform,
    FlatList,
    Image,
    ScrollView,
    TextInput,
    ImageBackground,
    TouchableOpacity,
    Dimensions } from 'react-native'
import { Card } from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome5';
import {listData} from '../../Action/List'
import { connect } from 'react-redux';
import FCM, {FCMEvent} from 'react-native-fcm';
import ParallaxScrollView from 'react-native-parallax-scrollview';

const { width, height } = Dimensions.get('window')

class List extends Component{
    static navigationOptions = {
        header: null,
    }
    constructor(props){
        super(props);
        this.state ={
            
        }
    }

    componentDidMount(){
        this.props.listData();
    }

    render(){
        const { data } = this.props.data;
        console.log('List========>', this.props)
        return(
            <View style={styles.list_contener}>
                <ImageBackground source={require('../../Assats/Images/back.png')} style={styles.list_back_img}>
                <Image source={{uri: 'http://webresizer.com/images2/bird1_after.jpg'}} style={{width: width, height: 100, resizeMode: 'contain'}} />
                <TouchableOpacity onPress={() => this.props.navigation.navigate('RazzleList')}>
                    <Text style={{padding: 20, alignSelf: 'center', color: '#fff', borderWidth: 1, borderColor: '#fff'}}>Next</Text>
                </TouchableOpacity>
                {
                    <FlatList
                        data={data}
                        style={{marginBottom: this.state.mar}}
                        scrollEnabled
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item, index }) => {
                            return(
                                <View borderRadius={5} style={{
                                    width: width*0.95,
                                    margin: 10,
                                    alignSelf: 'center'}}>
                                    <View style={{flexDirection: 'row', padding: 10,}}>
                                        <Image source={require('../../Assats/Images/profile.jpg')} style={styles.list_imageview}/>
                                        <View>
                                            <Text style={{color: '#fff', fontWeight: 'bold', marginLeft: 10}}>{item.name}</Text>
                                            <Text style={{color: '#fff', marginLeft: 10}}>{item.email}</Text>
                                        </View>
                                    </View>
                                </View>
                            );
                        }}
                    />
                }
                </ImageBackground> 
            </View>
        )
    }
}

// get data from reducer
// you can get data in any screens using reducer
const mapStateToProps = (state) =>({
    is_response:state.ListReducer.is_response,
    data: state.ListReducer.required_data,
})

const mapDispatchToProps = (dispatch) =>({
    listData: () => dispatch(listData())
})

export default connect(mapStateToProps, mapDispatchToProps)(List);

const styles = StyleSheet.create({
    list_contener:{
        flex: 1,
        width,
        height,
    },
    list_back_img:{
        width, 
        height, 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    list_imageview:{
        width: 50,
        height: 50,
        borderRadius: 50/2,
    }


})