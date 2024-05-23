import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { COLORS, FONTS, SIZES } from '../../constants/theme';

const ButtonLg = (props) => {
    return (
        <TouchableOpacity
            style={[{
                ...props.style,
                backgroundColor: props.color ? props.color : COLORS.primary,
                paddingHorizontal:10,
                paddingVertical:16,
                alignItems:'center',
                borderRadius: props.btnSquare ? 0 : props.btnRounded ? 40 : 15,
            }]}
        >
            <Text style={{...FONTS.h5,...FONTS.fontPoppins,color:COLORS.white}}>{props.title}</Text>
        </TouchableOpacity>
    );
};


export default ButtonLg;