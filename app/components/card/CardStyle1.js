import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import FeatherIcon from "react-native-vector-icons/Feather";
import { COLORS, FONTS, SIZES } from '../../constants/theme';
import { GlobalStyleSheet } from '../../constants/StyleSheet';

const CardStyle1 = (props) => {

    const {colors} = useTheme();

    return (
        <>
            <TouchableOpacity
                onPress={() => props.onPress && props.onPress()}
                activeOpacity={.8}
                style={{
                    flexDirection:'row',
                    backgroundColor: colors.cardBg,
                    borderRadius:SIZES.radius,
                    alignItems:'center',
                    paddingHorizontal:20,
                    paddingVertical:15,
                    ...GlobalStyleSheet.shadow,
                }}
            >
                <View style={{alignItems:'center',justifyContent:'center',marginRight:15}}>
                    <View
                        style={{
                            height:60,
                            width:60,
                            borderRadius:30,
                            backgroundColor: props.iconColor ? props.iconColor : COLORS.primary,
                            opacity:.15,
                        }}
                    />
                    <View style={{position:'absolute'}}>
                        {props.icon}
                    </View>
                </View>
                <View style={{flex:1,paddingRight:10}}>
                    <Text style={[FONTS.h5,{color:colors.title}]}>{props.title}</Text>
                    <Text numberOfLines={1} style={[FONTS.fontSm,{lineHeight:16,color:colors.text,marginBottom:5}]}>{props.desc}</Text>
                </View>
                <FeatherIcon color={colors.text} name={'chevron-right'} size={24}/>
            </TouchableOpacity>
        </>
    );
};

export default CardStyle1;