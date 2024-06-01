import React, { useRef } from 'react';
import { 
    SafeAreaView, 
    View,
    ScrollView,
    Text, 
    StyleSheet,
    Animated,
    Image,
} from 'react-native';
import { useTheme } from '@react-navigation/native';
import { COLORS, FONTS, IMAGES, SIZES } from '../constants/theme';
import GradientBtn from './components/GradientBtn';
import PulseAnimation from './components/PulseAnimation';


const DATA = [
    {
        title : 'Find Your Best \n Match With Us',
        desc : 'Join us and find you life \n partner with us.',
    },
    {
        title : 'Find Your Best \n Match With Us',
        desc : 'Join us and find you life \n partner with us.',
    },
    {
        title : 'Find Your Best \n Match With Us',
        desc : 'Join us and find you life \n partner with us.',
    },
]

const OnBoarding = ({navigation}) => {

    const theme = useTheme();
    const {colors} = theme;
    const scrollValue = useRef(new Animated.Value(0)).current;
    
    return (
        <SafeAreaView
            style={{
                flex:1,
                backgroundColor:colors.cardBg,
            }}
        >
            <ScrollView contentContainerStyle={{flexGrow:1}}>
                <View style={{
                    flex:1,
                    alignItems:'center',
                    justifyContent:'center',
                    paddingTop:50,
                    paddingBottom:30,
                }}>
                    <View
                        style={{
                            alignItems:'center',
                            justifyContent:'center',
                        }}
                    >
                        {/* <PulseAnimation/> */}
                        <Image
                            source={IMAGES.heartCircle}
                            style={[{
                                position:'absolute',
                                height:'100%',
                                width:'100%',
                                resizeMode:'contain',
                            }, theme.dark && {
                                tintColor : "rgba(255,255,255,.1)",
                            }]}
                        />
                        {/* <Image
                            source={IMAGES.heartCircle}
                            style={{
                                position:'absolute',
                                height:'70%',
                                width:'70%',
                                transform : [{rotate : "-100deg"}],
                                resizeMode:'contain',
                            }}
                        /> */}
                        <Image
                            source={IMAGES.user3}
                            style={{
                                height:48,
                                width:48,
                                borderRadius:48,
                                position:'absolute',
                                bottom:0,
                                right:18,
                            }}
                        />
                        <Image
                            source={IMAGES.user5}
                            style={{
                                height:45,
                                width:45,
                                borderRadius:45,
                                position:'absolute',
                                top:-20,
                                right:60,
                            }}
                        />
                        <Image
                            source={IMAGES.user1}
                            style={{
                                height:35,
                                width:35,
                                borderRadius:35,
                                position:'absolute',
                                bottom:50,
                                left:-5,
                            }}
                        />
                        
                        <View
                            style={{
                                padding:30,
                            }}
                        >
                            <View
                                style={{
                                    height:192,
                                    width:192,
                                    borderRadius:192,
                                    backgroundColor:"rgba(255,70,157,.07)",
                                    alignItems:'center',
                                    justifyContent:'center',
                                }}
                            >
                                <Image
                                    style={{
                                        height:112,
                                        width:112,
                                        resizeMode:'contain',
                                    }}
                                    source={IMAGES.heartLock}
                                />
                            </View>
                        </View>
                    </View>
                </View>
                <View>
                    <ScrollView
                        horizontal
                        pagingEnabled
                        scrollEventThrottle={16}
                        decelerationRate="fast"
                        showsHorizontalScrollIndicator={false}
                        onScroll={Animated.event(
                            [{ nativeEvent: { contentOffset: { x: scrollValue } } }],
                            { useNativeDriver: false },
                            )}>
                        {DATA.map((data,index) => (
                            
                            <View style={[styles.slideItem]} key={index}>
                                <Text style={[FONTS.h2,{textAlign:'center',color:colors.title,marginBottom:5}]}>{data.title}</Text>
                                <Text style={[FONTS.font,{fontSize:16,textAlign:'center',color:colors.title,opacity:.7}]}>{data.desc}</Text>
                            </View>
                        
                        ))}
                    </ScrollView>
                    <View style={styles.indicatorConatiner} pointerEvents="none">
                        {DATA.map((x, i) => (
                            <Indicator i={i} key={i} scrollValue={scrollValue} />
                            ))}
                    </View>

                </View>
                <View
                    style={{
                        paddingHorizontal:45,
                        paddingVertical:35,
                    }}
                >
                    <GradientBtn 
                        onPress={() => navigation.navigate('DrawerNavigation')}
                        title={'Find Someone'}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

function Indicator({ i, scrollValue }) {

    const theme = useTheme();

    const translateX = scrollValue.interpolate({
        inputRange: [-SIZES.width + i  * SIZES.width, i * SIZES.width, SIZES.width + i * SIZES.width],
        outputRange: [-20, 0, 20],
    });
    return (
        <View style={[styles.indicator, {backgroundColor:theme.dark ? "rgba(255,255,255,.15)" : "#E2E2E2"}]}>
            <Animated.View
                style={[styles.activeIndicator, { transform: [{ translateX }] }]}
            />
        </View>
    );
}


const styles = StyleSheet.create({

    slideItem: {
        width: SIZES.width,
        alignItems:'center',
        padding:25,
        paddingBottom:65,
        paddingTop:15,
    },
    indicatorConatiner: {
        alignSelf: 'center',
        position: 'absolute',
        bottom: 20,
        flexDirection: 'row',
    },
    indicator: {
        height: 10,
        width: 10,
        borderRadius: 5,
        marginHorizontal: 4,
        overflow: 'hidden',
    },
    activeIndicator: {
        height: '100%',
        width: '100%',
        backgroundColor: COLORS.primary4,
        borderRadius: 10,

    },
  
})

export default OnBoarding;