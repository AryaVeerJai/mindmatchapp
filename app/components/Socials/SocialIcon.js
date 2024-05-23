import React from 'react';
import { TouchableOpacity } from 'react-native';
import { COLORS, SIZES } from '../../constants/theme';

const SocialIcon = (props) => {
    return (
        <>
            <TouchableOpacity
                style={[{
                    height:40,
                    width:40,
                    backgroundColor:props.color ? props.color : COLORS.primary,
                    borderRadius:props.square ? 0 : props.rounded ? 30 : SIZES.radius,
                    alignItems:'center',
                    justifyContent:'center',
                    marginHorizontal:4,
                }, props.btnSm && {
                    height:35,
                    width:35,
                }, props.btnLg && {
                    height:45,
                    width:45,
                }]}
            >
                {props.icon}
            </TouchableOpacity>
        </>
    );
};


export default SocialIcon;