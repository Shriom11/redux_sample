import React, { Component } from 'react'
import { StyleSheet,
    View,
    Text,
    Platform,
    FlatList,
    Image,
    ScrollView,
    Animated,
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
import LinearGradient from 'react-native-linear-gradient';
import Swiper from 'react-native-swiper';
import SwiperFlatList from 'react-native-swiper-flatlist';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import Video from 'react-native-video';

const { width, height } = Dimensions.get('window')

class RazzleList extends Component{
    static navigationOptions = {
        header: null,
    }
    constructor(props){
        super(props);
        this.state ={

        }
    }


    render(){
        return(
            <View style={styles.list_contener}>
                
                <LinearGradient colors={['#e86171', '#4b2f4f', '#112443']} style={styles.linearGradient}>
                <ScrollView>

                <Video source={{uri: "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"}}   // Can be a URL or a local file.
                    ref={(ref) => {
                        this.player = ref
                    }}                                      // Store reference
                    onBuffer={this.onBuffer}                // Callback when remote video is buffering
                    onError={this.videoError}               // Callback when video cannot be loaded
                    style={styles.backgroundVideo} />

                    </ScrollView>
                </LinearGradient>
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

export default connect(mapStateToProps, mapDispatchToProps)(RazzleList);

const styles = StyleSheet.create({



})