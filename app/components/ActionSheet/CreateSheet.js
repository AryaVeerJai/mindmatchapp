import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useNavigation, useTheme } from '@react-navigation/native';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { COLORS, FONTS } from '../../constants/theme';
import { GlobalStyleSheet } from '../../constants/StyleSheet';
import Button from '../Button/Button';
import CustomInput from '../Input/CustomInput';

const CreateSheet = (props) => {
    const {colors} = useTheme();
    const navigation = useNavigation();

    return (
        <>
            <View style={{
                paddingHorizontal:15,
                // borderBottomWidth:1,
                // borderColor:colors.borderColor,
                paddingVertical:10,
            }}>
                {/* <Text style={{...FONTS.h5,color:colors.title}}>Sign In</Text> */}
            </View>
            <View style={[GlobalStyleSheet.container, {marginTop: 20, paddingHorizontal: 30}]}>
                <View style={{marginBottom:30}}>
                    {/* <CustomInput
                        icon={<FontAwesome name={'user'} size={20} color={colors.textLight}/> }
                        value={''}    
                        placeholder={'Name'}
                        onChangeText={(value)=> console.log(value)}
                    /> */}
                    <TouchableOpacity onPress={() => navigation.navigate('CreatePostScreen')}  style={{flexDirection: 'row', gap: 10, alignItems: 'center' }}><Text style={{padding: 20, borderRadius: 50, backgroundColor: '#0C1427'}} ><MaterialIcons style={{padding: 20}} name='post-add' size={25} /></Text><Text style={{fontSize: 20, paddingHorizontal: 10}}>Create Post </Text></TouchableOpacity>
                </View>
                <View style={{marginBottom:30}}>
                    {/* <CustomInput
                        icon={<FontAwesome name={'lock'} size={20} color={colors.textLight}/> }
                        value={''}    
                        type={'password'}
                        placeholder={'Password'}
                        onChangeText={(value)=> console.log(value)}
                    /> */}
                    <TouchableOpacity onPress={() => navigation.navigate('CreatePollScreen')}  style={{flexDirection: 'row', gap: 10, alignItems: 'center'}}><Text style={{padding: 20, borderRadius: 50, backgroundColor: '#0C1427'}} ><MaterialCommunityIcons name='poll' size={25} /></Text><Text style={{fontSize: 20, paddingHorizontal: 10}}>Create Poll</Text></TouchableOpacity>
                </View>
                <View style={{marginBottom:15}}>
                    {/* <CustomInput
                        icon={<FontAwesome name={'lock'} size={20} color={colors.textLight}/> }
                        value={''}    
                        type={'password'}
                        placeholder={'Password'}
                        onChangeText={(value)=> console.log(value)}
                    /> */}
                    <TouchableOpacity onPress={() => navigation.navigate('LookingFor')} style={{flexDirection: 'row', gap: 10, alignItems: 'center'}}><Text style={{padding: 20, borderRadius: 50, backgroundColor: '#0C1427'}} ><MaterialIcons name='location-searching' size={25} /></Text><Text style={{fontSize: 20, paddingHorizontal: 10}}>Looking For</Text></TouchableOpacity>
                </View>
                {/* <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:15,marginTop:10}}>
                    <TouchableOpacity>
                        <Text style={{...FONTS.font,color:COLORS.primary}}>Forgot Password?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={{...FONTS.font,color:COLORS.primary}}>Create Account</Text>
                    </TouchableOpacity>
                </View> */}
                {/* <Button title={'Login'}/> */}
            </View>
        </>
    );
};



export default CreateSheet;