
import React from 'react';
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
import { useTheme } from '@react-navigation/native';
import { SvgXml } from 'react-native-svg';
import SelectDropdown from 'react-native-select-dropdown';
import CustomButton from '../../components/CustomButton';
import { GlobalStyleSheet } from '../../constants/StyleSheet';
import { COLORS, FONTS, SIZES, ICONS, IMAGES } from '../../constants/theme';

const ForgotPassword = (props) => {
    const {colors} = useTheme();
    const countriesWithFlags = [
        {title: '+91', image: IMAGES.india},
        {title: '+971', image: IMAGES.UnitedArabEmirates},
        {title: '+61', image: IMAGES.Australia},
        {title: '+1', image: IMAGES.UnitedStates},
    ];

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
                            //tintColor:colors.backgroundColor,
                        }}
                        source={IMAGES.loginShape}
                    />
                </View>
                <View style={{backgroundColor:'#332A5E'}}>
                    <View style={[GlobalStyleSheet.container,{paddingTop:5}]}>
                        <View style={{marginBottom:30}}>
                            <Text style={[FONTS.h2,{textAlign:'center',color:COLORS.white}]}>Forgot Password</Text>
                            <Text style={[FONTS.font,{textAlign:'center',color:COLORS.white,opacity:.7}]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </Text>
                        </View>
                        <View style={[styles.inputStyle]}>
                            
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
                                                    borderRadius:4,
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
                                            <Text  style={{...FONTS.fontLg,color:COLORS.white,top:1}}>{selectedItem ? selectedItem.title : '000'}</Text>
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
                                    color:COLORS.white,
                                    flex:1,
                                    top:1,
                                }}
                                keyboardType='number-pad'
                                placeholder='Phone number'
                                placeholderTextColor={'rgba(255,255,255,.6)'}
                            />
                        </View>
                        <View style={{paddingBottom:10,flexDirection:'row'}}>
                            <TouchableOpacity
                                onPress={()=> props.navigation.navigate('SignIn')}
                                style={{
                                    backgroundColor:'rgba(255,255,255,.1)',
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
        </ScrollView>
        </KeyboardAvoidingView>
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
        backgroundColor:'rgba(255,255,255,.05)',
        borderColor:'rgba(255,255,255,.3)',
    },
    
})


export default ForgotPassword;
