import React, { Component } from 'react';
import { Animated, Image, View, PanResponder, Text, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { COLORS, FONTS, IMAGES, SIZES } from '../../constants/theme';
import EmptyCard from './EmptyCard';


const Foods = [
    { id: "1", uri: IMAGES.datingPic1, name : "Harleen", age : "24" ,about : "Product Designer" },
    { id: "2", uri: IMAGES.datingPic2, name : "Richard", age : "22" ,about : "Job Holder" },
    { id: "3", uri: IMAGES.datingPic3, name : "Harleen", age : "25" ,about : "Product Designer" },
    { id: "4", uri: IMAGES.datingPic4, name : "Harleen", age : "22" ,about : "Product Designer" },
    { id: "5", uri: IMAGES.datingPic5, name : "Harleen", age : "21" ,about : "Product Designer" },
]

class MainSlider extends Component {

    constructor() {
        super()
        this.position = new Animated.ValueXY()
        this.state = {
           currentIndex: 0,
           isEmpty : false
        }
        this.rotate = this.position.x.interpolate({
          inputRange: [-SIZES.width / 2, 0, SIZES.width / 2],
          outputRange: ['-10deg', '0deg', '10deg'],
          extrapolate: 'clamp'
        })
        this.rotateAndTranslate = {
          transform: [{
            rotate: this.rotate
          },
          ...this.position.getTranslateTransform()
          ]
        }
        this.likeOpacity = this.position.x.interpolate({
          inputRange: [-SIZES.width / 2, 0, SIZES.width / 2],
          outputRange: [0, 0, 1],
          extrapolate: 'clamp'
        })
        this.nopeOpacity = this.position.x.interpolate({
          inputRange: [-SIZES.width / 2, 0, SIZES.width / 2],
          outputRange: [1, 0, 0],
          extrapolate: 'clamp'
        })
        this.nextCardOpacity = this.position.x.interpolate({
          inputRange: [-SIZES.width / 2, 0, SIZES.width / 2],
          outputRange: [1, 0, 1],
          extrapolate: 'clamp'
        })
        this.nextCardScale = this.position.x.interpolate({
          inputRange: [-SIZES.width / 2, 0, SIZES.width / 2],
          outputRange: [1, 0.8, 1],
          extrapolate: 'clamp'
        })
    }

   
    
    PanResponder = PanResponder.create({
        onStartShouldSetPanResponder: (evt, gestureState) => true,
        onPanResponderMove: (evt, gestureState) => {
            this.position.setValue({ x: gestureState.dx, y: 0 });
        },
        onPanResponderRelease: (evt, gestureState) => {
          if (gestureState.dx > 120) {
            Animated.spring(this.position, {
              toValue: { x: SIZES.width + 100, y: gestureState.dy },
              useNativeDriver: false,
            }).start(() => {
              this.setState({ currentIndex: this.state.currentIndex + 1 }, () => {
                this.position.setValue({ x: 0, y: 0 })
              })
            })
            if(Foods.length == this.state.currentIndex + 1){
              this.setState({ isEmpty : true })
            }
          } else if (gestureState.dx < -120) {
            Animated.spring(this.position, {
              toValue: { x: -SIZES.width - 100, y: gestureState.dy },
              useNativeDriver: false,
            }).start(() => {
              this.setState({ currentIndex: this.state.currentIndex + 1 }, () => {
                this.position.setValue({ x: 0, y: 0 })
              })
            })
            if(Foods.length == this.state.currentIndex + 1){
              this.setState({ isEmpty : true })
            }
          }else{  
              Animated.spring(this.position, {
                toValue: { x: 0, y: 0 },
                friction: 4,
                useNativeDriver: false,
              }).start()
          }
        }
    })
    

    renderFoods = () => {
        return Foods.map((item, i) => {
            if (i < this.state.currentIndex) {
                return null;
              } else if (i == this.state.currentIndex) {
                return (
                  <Animated.View
                    {...this.PanResponder.panHandlers}
                    key={i}
                    style={[
                      this.rotateAndTranslate,
                    // { transform: this.position.getTranslateTransform() },
                    {
                        height: '100%',
                        width: SIZES.width,
                        padding: 10,
                        position: "absolute"
                    }
                  ]}
                  >

                  <Animated.View
                        style={{
                          opacity: this.likeOpacity,
                          alignItems:'center',
                          justifyContent:'center',
                          position: "absolute",
                          top: 50,
                          left: 40,
                          height:50,
                          width:50,
                          borderRadius:50,
                          backgroundColor:COLORS.success,
                          zIndex: 1000
                        }}
                      >
                       <FontAwesome5 size={24} color={COLORS.white} name='check' />
                      </Animated.View>
                      <Animated.View
                        style={{
                          opacity: this.nopeOpacity,
                          alignItems:'center',
                          justifyContent:'center',
                          position: "absolute",
                          top: 50,
                          right: 40,
                          height:50,
                          width:50,
                          borderRadius:50,
                          backgroundColor:COLORS.danger,
                          zIndex: 1000
                        }}
                      >
                        <FontAwesome5 size={24} color={COLORS.white} name='times' />
                      </Animated.View>
                    <View
                      style={{flex:1}}
                    >
                      <Image
                        style={{
                          flex: 1,
                          height: null,
                          width: null,
                          resizeMode: "cover",
                          borderRadius: 20
                        }}
                        source={item.uri}
                      />
                      <LinearGradient
                        colors={["rgba(0,0,0,0)", "rgba(0,0,0,.8)"]}
                        style={{
                          position : "absolute",
                          height : 200,
                          width:"100%",
                          bottom : 0,
                          borderRadius:20,
                          justifyContent: "flex-end",
                          alignItems:"flex-start",
                        }}
                        >
                        <TouchableOpacity
                          style={{
                            paddingVertical : 25,
                            paddingHorizontal : 20,
                          }}
                        >
                          <Text style={{...FONTS.h4,color:COLORS.white}}>{item.name} , {item.age}</Text>
                          <Text style={{...FONTS.font,color:COLORS.white,opacity:.75}}>{item.about}</Text>
                        </TouchableOpacity>
                      </LinearGradient>
                      <TouchableOpacity
                        style={{
                          height:50,
                          width:50,
                          borderRadius:50,
                          alignItems:'center',
                          justifyContent:'center',
                          position:'absolute',
                          bottom:20,
                          right:20,
                          backgroundColor:COLORS.primary4,
                        }}
                      >
                        <Image style={{height:28,width:28,top:1,tintColor:COLORS.white}} source={IMAGES.star2}/>
                      </TouchableOpacity>
                    </View>
                  </Animated.View>
                );
              } else {
                return (
                  <Animated.View
                    key={i} 
                    style={[{
                      opacity: this.nextCardOpacity,
                      transform: [{ scale: this.nextCardScale }],
                      height: '100%',
                      width: SIZES.width, 
                      padding: 10, 
                      position: 'absolute'
                    }]}
                  >
                    <View
                      style={{flex:1}}
                    >
                      <Image
                        style={{
                          flex: 1,
                          height: null,
                          width: null,
                          resizeMode: "cover",
                          borderRadius: 20
                        }}
                        source={item.uri}
                      />
                      <LinearGradient
                        colors={["rgba(0,0,0,0)", "rgba(0,0,0,.8)"]}
                        style={{
                          position : "absolute",
                          height : 200,
                          width:"100%",
                          bottom : 0,
                          borderRadius:20,
                          justifyContent: "flex-end",
                          paddingHorizontal : 20,
                          paddingVertical : 25,
                        }}
                      >
                        <Text style={{...FONTS.h4,color:COLORS.white}}>{item.name} , {item.age}</Text>
                        <Text style={{...FONTS.font,color:COLORS.white,opacity:.75}}>{item.about}</Text>
                      </LinearGradient>
                      <TouchableOpacity
                        style={{
                          height:50,
                          width:50,
                          borderRadius:50,
                          alignItems:'center',
                          justifyContent:'center',
                          position:'absolute',
                          bottom:20,
                          right:20,
                          backgroundColor:COLORS.primary4,
                        }}
                      >
                        <Image style={{height:28,width:28,top:1,tintColor:COLORS.white}} source={IMAGES.star2}/>
                      </TouchableOpacity>
                    </View>
                  </Animated.View>
                );
            }
        }).reverse();
    };

    render(){
        //console.log(this.state.isEmpty);
        return (
            <>
                <View style={{ flex: 1 }}>
                    {/* <View style={{ height: 60 }} /> */}
                    <View style={{ flex: 1 ,paddingBottom: 60 }}>
                        {this.renderFoods()}
                        {this.state.isEmpty &&
                          <EmptyCard/>
                        }
                        {/* <Animated.View
                            style={[
                            {
                                height: SIZES.height - 230,
                                width: SIZES.width,
                                padding: 10
                            }
                            ]}
                        >
                            <Image
                                style={{
                                    flex: 1,
                                    height: null,
                                    width: null,
                                    resizeMode: "cover",
                                    borderRadius: 20
                                }}
                                source={Foods[0].uri}
                            />
                        </Animated.View> */}
                    </View>
                    {/* <View style={{ height: 60 }} /> */}
                </View>
            </>
        );
    }
};

export default MainSlider;