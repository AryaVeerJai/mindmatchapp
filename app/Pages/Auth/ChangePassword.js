import React, { useState } from 'react';
import { 
    Image,
    KeyboardAvoidingView,
    Platform,
    SafeAreaView, 
    ScrollView, 
    StyleSheet, 
    Text, 
    TextInput, 
    TouchableOpacity, 
    View, 
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { SvgXml } from 'react-native-svg';
import CustomButton from '../../components/CustomButton';
import { GlobalStyleSheet } from '../../constants/StyleSheet';
import { COLORS, FONTS, SIZES, ICONS, IMAGES } from '../../constants/theme';


const ChangePassword = (props) => {  
    const [passwordShow , setPasswordShow ] = useState(true);
    const [passwordShow2 , setPasswordShow2 ] = useState(true);
    
    const handndleShowPassword = () => {
        setPasswordShow(!passwordShow);
    }
    const handndleShowPassword2 = () => {
        setPasswordShow2(!passwordShow2);
    }

    return (
    <>
      <SafeAreaView style={{flex:1,backgroundColor:'#fff'}}>
        <KeyboardAvoidingView
            style={{
                flex:1
            }}
            behavior={Platform.OS === "ios" ? "padding" : ""}
        >
        <ScrollView contentContainerStyle={{flexGrow:1}}>
                <View style={{
                    flex:1,
                    alignItems:'center',
                    justifyContent:'center',
                    minHeight:200,
                }}>
                    <LinearGradient
                        colors={['#F7F5FF','rgba(255,255,255,0)']}
                        style={{
                            height:135,
                            width:135,
                            borderRadius:135,
                            position:'absolute',
                            top:20,
                            right:-50,
                            transform:[{rotate:'-120deg'}]
                        }}
                    ></LinearGradient>
                    <LinearGradient
                        colors={['#F7F5FF','rgba(255,255,255,0)']}
                        style={{
                            height:135,
                            width:135,
                            borderRadius:135,
                            position:'absolute',
                            bottom:0,
                            left:-50,
                            transform:[{rotate:'120deg'}]
                        }}
                    ></LinearGradient>
                    <Image
                        style={{
                            width:100,
                            height:100,
                            marginBottom:40,
                            resizeMode:'contain',
                        }}
                        source={IMAGES.appLogo}
                    />
                    <Image 
                        style={{
                            position:'absolute',
                            bottom:0,
                            width:'100%',
                            resizeMode:'stretch',
                            height:65,
                        }}
                        source={IMAGES.loginShape}
                    />
                </View>
                <View style={{backgroundColor:'#332A5E'}}>
                    <View style={[GlobalStyleSheet.container,{paddingTop:5}]}>
                        <View style={{marginBottom:30}}>
                            <Text style={[FONTS.h2,{textAlign:'center',color:COLORS.white}]}>Change Password</Text>
                            <Text style={[FONTS.font,{textAlign:'center',color:COLORS.white,opacity:.7}]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </Text>
                        </View>
                        <View style={{marginBottom:15}}>
                            <View style={styles.inputIcon}>
                                <SvgXml
                                    xml={ICONS.lock}
                                />
                            </View>
                            <TextInput
                                secureTextEntry={passwordShow}
                                style={[styles.inputStyle]}
                                placeholder='New Password'
                                placeholderTextColor={'rgba(255,255,255,.6)'}
                            />
                            <TouchableOpacity
                                onPress={() => handndleShowPassword()}
                                style={styles.eyeIcon}>
                                <SvgXml
                                    xml={passwordShow ? ICONS.eyeClose : ICONS.eyeOpen}
                                    />
                            </TouchableOpacity>
                        </View>
                        <View style={{marginBottom:15}}>
                            <View style={styles.inputIcon}>
                                <SvgXml
                                    xml={ICONS.lock}
                                />
                            </View>
                            <TextInput
                                secureTextEntry={passwordShow2}
                                style={[styles.inputStyle]}
                                placeholder='Confirm Password'
                                placeholderTextColor={'rgba(255,255,255,.6)'}
                            />
                            <TouchableOpacity
                                onPress={() => handndleShowPassword2()}
                                style={styles.eyeIcon}>
                                <SvgXml
                                    xml={passwordShow2 ? ICONS.eyeClose : ICONS.eyeOpen}
                                    />
                            </TouchableOpacity>
                        </View>
                        
                        <View style={{paddingBottom:10}}>
                            <CustomButton 
                                onPress={() => props.navigation.navigate('SignIn')}
                                title="SUBMIT"
                            />
                        </View>
                        
                        <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',marginBottom:15}}>
                            <Text style={[FONTS.font,{color:COLORS.white,opacity:.7}]}>Don’t have an account?</Text>
                            <TouchableOpacity 
                                style={{marginLeft:5}}
                                onPress={() => props.navigation.navigate('CreateAccount')}
                            >
                                <Text style={[FONTS.fontLg,{color:COLORS.primary,textDecorationLine:'underline'}]}>SignUp here</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
        </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </>
  );
};



const styles = StyleSheet.create({

    inputStyle:{
        ...FONTS.fontLg,
        height:50,
        paddingLeft:60,
        borderWidth : 1,
        borderRadius: SIZES.radius,
        backgroundColor:'rgba(255,255,255,.05)',
        borderColor:'rgba(255,255,255,.3)',
        color:COLORS.white,
    },
    inputIcon:{
        height:40,
        width:40,
        borderRadius:10,
        position : 'absolute',
        left:10,
        top : 5,
        alignItems:'center',
        justifyContent:'center',
    },
    eyeIcon:{
        position:'absolute',
        height:50,
        width:50,
        alignItems:'center',
        justifyContent:'center',
        right:0,
        zIndex:1,
        top:0,
    }
  
})


export default ChangePassword;
