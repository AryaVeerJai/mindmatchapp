import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { COLORS, FONTS, SIZES } from '../../constants/theme';

const ButtonOutline = (props) => {
    return (
        <TouchableOpacity
            onPress={()=> props.onPress && props.onPress()}
            style={[{
                ...props.style,
                borderWidth:1,
                borderColor: props.color ? props.color : COLORS.primary,
                paddingHorizontal:15,
                paddingVertical:12,
                borderRadius: props.btnSquare ? 0 : props.btnRounded ? 30 : SIZES.radius,
                alignItems:'center',
            }]}
        >
            <Text style={[{...FONTS.h6,color:props.color ? props.color : COLORS.primary}]}>{props.title}</Text>
        </TouchableOpacity>
    );
};


export default ButtonOutline;