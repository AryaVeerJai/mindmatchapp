
import React, { useState } from 'react';
import { 
    Image,
    SafeAreaView, 
    ScrollView, 
    StyleSheet, 
    Text, 
    TextInput, 
    TouchableOpacity, 
    View, 
} from 'react-native';
import { useTheme } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import { SvgXml } from 'react-native-svg';
import CustomButton from '../../../components/CustomButton';
import { GlobalStyleSheet } from '../../../constants/StyleSheet';
import { COLORS, FONTS, SIZES, IMAGES, ICONS } from '../../../constants/theme';
import Header from '../../../layout/Header';

const SignIn = () => {

    const {colors} = useTheme();

    const [passwordShow , setPasswordShow ] = useState(true);
    const handndleShowPassword = () => {
        setPasswordShow(!passwordShow);
    }


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
                        <View style={{marginBottom:20}}>
                            <Text style={[FONTS.h2,{textAlign:'center',color:colors.title}]}>Sign in</Text>
                            <Text style={[FONTS.font,{textAlign:'center',color:colors.text}]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </Text>
                        </View>

                        <View style={{marginBottom:15}}>
                            <View style={styles.inputIcon}>
                                <SvgXml
                                    xml={ICONS.user}
                                />
                            </View>
                            <TextInput
                                style={[styles.inputStyle,{borderColor:colors.borderColor,color:colors.title}]}
                                defaultValue="jackmadani"
                                placeholder='Email'
                                placeholderTextColor={colors.text}
                            />
                        </View>
                        <View style={{marginBottom:15}}>
                            <View style={styles.inputIcon}>
                                <SvgXml
                                    xml={ICONS.lock}
                                />
                            </View>
                            <TextInput
                                secureTextEntry={passwordShow}
                                style={[styles.inputStyle,{borderColor:colors.borderColor,color:colors.title}]}
                                placeholder='Password'
                                placeholderTextColor={colors.text}
                            />
                            <TouchableOpacity
                                accessible={true}
                                accessibilityLabel="Password"
                                accessibilityHint="Password show and hidden"
                                onPress={() => handndleShowPassword()}
                                style={styles.eyeIcon}>
                                <SvgXml
                                    xml={passwordShow ? ICONS.eyeClose : ICONS.eyeOpen}
                                    />
                            </TouchableOpacity>
                        </View>
                        <View style={{alignItems:'flex-end',marginBottom:15}}>
                            <TouchableOpacity 
                                style={{marginLeft:5}}
                            >
                                <Text style={[FONTS.fontLg,{color:COLORS.primary,textDecorationLine:'underline'}]}>Forgot Password</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{paddingBottom:10}}>
                            <CustomButton 
                                title="SIGN IN"/>
                        </View>
                        <Text style={[FONTS.font,{textAlign:'center',color:colors.text}]}>Or sign in with</Text>
                        <View
                            style={{
                                flexDirection:'row',
                                justifyContent:'center',
                                alignItems:'center',
                                paddingVertical:15,
                            }}
                        >
                            <TouchableOpacity style={{marginHorizontal:10}}>
                                <Image style={{height:36,width:36,resizeMode:'contain'}} source={IMAGES.google}/>
                            </TouchableOpacity>
                            <TouchableOpacity style={{marginHorizontal:10}}>
                                <Image style={{height:36,width:36,resizeMode:'contain'}} source={IMAGES.facebook}/>
                            </TouchableOpacity>
                        </View>
                        <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',marginBottom:15}}>
                            <Text style={[FONTS.font,{color:colors.text}]}>Don’t have an account?</Text>
                            <TouchableOpacity 
                                style={{marginLeft:5}}
                            >
                                <Text style={[FONTS.fontLg,{color:COLORS.primary,textDecorationLine:'underline'}]}>Signup here</Text>
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
        ...FONTS.fontLg,
        height:50,
        paddingLeft:60,
        borderWidth : 1,
        borderRadius: SIZES.radius,
    },
    inputIcon:{
        backgroundColor:COLORS.yellow,
        height:40,
        width:40,
        borderRadius:10,
        position : 'absolute',
        left:5,
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


export default SignIn;
