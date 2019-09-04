import React, {Component} from 'react';
import {View,Image,Text,FlatList,Dimensions,StyleSheet,TextInput,Platform} from "react-native"
const { width, height } = Dimensions.get('window');

  export default class DoubleButton extends Component {
      constructor(props) {
        super(props);
        this.state={
            tenant:[{name:"sadadd",image:"https://wowsciencecamp.org/wp-content/uploads/2018/07/dummy-user-img-1.png"},{name:"errwrw",image:"https://www.plaxis.com/content/uploads/2016/08/dummy-user-300x300.png"},{name:"tyryryt",image:"https://wowsciencecamp.org/wp-content/uploads/2018/07/dummy-user-img-1.png"},{name:"iuuouio",image:"https://www.plaxis.com/content/uploads/2016/08/dummy-user-300x300.png"},{name:"xcxzvz",image:"https://wowsciencecamp.org/wp-content/uploads/2018/07/dummy-user-img-1.png"},{name:"nbvvm",image:"https://www.plaxis.com/content/uploads/2016/08/dummy-user-300x300.png"},{name:"nmbmf",image:"https://wowsciencecamp.org/wp-content/uploads/2018/07/dummy-user-img-1.png"}]
        }
        this.data = this.state.tenant
      }
    //   this.setState({ issLoading:false,isFetching: false,isLoadingmore:false,datalength:response.data.data.length},()=>{this.setState({property_list:this.state.page === 1 ? response.data.data : [...this.state.property_list, ...response.data.data]})})

    handleLoadMore = () => {
        this.setState({
            page: this.state.page + 1,
            isLoadingmore:true
        }, () => {
            if(this.state.filteractive == true){
                this.filterApply(false); 
            }else{
                this.propertyList(false);
            }
            
        });
    };

    renderFooter = () => {
        if (!this.state.isLoadingmore) return null;
        return (
          <View
            style={{
              paddingVertical: 20,
              borderTopWidth: 1,
              borderColor: "#CED0CE"
            }}
          >
            <ActivityIndicator animating size="large" color="black" />
          </View>
        );
      };
      searchTextChanged = (event) => {
      
        if (event.length > 0) {
            this.state.isSearching = true;
            var searchText = event;
            searchText = searchText.trim().toLowerCase();
            this.state.tenant = this.state.tenant.filter(l => {
                if (l.name.toLowerCase().match(searchText)) {
                    return l.name.toLowerCase().match(searchText);
                }
            });
        } else {
            this.state.isSearching = false;
            this.state.tenant = this.data;
        }
        this.setState({
            search_tenant: event
        })
    }
    
      render() {
        return (
            <View style={{flex:1,paddingVertical:15}}>
                <TextInput 
                        style={(Platform.OS == 'ios') ? styles.settingedit_inputtext_ios : styles.settingedit_inputtext}
                        underlineColorAndroid={'white'}
                        selectionColor={'#000'}
                        placeholder= "Search tenant"
                        placeholderTextColor={'rgba(0,0,0,0.5)'}                         
                        returnKeyType='done'
                        keyboardType="default"
                        value={this.state.search_tenant}
                        onChangeText={(evt) => this.searchTextChanged(evt) }
                    />
                <FlatList
                    data={this.state.tenant}
                    scrollEnabled
                    numColumns={2}
                    showsHorizontalScrollIndicator={false}
                    extraData={this.state}
                    style={{height:height - 110,}}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => {
                        return(   
                            <View style={{height:height*.40,width:width*0.43,borderColor:'grey',borderWidth:1,marginLeft:15,marginBottom:15}}>
                                <View style={{height:height*.32,borderBottomColor:'grey',borderBottomWidth:1}}>
                                    <Image source={{uri:item.image}} style={{height:height*0.31}}></Image>
                                </View>
                                <Text style={{textAlign:'center'}} >{item.name}</Text>   
                            </View>
                        )
                    }}
                    // ListFooterComponent={this.renderFooter}
                        // onEndReached={(distanceFromEnd) => {
                        //     if ((this.state.property_list != null &&  this.state.datalength < 5) || this.state.isLoadingmore ) {
                        //         return this.state.property_list
                        //     }
                        //     else {
                        //         // Concatenate the new feed results after the old ones
                        //         this.handleLoadMore();
                        //     }
                        // }}                
                        // onEndReachedThreshold={0.1}
                />
            </View>
            
          )
      }
  }

  const styles =  StyleSheet.create({  
    settingedit_inputtext_ios:{
        padding: 10,     
        color: '#000',  
        borderColor:'grey',
        borderWidth:1,
        marginLeft:-5,
        fontSize: 16,
        width:width - 60,        
    },
    settingedit_inputtext:{
        marginTop: -3,
        marginLeft:-5,
        borderColor:'grey',
        borderWidth:1,
        marginBottom: -3,
        color: '#000',
        fontSize: 16,
        width:width - 60,
    },
});