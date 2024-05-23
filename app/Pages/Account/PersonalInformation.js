import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, TextInput, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { SvgXml } from 'react-native-svg';
import CustomButton from '../../components/CustomButton';
import { GlobalStyleSheet } from '../../constants/StyleSheet';
import { COLORS, FONTS, ICONS, SIZES } from '../../constants/theme';
import Header from '../../layout/Header';

const PersonalInformation = () => {
    const {colors} = useTheme();
    return (
        <SafeAreaView style={{flex:1,backgroundColor:colors.background}}>
            <Header title={'Personal information'} leftIcon={'back'}/>
            <ScrollView>
                <View style={GlobalStyleSheet.container}>
                    <View style={{marginBottom:15}}>
                        <View style={styles.inputIcon}>
                            <SvgXml
                                xml={ICONS.user}
                            />
                        </View>
                        <TextInput
                            style={[styles.inputStyle,{color:colors.title,borderColor:colors.borderColor}]}
                            placeholder='Email Address'
                            placeholderTextColor={colors.text}
                        />
                    </View>
                    <View style={{marginBottom:15}}>
                        <View style={styles.inputIcon}>
                            <SvgXml
                                xml={ICONS.user}
                            />
                        </View>
                        <TextInput
                            style={[styles.inputStyle,,{color:colors.title,borderColor:colors.borderColor}]}
                            defaultValue="+12 45185 48154"
                            placeholder='Phone Number'
                            placeholderTextColor={colors.text}
                        />
                    </View>
                    <CustomButton title={'Save'}/>
                </View>
            </ScrollView>
        </SafeAreaView>
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
    
})

export default PersonalInformation;