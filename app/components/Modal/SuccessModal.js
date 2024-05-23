import React from 'react';
import { Text, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { FONTS, SIZES } from '../../constants/theme';
import ButtonSm from '../Button/ButtonSm';

const SuccessModal = (props) => {

    const {colors} = useTheme();

    return (
        <>
            <View style={{
                alignItems:'center',
                paddingHorizontal:30,
                paddingVertical:20,
                paddingBottom:30,
                backgroundColor:colors.card,
                borderRadius:SIZES.radius,
                marginHorizontal:30,
                maxWidth:340,
            }}>
                <Ionicons name='checkmark-circle' style={{marginBottom:8}} color={'#84CA93'} size={60}/>
                <Text style={{...FONTS.h5,color:colors.title}}>Success</Text>
                <Text style={{...FONTS.font,color:colors.text,textAlign:'center'}}>You can continue with your previous actions. Easy to attach these to success calls.</Text>
            </View>
        </>
    );
};


export default SuccessModal;