import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { COLORS, FONTS, SIZES } from '../../constants/theme';

const SocialBtn = (props) => {
    return (
        <TouchableOpacity
            style={[{
                backgroundColor:props.color ? props.color : COLORS.primary,
                paddingVertical:12,
                borderRadius:SIZES.radius,
                overflow:'hidden',
                paddingLeft:56,
                paddingRight:20,
            },props.rounded && {
                borderRadius:30,
            }]}
        >
            <View
                style={[{
                    width:44,
                    position:'absolute',
                    top:0,
                    bottom:0,
                    backgroundColor:'rgba(0,0,0,0.15)',
                    alignItems:'center',
                    justifyContent:'center',
                }, props.rounded && {
                    borderRadius:30,
                }]}
            >
                {props.icon}
            </View>
            <Text style={{...FONTS.font,...FONTS.fontBold,color:COLORS.white}}>{props.text}</Text>
        </TouchableOpacity>
    );
};



export default SocialBtn;