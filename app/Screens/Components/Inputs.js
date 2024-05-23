import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { SvgXml } from 'react-native-svg';
import { GlobalStyleSheet } from '../../constants/StyleSheet';
import { COLORS, FONTS, ICONS, SIZES } from '../../constants/theme';
import Header from '../../layout/Header';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import CustomInput from '../../components/Input/CustomInput';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

const Inputs = (props) => {

    const {colors} = useTheme();

    const [passwordShow , setPasswordShow ] = useState(true);
    
    const handndleShowPassword = () => {
        setPasswordShow(!passwordShow);
    }

    return (
        <>
            <SafeAreaView style={{flex:1,backgroundColor:colors.card}}>
                <View style={{
                    flex:1,
                    backgroundColor:colors.background,
                }}>
                    <Header title={'Inputs'} bgWhite leftIcon={'back'}/>
                    <ScrollView>
                        <View style={GlobalStyleSheet.container}>
                            <View style={[styles.card,{
                                backgroundColor: colors.cardBg,
                            }]}>
                                <View style={{borderBottomWidth:1,borderColor:colors.borderColor,paddingBottom:8,marginBottom:20}}>
                                    <Text style={{...FONTS.h5,color:colors.title}}>Input with icon</Text>
                                </View>

                                <View style={{marginBottom:15}}>
                                    <View style={styles.inputIcon}>
                                        <SvgXml
                                            xml={ICONS.user}
                                        />
                                    </View>
                                    <TextInput
                                        style={[styles.inputStyle,{borderColor:colors.borderColor,color:colors.title}]}
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

                            </View>

                            <View style={[styles.card,{
                                backgroundColor: colors.cardBg,
                            }]}>
                                <View style={{borderBottomWidth:1,borderColor:colors.borderColor,paddingBottom:8,marginBottom:20}}>
                                    <Text style={{...FONTS.h5,color:colors.title}}>Modern Fields</Text>
                                </View>
                                <View style={{marginBottom:15}}>
                                    <CustomInput
                                        icon={<FontAwesome name={'user'} size={20} color={colors.textLight}/> }
                                        value={''}  
                                        placeholder="Enter Username"
                                        onChangeText={(value)=> console.log(value)}
                                    />
                                </View>
                                <View style={{marginBottom:15}}>
                                    <CustomInput
                                        icon={<MaterialIcon name={'email'} size={20} color={colors.textLight}/>}
                                        value={''}  
                                        placeholder="Enter Email"
                                        onChangeText={(value)=> console.log(value)}
                                    />
                                </View>
                                <View style={{marginBottom:15}}>
                                    <CustomInput
                                        type={'password'}
                                        icon={<FontAwesome name={'lock'} size={20} color={colors.textLight}/> }
                                        value={''}  
                                        placeholder="Password"
                                        onChangeText={(value)=> console.log(value)}
                                    />
                                </View>
                            </View>

                            <View style={[styles.card,{
                                backgroundColor: colors.cardBg,
                            }]}>
                                <View style={{borderBottomWidth:1,borderColor:colors.borderColor,paddingBottom:8,marginBottom:20}}>
                                    <Text style={{...FONTS.h5,color:colors.title}}>Input with different sizes</Text>
                                </View>
                                <View style={{marginBottom:15}}>
                                    <CustomInput
                                        inputLg
                                        icon={<FontAwesome name={'user'} size={20} color={colors.textLight}/> }
                                        value={''}  
                                        placeholder="Enter Username"
                                        onChangeText={(value)=> console.log(value)}
                                    />
                                </View>
                                <View style={{marginBottom:15}}>
                                    <CustomInput
                                        icon={<FontAwesome name={'user'} size={20} color={colors.textLight}/> }
                                        value={''}  
                                        placeholder="Enter Username"
                                        onChangeText={(value)=> console.log(value)}
                                    />
                                </View>
                                <View style={{marginBottom:15}}>
                                    <CustomInput
                                        inputSm
                                        icon={<FontAwesome name={'user'} size={20} color={colors.textLight}/> }
                                        value={''}  
                                        placeholder="Enter Username"
                                        onChangeText={(value)=> console.log(value)}
                                    />
                                </View>
                            </View>

                            <View style={[styles.card,{
                                backgroundColor: colors.cardBg,
                            }]}>
                                <View style={{borderBottomWidth:1,borderColor:colors.borderColor,paddingBottom:8,marginBottom:20}}>
                                    <Text style={{...FONTS.h5,color:colors.title}}>Modern Fields With Radius</Text>
                                </View>
                                <View style={{marginBottom:15}}>
                                    <CustomInput
                                        inputRounded
                                        icon={<FontAwesome name={'user'} size={20} color={colors.textLight}/> }
                                        value={''}  
                                        placeholder="Enter Username"
                                        onChangeText={(value)=> console.log(value)}
                                    />
                                </View>
                                <View style={{marginBottom:15}}>
                                    <CustomInput
                                        inputRounded
                                        icon={<MaterialIcon name={'email'} size={20} color={colors.textLight}/>}
                                        value={''}  
                                        placeholder="Enter Email"
                                        onChangeText={(value)=> console.log(value)}
                                    />
                                </View>
                                <View style={{marginBottom:15}}>
                                    <CustomInput
                                        inputRounded
                                        type={'password'}
                                        icon={<FontAwesome name={'lock'} size={20} color={colors.textLight}/> }
                                        value={''}  
                                        placeholder="Password"
                                        onChangeText={(value)=> console.log(value)}
                                    />
                                </View>
                            </View>

                            <View style={[styles.card,{
                                backgroundColor: colors.cardBg,
                            }]}>
                                <View style={{borderBottomWidth:1,borderColor:colors.borderColor,paddingBottom:8,marginBottom:20}}>
                                    <Text style={{...FONTS.h5,color:colors.title}}>Minimalist Fields</Text>
                                </View>
                                <View style={{marginBottom:15}}>
                                    <CustomInput
                                        inputBorder
                                        icon={<FontAwesome name={'user'} size={20} color={colors.textLight}/> }
                                        value={''}  
                                        placeholder="Enter Username"
                                        onChangeText={(value)=> console.log(value)}
                                    />
                                </View>
                                <View style={{marginBottom:15}}>
                                    <CustomInput
                                        inputBorder
                                        icon={<MaterialIcon name={'email'} size={20} color={colors.textLight}/>}
                                        value={''}  
                                        placeholder="Enter Email"
                                        onChangeText={(value)=> console.log(value)}
                                    />
                                </View>
                                <View style={{marginBottom:15}}>
                                    <CustomInput
                                        inputBorder
                                        type={'password'}
                                        icon={<FontAwesome name={'lock'} size={20} color={colors.textLight}/> }
                                        value={''}  
                                        placeholder="Password"
                                        onChangeText={(value)=> console.log(value)}
                                    />
                                </View>
                            </View>

                            <View style={[styles.card,{
                                backgroundColor: colors.cardBg,
                            }]}>
                                <View style={{borderBottomWidth:1,borderColor:colors.borderColor,paddingBottom:8,marginBottom:20}}>
                                    <Text style={{...FONTS.h5,color:colors.title}}>Range Slider</Text>
                                </View>

                                <View style={{marginBottom:15}}>

                                    <MultiSlider
                                        enableLabel
                                        customLabel={() => 
                                            <View style={{
                                                flexDirection:'row',
                                                justifyContent:'space-between',
                                                position:'absolute',
                                                bottom:-4,
                                                width:'100%',
                                            }}>
                                                <Text style={{...FONTS.fontSm,color:colors.text}}>0%</Text>
                                                <Text style={{...FONTS.fontSm,color:colors.text}}>25%</Text>
                                                <Text style={{...FONTS.fontSm,color:colors.text}}>50%</Text>
                                                <Text style={{...FONTS.fontSm,color:colors.text}}>75%</Text>
                                                <Text style={{...FONTS.fontSm,color:colors.text}}>100%</Text>
                                            </View>
                                        }
                                        trackStyle={{height:4,borderRadius:2,backgroundColor:'rgba(142,165,200,.3)'}}
                                        selectedStyle={{
                                            backgroundColor:COLORS.primary,
                                        }}
                                        markerStyle={{
                                            backgroundColor:COLORS.white,
                                            top:1,
                                            height:16,
                                            width:16,
                                            borderWidth:3,
                                            borderColor:COLORS.primary,
                                        }}
                                        sliderLength={SIZES.width - 60}
                                        max={100}
                                    />

                                </View>
                            </View>

                        </View>
                    </ScrollView>
                </View>
            </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({
    card : {
        padding:15,
        borderRadius:SIZES.radius,
        marginBottom:15,
        shadowColor: "rgba(0,0,0,.6)",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
    },
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


export default Inputs;