
import React, { useRef } from 'react';
import { 
    Animated,
    Image,
    SafeAreaView, 
    ScrollView, 
    StyleSheet, 
    Text, 
    View, 
} from 'react-native';
import { useTheme } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import CustomButton from '../../../components/CustomButton';
import { GlobalStyleSheet } from '../../../constants/StyleSheet';
import { COLORS, FONTS, SIZES, IMAGES } from '../../../constants/theme';
import Header from '../../../layout/Header';


const DATA = [
    {
        title : 'Let’s get started',
        desc : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ',
    },
    {
        title : 'Let’s get started',
        desc : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ',
    },
    {
        title : 'Let’s get started',
        desc : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ',
    },
]

const Onboarding = () =>{
    const {colors} = useTheme();
    

    const scrollValue = useRef(new Animated.Value(0)).current;

    return (
    <>
      <SafeAreaView style={{flex:1}}>
        <ScrollView contentContainerStyle={{flexGrow:1}}>
            <Header transparent leftIcon={'back'}/>
            <LinearGradient
                style={{flex:1}}
                colors={['#FFCD90', '#FE9063']}>
                <View style={{
                    flex:1,
                    alignItems:'center',
                    justifyContent:'center',
                    height:SIZES.height / 2.3,
                }}>
                    <Image
                        style={{
                            width:130,
                            height:130,
                            resizeMode:'contain',
                        }}
                        source={IMAGES.logo}
                    />
                    <Image 
                        style={{
                            position:'absolute',
                            bottom:0,
                            width:'100%',
                            resizeMode:'stretch',
                            height:80,
                            tintColor:colors.backgroundColor,
                        }}
                        source={IMAGES.bgShape}
                    />
                </View>
                <View style={{backgroundColor:colors.backgroundColor,flex:1}}>
                    <View style={{flex:1}}>
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
                                    <Text style={[FONTS.h2,{textAlign:'center',color:colors.title}]}>{data.title}</Text>
                                    <Text style={[FONTS.font,{textAlign:'center',color:colors.text}]}>{data.desc}</Text>
                                </View>
                            
                            ))}
                        </ScrollView>
                        <View style={styles.indicatorConatiner} pointerEvents="none">
                            {DATA.map((x, i) => (
                                <Indicator i={i} key={i} scrollValue={scrollValue} />
                                ))}
                        </View>

                    </View>
                    <View style={GlobalStyleSheet.container}>
                        <View style={{paddingBottom:15}}>
                            <CustomButton
                                title="CREATE ACCOUNT"
                            />
                        </View>
                        <View>
                            <CustomButton 
                                btnLight 
                                title="SIGN IN"
                            />
                        </View>
                        <View style={{alignItems:'center',padding:12}}>
                            <Text style={[FONTS.font,{color:colors.text}]}>Forgot your account?</Text>
                        </View>
                    </View>
                </View>
            </LinearGradient>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};


function Indicator({ i, scrollValue }) {
    const translateX = scrollValue.interpolate({
        inputRange: [-SIZES.width + i  * SIZES.width, i * SIZES.width, SIZES.width + i * SIZES.width],
        outputRange: [-20, 0, 20],
    });
    return (
        <View style={styles.indicator}>
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
        paddingBottom:50,
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
        borderWidth:1,
        borderColor:'transparent',
        borderRadius: 5,
        backgroundColor:'#C4C4C4',
        marginHorizontal: 4,
        overflow: 'hidden',
    },
    activeIndicator: {
        height: '100%',
        width: '100%',
        backgroundColor: COLORS.primary,
        borderRadius: 10,

    },
  
})


export default Onboarding;
