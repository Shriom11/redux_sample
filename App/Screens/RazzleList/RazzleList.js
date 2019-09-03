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
let products = [];
const { width, height } = Dimensions.get('window')

class RazzleList extends Component{
    static navigationOptions = {
        header: null,
    }
    constructor(props){
        super(props);
        this.state ={
            isIndex: 0,
            listData: [{'id': 1}, {'id': 2}, {'id': 3}, {'id': 4}, {'id': 5}, {'id': 6}, {'id': 7}, {'id': 8}, {'id': 9}, {'id': 10}, {'id': 11}, {'id': 12}, {'id': 13}, {'id': 14}, {'id': 15}, {'id': 16}, {'id': 17}, {'id': 18}, {'id': 19}, {'id': 20}, {'id': 21}, {'id': 22}, {'id': 23}, {'id': 24}],
            listDatas: [{'id': 1}, {'id': 2}, {'id': 3}, {'id': 4}]
        }
    }

    componentDidMount(){
        
    }

    _renderItem ({item, index}) {
        return (
            <View style={[styles.child, { backgroundColor: 'teal',  }]}>
                <Text style={styles.text}>{item.id}</Text>
            </View>
        );
    }


    render(){
        const { data } = this.props.data;
        var i, j, chunk = 6;
        for (i = 0, j = this.state.listData.length; i < j; i += chunk) {
            products.push(this.state.listData.slice(i, i + chunk));
        }
        const swiperItems = this.state.listDatas.map(item => {
            return(
                <View style={[styles.child, { backgroundColor: 'teal',  }]}>
                    <Text style={styles.text}>{item.id}</Text>
                </View>
            )
        })
        return(
            <View style={styles.list_contener}>
                {/* <ImageBackground source={require('../../Assats/Images/back.png')} style={styles.list_back_img}> */}
                <LinearGradient colors={['#e86171', '#4b2f4f', '#112443']} style={styles.linearGradient}>
                <ScrollView>

                <TouchableOpacity onPress={() => this.props.navigation.navigate('Video')}>
                    <Text style={{padding: 20, alignSelf: 'center', color: '#fff', borderWidth: 1, borderColor: '#fff'}}>Next</Text>
                </TouchableOpacity>

                    <Swiper
                        loop={false} activeDotColor='red'
                        key={this.state.listData.length}
                        style={{width: width, height: 250, alignSelf: 'center',  borderRadius: 5, margin: 20}}
                        >
                            {swiperItems}
                        </Swiper>

                    {
                        <FlatList
                            data={products}
                            scrollEnabled
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item, index }) => {
                                return(
                                    <View style={{marginTop: 20}}>
                                        <View style={{flexDirection: 'row', alignSelf: 'center', marginLeft: 20, marginRight: 20, width: width-40}}>
                                            <View style={{width: width*0.50-30, height: 200, backgroundColor: '#fff', borderRadius: 5}}>
                                                <Image source={require('../../Assats/Images/img3.jpg')} style={{width: '100%', height: 100, borderRadius: 5}}/>
                                                <View style={{padding: 10}}>
                                                    <Text style={{color: 'blue', fontWeight: 'bold',fontSize: 12}}>Spoon set</Text>
                                                    <View style={{flexDirection: 'row'}}>
                                                        <Text style={{fontSize: 10}}>Ticket Cost</Text>
                                                        <Text style={{color: 'red', fontSize: 12}}> $2.99</Text>
                                                    </View>
                                                    <Text style={{fontSize: 10, marginTop: 5}}>Ends In</Text>
                                                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                                        <View>
                                                            <Text style={{fontSize: 14, alignSelf: 'center', color: '#000'}}>07</Text>
                                                            <Text style={{fontSize: 8, alignSelf: 'center',fontFamily: 'BebasNeue', fontStyle: 'italic'}}>DAYS</Text>
                                                        </View>
                                                        <View>
                                                            <Text style={{fontSize: 14, alignSelf: 'center', color: '#000'}}>08</Text>
                                                            <Text style={{fontSize: 8, alignSelf: 'center'}}>Hours</Text>
                                                        </View>
                                                        <View>
                                                            <Text style={{fontSize: 14, alignSelf: 'center', color: '#000'}}>11</Text>
                                                            <Text style={{fontSize: 8, alignSelf: 'center'}}>Min</Text>
                                                        </View>
                                                        <View>
                                                            <Text style={{fontSize: 14, alignSelf: 'center', color: '#000'}}>01</Text>
                                                            <Text style={{fontSize: 8, alignSelf: 'center'}}>Sec</Text>
                                                        </View>
                                                        <View style={{marginTop: -3}}>
                                                            <Text style={{fontSize: 16, alignSelf: 'center', color: 'pink', fontWeight: 'bold'}}>05</Text>
                                                            <Text style={{fontSize: 8, alignSelf: 'center'}}>Tickets Left</Text>
                                                        </View>
                                                    </View>
                                                </View>
                                            </View>
                                            <View style={{width:  width*0.50-30, height: 200, marginLeft: 20}}>
                                                <View style={{width: '100%', height: 90, backgroundColor: '#fff',borderRadius: 5}}>
                                                    <View style={{flexDirection: 'row', paddingLeft: 5, paddingRight: 5, paddingTop: 5,}}>
                                                        <Image source={require('../../Assats/Images/img1.jpg')} style={{width: 30, height: 30, borderRadius: 5, marginRight: 5}}/>
                                                        <View>
                                                            <Text style={{color: 'blue', fontWeight: 'bold', fontSize: 12}}>Mens Fragrance</Text>
                                                            <View style={{flexDirection: 'row'}}>
                                                                <Text style={{fontSize: 10}}>Ticket Coast:</Text>
                                                                <Text style={{color: 'red',fontSize: 12}}> $2.00</Text>
                                                            </View>
                                                        </View>
                                                    </View>
                                                    <View style={{paddingLeft: 5, paddingRight: 5, paddingTop: 5 }}>
                                                        <Text style={{fontSize: 10}}>Ends In</Text>
                                                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                                            <View>
                                                                <Text style={{fontSize: 14, alignSelf: 'center', color: '#000'}}>05</Text>
                                                                <Text style={{fontSize: 8, alignSelf: 'center'}}>Days</Text>
                                                            </View>
                                                            <View>
                                                                <Text style={{fontSize: 14, alignSelf: 'center', color: '#000'}}>08</Text>
                                                                <Text style={{fontSize: 8, alignSelf: 'center'}}>Hours</Text>
                                                            </View>
                                                            <View>
                                                                <Text style={{fontSize: 14, alignSelf: 'center', color: '#000'}}>11</Text>
                                                                <Text style={{fontSize: 8, alignSelf: 'center'}}>Min</Text>
                                                            </View>
                                                            <View>
                                                                <Text style={{fontSize: 14, alignSelf: 'center', color: '#000'}}>01</Text>
                                                                <Text style={{fontSize: 8, alignSelf: 'center'}}>Sec</Text>
                                                            </View>
                                                            <View style={{marginTop: -3}}>
                                                                <Text style={{fontSize: 16, alignSelf: 'center', color: 'pink', fontWeight: 'bold'}}>05</Text>
                                                                <Text style={{fontSize: 8, alignSelf: 'center'}}>Tickets Left</Text>
                                                            </View>
                                                        </View>
                                                    </View>
                                                </View>
                                                <View style={{width: '100%', height: 90, backgroundColor: '#fff', marginTop: 20,borderRadius: 5}}>
                                                <View style={{flexDirection: 'row', paddingLeft: 5, paddingRight: 5, paddingTop: 5,}}>
                                                        <Image source={require('../../Assats/Images/img2.jpg')} style={{width: 30, height: 30, borderRadius: 5, marginRight: 5}}/>
                                                        <View>
                                                            <Text style={{color: 'blue', fontWeight: 'bold', fontSize: 12}}>Mens Fragrance</Text>
                                                            <View style={{flexDirection: 'row'}}>
                                                                <Text style={{fontSize: 10}}>Ticket Coast:</Text>
                                                                <Text style={{color: 'red',fontSize: 12}}> $2.00</Text>
                                                            </View>
                                                        </View>
                                                    </View>
                                                    <View style={{paddingLeft: 5, paddingRight: 5, paddingTop: 5 }}>
                                                        <Text style={{fontSize: 10}}>Ends In</Text>
                                                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                                            <View>
                                                                <Text style={{fontSize: 14, alignSelf: 'center', color: '#000'}}>05</Text>
                                                                <Text style={{fontSize: 8, alignSelf: 'center'}}>Days</Text>
                                                            </View>
                                                            <View>
                                                                <Text style={{fontSize: 14, alignSelf: 'center', color: '#000'}}>08</Text>
                                                                <Text style={{fontSize: 8, alignSelf: 'center'}}>Hours</Text>
                                                            </View>
                                                            <View>
                                                                <Text style={{fontSize: 14, alignSelf: 'center', color: '#000'}}>11</Text>
                                                                <Text style={{fontSize: 8, alignSelf: 'center'}}>Min</Text>
                                                            </View>
                                                            <View>
                                                                <Text style={{fontSize: 14, alignSelf: 'center', color: '#000'}}>01</Text>
                                                                <Text style={{fontSize: 8, alignSelf: 'center'}}>Sec</Text>
                                                            </View>
                                                            <View style={{marginTop: -3}}>
                                                                <Text style={{fontSize: 16, alignSelf: 'center', color: 'pink', fontWeight: 'bold'}}>05</Text>
                                                                <Text style={{fontSize: 8, alignSelf: 'center'}}>Tickets Left</Text>
                                                            </View>
                                                        </View>
                                                    </View>
                                                </View>
                                            </View>
                                        </View>  
                                        <View style={{flexDirection: 'row', alignSelf: 'center', marginLeft: 20, marginRight: 20, marginTop: 20, width: width-40}}>
                                            <View style={{width:  width*0.50-30, height: 200}}>
                                                <View style={{width: '100%', height: 90, backgroundColor: '#fff', borderRadius: 5}}>
                                                    <View style={{flexDirection: 'row', paddingLeft: 5, paddingRight: 5, paddingTop: 5,}}>
                                                        <Image source={require('../../Assats/Images/img3.jpg')} style={{width: 30, height: 30, borderRadius: 5, marginRight: 5}}/>
                                                        <View>
                                                            <Text style={{color: 'blue', fontWeight: 'bold', fontSize: 12}}>Mens Fragrance</Text>
                                                            <View style={{flexDirection: 'row'}}>
                                                                <Text style={{fontSize: 10}}>Ticket Coast:</Text>
                                                                <Text style={{color: 'red',fontSize: 12}}> $2.00</Text>
                                                            </View>
                                                        </View>
                                                    </View>
                                                    <View style={{paddingLeft: 5, paddingRight: 5, paddingTop: 5 }}>
                                                        <Text style={{fontSize: 10}}>Ends In</Text>
                                                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                                            <View>
                                                                <Text style={{fontSize: 14, alignSelf: 'center', color: '#000'}}>05</Text>
                                                                <Text style={{fontSize: 8, alignSelf: 'center'}}>Days</Text>
                                                            </View>
                                                            <View>
                                                                <Text style={{fontSize: 14, alignSelf: 'center', color: '#000'}}>08</Text>
                                                                <Text style={{fontSize: 8, alignSelf: 'center'}}>Hours</Text>
                                                            </View>
                                                            <View>
                                                                <Text style={{fontSize: 14, alignSelf: 'center', color: '#000'}}>11</Text>
                                                                <Text style={{fontSize: 8, alignSelf: 'center'}}>Min</Text>
                                                            </View>
                                                            <View>
                                                                <Text style={{fontSize: 14, alignSelf: 'center', color: '#000'}}>01</Text>
                                                                <Text style={{fontSize: 8, alignSelf: 'center'}}>Sec</Text>
                                                            </View>
                                                            <View style={{marginTop: -3}}>
                                                                <Text style={{fontSize: 16, alignSelf: 'center', color: 'pink', fontWeight: 'bold'}}>05</Text>
                                                                <Text style={{fontSize: 8, alignSelf: 'center'}}>Tickets Left</Text>
                                                            </View>
                                                        </View>
                                                    </View>
                                                </View>
                                                <View style={{width: '100%', height: 90, backgroundColor: '#fff', marginTop: 20, borderRadius: 5}}>
                                                    <View style={{flexDirection: 'row', paddingLeft: 5, paddingRight: 5, paddingTop: 5,}}>
                                                        <Image source={require('../../Assats/Images/img1.jpg')} style={{width: 30, height: 30, borderRadius: 5, marginRight: 5}}/>
                                                        <View>
                                                            <Text style={{color: 'blue', fontWeight: 'bold', fontSize: 12}}>Mens Fragrance</Text>
                                                            <View style={{flexDirection: 'row'}}>
                                                                <Text style={{fontSize: 10}}>Ticket Coast:</Text>
                                                                <Text style={{color: 'red',fontSize: 12}}> $2.00</Text>
                                                            </View>
                                                        </View>
                                                    </View>
                                                    <View style={{paddingLeft: 5, paddingRight: 5, paddingTop: 5 }}>
                                                        <Text style={{fontSize: 10}}>Ends In</Text>
                                                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                                            <View>
                                                                <Text style={{fontSize: 14, alignSelf: 'center', color: '#000'}}>05</Text>
                                                                <Text style={{fontSize: 8, alignSelf: 'center'}}>Days</Text>
                                                            </View>
                                                            <View>
                                                                <Text style={{fontSize: 14, alignSelf: 'center', color: '#000'}}>08</Text>
                                                                <Text style={{fontSize: 8, alignSelf: 'center'}}>Hours</Text>
                                                            </View>
                                                            <View>
                                                                <Text style={{fontSize: 14, alignSelf: 'center', color: '#000'}}>11</Text>
                                                                <Text style={{fontSize: 8, alignSelf: 'center'}}>Min</Text>
                                                            </View>
                                                            <View>
                                                                <Text style={{fontSize: 14, alignSelf: 'center', color: '#000'}}>01</Text>
                                                                <Text style={{fontSize: 8, alignSelf: 'center'}}>Sec</Text>
                                                            </View>
                                                            <View style={{marginTop: -3}}>
                                                                <Text style={{fontSize: 16, alignSelf: 'center', color: 'pink', fontWeight: 'bold'}}>05</Text>
                                                                <Text style={{fontSize: 8, alignSelf: 'center'}}>Tickets Left</Text>
                                                            </View>
                                                        </View>
                                                    </View>
                                                </View>
                                            </View>
                                            <View style={{width: width*0.50-30, height: 200, backgroundColor: '#fff', marginLeft: 20, borderRadius: 5}}>
                                            <Image source={require('../../Assats/Images/img4.jpg')} style={{width: '100%', height: 100, borderRadius: 5}}/>
                                                <View style={{padding: 10}}>
                                                    <Text style={{color: 'blue', fontWeight: 'bold'}}>Spoon set</Text>
                                                    <View style={{flexDirection: 'row'}}>
                                                        <Text style={{fontSize: 10}}>Ticket Cost</Text>
                                                        <Text style={{color: 'red', fontSize: 12}}> $2.99</Text>
                                                    </View>
                                                    <Text style={{fontSize: 10, marginTop: 5}}>Ends In</Text>
                                                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                                        <View>
                                                            <Text style={{fontSize: 14, alignSelf: 'center', color: '#000'}}>05</Text>
                                                            <Text style={{fontSize: 8, alignSelf: 'center'}}>Days</Text>
                                                        </View>
                                                        <View>
                                                            <Text style={{fontSize: 14, alignSelf: 'center', color: '#000'}}>08</Text>
                                                            <Text style={{fontSize: 8, alignSelf: 'center'}}>Hours</Text>
                                                        </View>
                                                        <View>
                                                            <Text style={{fontSize: 14, alignSelf: 'center', color: '#000'}}>11</Text>
                                                            <Text style={{fontSize: 8, alignSelf: 'center'}}>Min</Text>
                                                        </View>
                                                        <View>
                                                            <Text style={{fontSize: 14, alignSelf: 'center', color: '#000'}}>01</Text>
                                                            <Text style={{fontSize: 8, alignSelf: 'center'}}>Sec</Text>
                                                        </View>
                                                        <View style={{marginTop: -3}}>
                                                            <Text style={{fontSize: 16, alignSelf: 'center', color: 'pink', fontWeight: 'bold'}}>05</Text>
                                                            <Text style={{fontSize: 8, alignSelf: 'center'}}>Tickets Left</Text>
                                                        </View>
                                                    </View>
                                                </View>
                                            </View>
                                        </View>  
                                        
                                    </View>
                                    )
                                }
                            }
                        />
                    }
                    {/* </ImageBackground>  */}
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
        width: '100%',
        height: 100,
        borderRadius: 5,
    },

    child: {
        height: 200,
        width: width-40,
        margin: 20,
        justifyContent: 'center',
        borderRadius: 5
      },
      text: {
        fontSize: width * 0.5,
        textAlign: 'center',
      },


})