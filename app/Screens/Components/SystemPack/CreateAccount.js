
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
import LinearGradient from 'react-native-linear-gradient';
import { useTheme } from '@react-navigation/native';
import { SvgXml } from 'react-native-svg';
import { COLORS, FONTS, SIZES, IMAGES, ICONS } from '../../../constants/theme';
import CustomButton from '../../../components/CustomButton';
import { GlobalStyleSheet } from '../../../constants/StyleSheet';
import Header from '../../../layout/Header';

const CreateAccount = () =>{
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
                            <Text style={[FONTS.h2,{textAlign:'center',color:colors.title}]}>Create an Account</Text>
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
                                placeholder='Username'
                                placeholderTextColor={colors.text}
                            />
                        </View>
                        <View style={{marginBottom:15}}>
                            <View style={styles.inputIcon}>
                                <SvgXml
                                    xml={ICONS.email}
                                />
                            </View>
                            <TextInput
                                style={[styles.inputStyle,{borderColor:colors.borderColor,color:colors.title}]}
                                defaultValue="example@gmail.com"
                                placeholder='Enter email'
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

                        <View style={{paddingBottom:10}}>
                            <CustomButton 
                                title="REGISTER"
                            />
                        </View>
                        <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',marginBottom:15,marginTop:5}}>
                            <Text style={[FONTS.font,{color:colors.text}]}>Don’t have an account?</Text>
                            <TouchableOpacity 
                                style={{marginLeft:5}}>
                                <Text style={[FONTS.fontLg,{color:COLORS.primary,textDecorationLine:'underline'}]}>SignIn here</Text>
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


export default CreateAccount;
