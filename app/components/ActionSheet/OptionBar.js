import React from 'react';
import { Text, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { FONTS } from '../../constants/theme';
import ButtonSm from '../Button/ButtonSm';

const OptionBar = (props) => {

    const {colors} = useTheme();

    return (
        <>
            <View style={{alignItems:'center',paddingHorizontal:35,paddingVertical:20}}>
                <Ionicons name='information-circle-sharp' style={{marginBottom:8}} color={'#704FFE'} size={60}/>
                <Text style={{...FONTS.h5,color:colors.title}}>Confirm Action ?</Text>
                <Text style={{...FONTS.font,color:colors.text,textAlign:'center'}}>It is a long established fact that a reader will be distracted by the readable content.</Text>
                <View style={{flexDirection:'row',marginTop:18}}>
                    <ButtonSm title={'Cancel'} style={{marginRight:10}} color={'#f75a5b'}/>
                    <ButtonSm title={'Continue'} color={'#704FFE'}/>
                </View>
            </View>
        </>
    );
};


export default OptionBar;