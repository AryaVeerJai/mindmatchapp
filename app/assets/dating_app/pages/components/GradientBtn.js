import React from 'react';
import { TouchableOpacity, Text, Platform } from 'react-native';
import DropShadow from 'react-native-drop-shadow';
import LinearGradient from 'react-native-linear-gradient';
import { COLORS } from '../../constants/theme';

const GradientBtn = ({title,onPress}) => {
    return (
        <TouchableOpacity
            activeOpacity={.8}
            onPress={() => onPress && onPress()}
        >
            <DropShadow
                style={[{
                    shadowColor: COLORS.primary4,
                    shadowOffset: {
                        width: 0,
                        height: 5,
                    },
                    shadowOpacity: .5,
                    shadowRadius: 12,
                },Platform.OS === 'ios' && {
                    backgroundColor : COLORS.primary4,
                    borderRadius:30,
                }]}
            >
                <LinearGradient
                    colors={["#FF78B7","#FF3C97"]}
                    style={{
                        height:55,
                        alignItems:'center',
                        justifyContent:'center',
                        paddingHorizontal:20,
                        paddingVertical:12,
                        borderRadius:30,
                    }}
                >
                    <Text style={{
                        fontSize:18,
                        fontFamily:"Poppins-Medium",
                        color:COLORS.white,
                        top:1,
                    }}>{title}</Text>
                </LinearGradient>
            </DropShadow>
        </TouchableOpacity>
    );
};

export default GradientBtn;