

import React, { useState } from 'react';
import { 
    Image,
    SafeAreaView, 
    ScrollView, 
    StyleSheet, 
    Text, 
    TouchableOpacity, 
    View, 
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useTheme } from '@react-navigation/native';
import { SvgXml } from 'react-native-svg';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import CustomButton from '../../../components/CustomButton';
import { GlobalStyleSheet } from '../../../constants/StyleSheet';
import { COLORS, FONTS, SIZES, IMAGES, ICONS } from '../../../constants/theme';
import Header from '../../../layout/Header';

const EnterCode = () =>{
    const {colors} = useTheme();
    const [otpValue , setOtpValue] = useState(true);
   
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
                    minHeight:200,
                }}>
                    <Image
                        style={{
                            width:100,
                            height:100,
                            marginBottom:40,
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
                <View style={{backgroundColor:colors.backgroundColor}}>
                    <View style={GlobalStyleSheet.container}>
                        <View>
                            <Text style={[FONTS.h2,{textAlign:'center',color:colors.title}]}>Enter Code</Text>
                            <Text style={[FONTS.font,{textAlign:'center',color:colors.text}]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </Text>
                        </View>
                        
                        <View style={{alignItems:'center'}}>
                            <OTPInputView
                            style={{width: 270, height: 50,marginVertical:20}}
                            pinCount={4}
                            autoFocusOnLoad
                            codeInputFieldStyle={{
                                color:colors.title,
                                fontSize:20,
                                fontWeight:'600',
                                height:50,
                                width:60,
                                borderRadius:SIZES.radius,
                                borderColor:colors.borderColor,
                                textAlign:'center',
                            }}
                            onCodeChanged = {(code => {
                                if(code.length == 4){
                                    setOtpValue(false);
                                }else{
                                    setOtpValue(true);
                                }
                            })}
                            codeInputHighlightStyle={{
                                borderColor:COLORS.primary,
                            }}
                            />
                        </View>


                        <View style={{paddingBottom:10,flexDirection:'row'}}>
                            <TouchableOpacity
                                style={{
                                    backgroundColor:'#505050',
                                    width:50,
                                    borderRadius:SIZES.radius,
                                    alignItems:'center',
                                    justifyContent:'center',
                                    marginRight:10,
                                }}
                            >
                                <SvgXml
                                    style={{marginLeft:6}}
                                    xml={ICONS.back}
                                />
                            </TouchableOpacity>
                            <View style={{flex:1}}>
                                <CustomButton
                                    disabled={otpValue}
                                    title="NEXT"
                                />
                            </View>
                        </View>
                        <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',marginBottom:15,marginTop:5}}>
                            <Text style={[FONTS.font,{color:colors.text}]}>Didn’t you received any code?</Text>
                            <TouchableOpacity 
                                style={{marginLeft:5}}>
                                <Text style={[FONTS.fontLg,{color:COLORS.primary,textDecorationLine:'underline'}]}>Resend</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </LinearGradient>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};



const styles = StyleSheet.create({

    inputStyle:{
        height:50,
        padding:5,
        paddingHorizontal:15,
        borderWidth : 1,
        borderColor : COLORS.borderColor,
        borderRadius: SIZES.radius,
        marginBottom:15,
        flexDirection:'row',
        alignItems:'center',
    },
    
})


export default EnterCode;
