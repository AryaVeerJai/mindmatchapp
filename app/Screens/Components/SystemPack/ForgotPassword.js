

import React from 'react';
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
import SelectDropdown from 'react-native-select-dropdown';
import CustomButton from '../../../components/CustomButton';
import { GlobalStyleSheet } from '../../../constants/StyleSheet';
import { FONTS, SIZES, IMAGES, ICONS } from '../../../constants/theme';
import Header from '../../../layout/Header';

const ForgotPassword = (props) =>{
    const {colors} = useTheme();
    const countriesWithFlags = [
        {title: '+971', image: IMAGES.UnitedArabEmirates},
        {title: '+61', image: IMAGES.Australia},
        {title: '+91', image: IMAGES.india},
        {title: '+1', image: IMAGES.UnitedStates},
    ];

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
                            <Text style={[FONTS.h2,{textAlign:'center',color:colors.title}]}>Forgot Password</Text>
                            <Text style={[FONTS.font,{textAlign:'center',color:colors.text}]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </Text>
                        </View>
                        <View style={[styles.inputStyle,{borderColor:colors.borderColor}]}>
                            
                            <View
                                style={{
                                    flexDirection:'row',
                                    alignItems:'center',
                                }}
                            >
                                <SelectDropdown
                                    data={countriesWithFlags}
                                    defaultValue={countriesWithFlags[0]}
                                    onSelect={(selectedItem, index) => {}}
                                    buttonStyle={{
                                        padding:0,
                                        backgroundColor:'transparent',
                                        width:82,
                                        paddingRight:0,
                                        height:24,
                                    }}
                                    renderCustomizedButtonChild={(selectedItem, index) => {
                                        return (
                                        <View style={{flexDirection:'row'}}>
                                            {selectedItem ? 
                                            <View
                                                style={{
                                                    borderWidth:1,
                                                    borderColor:colors.borderColor,
                                                    overflow:'hidden',
                                                    marginRight:6,
                                                }}
                                            >
                                                <Image
                                                    style={{
                                                        width:30,
                                                        height:20,
                                                    }}
                                                    source={selectedItem.image}
                                                />
                                            </View>
                                            : undefined
                                            }
                                            <Text  style={{...FONTS.fontLg,color:colors.title}}>{selectedItem ? selectedItem.title : '000'}</Text>
                                        </View>
                                        );
                                    }}
                                    dropdownStyle={{
                                        width:100,
                                        borderRadius:4,
                                    }}
                                    rowStyle={{
                                        height:40,
                                        borderBottomColor:colors.borderColor,
                                    }}
                                    renderCustomizedRowChild={(item, index) => {
                                        return (
                                            <View style={{flexDirection:'row',paddingHorizontal:10}}>
                                                <View
                                                    style={{
                                                        borderWidth:1,
                                                        borderColor:colors.borderColor,
                                                        overflow:'hidden',
                                                        marginRight:6,
                                                    }}
                                                >
                                                    <Image
                                                        style={{
                                                            width:30,
                                                            height:20,
                                                        }}
                                                        source={item.image}
                                                    />
                                                </View>
                                                <Text style={{...FONTS.fontLg,color:colors.title}}>{item.title}</Text>
                                            </View>
                                        );
                                    }}
                                />
                            </View>

                            <TextInput
                                style={{
                                    ...FONTS.fontLg,
                                    color:colors.title,
                                    flex:1,
                                    top:1,
                                }}
                                keyboardType='number-pad'
                                placeholder='Phone number'
                                placeholderTextColor={colors.text}
                            />
                        </View>
                        <View style={{paddingBottom:10,flexDirection:'row'}}>
                            <TouchableOpacity
                                onPress={()=> props.navigation.navigate('SignIn')}
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
                                    onPress={()=> props.navigation.navigate('EnterCode')}
                                    title="NEXT"
                                />
                            </View>
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
        borderRadius: SIZES.radius,
        marginBottom:15,
        flexDirection:'row',
        alignItems:'center',
    },
    
})


export default ForgotPassword;
