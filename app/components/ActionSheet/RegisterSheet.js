import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { COLORS, FONTS } from '../../constants/theme';
import { GlobalStyleSheet } from '../../constants/StyleSheet';
import Button from '../Button/Button';
import CustomInput from '../Input/CustomInput';

const RegisterSheet = (props) => {
    const {colors} = useTheme();

    return (
        <>
            <View style={{
                paddingHorizontal:15,
                borderBottomWidth:1,
                borderColor:colors.borderColor,
                paddingVertical:10,
            }}>
                <Text style={{...FONTS.h5,color:colors.title}}>Sign Up</Text>
            </View>
            <View style={GlobalStyleSheet.container}>
                <View style={{marginBottom:15}}>
                    <CustomInput
                        icon={<FontAwesome name={'user'} size={20} color={colors.textLight}/> }
                        value={''}    
                        placeholder={'Name'}
                        onChangeText={(value)=> console.log(value)}
                    />
                </View>
                <View style={{marginBottom:15}}>
                    <CustomInput
                        icon={<MaterialIcon name={'email'} size={20} color={colors.textLight}/> }
                        value={''}    
                        placeholder={'Emai'}
                        onChangeText={(value)=> console.log(value)}
                    />
                </View>
                <View style={{marginBottom:15}}>
                    <CustomInput
                        icon={<FontAwesome name={'lock'} size={20} color={colors.textLight}/> }
                        value={''}    
                        type={'password'}
                        placeholder={'Password'}
                        onChangeText={(value)=> console.log(value)}
                    />
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:15,marginTop:10}}>
                    <TouchableOpacity>
                        <Text style={{...FONTS.font,color:COLORS.primary}}>Forgot Password?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={{...FONTS.font,color:COLORS.primary}}>Create Account</Text>
                    </TouchableOpacity>
                </View>
                <Button title={'Register'}/>
            </View>
        </>
    );
};



export default RegisterSheet;