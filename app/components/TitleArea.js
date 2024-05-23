import React from 'react';
import { useTheme } from '@react-navigation/native';
import { Text, View } from 'react-native';
import { FONTS } from '../constants/theme';

const TitleArea = ({title}) => {

    const {colors} = useTheme();

    return (
        <View
            style={{
                flexDirection:'row',alignItems:'center',
                marginBottom:15,
            }}
        >
            <View
                style={{
                    height:1,
                    flex:1,
                    backgroundColor:colors.borderColor,
                }}
            />
            <Text style={{...FONTS.h6,color:colors.title,paddingHorizontal:15}}>{title}</Text>
            <View
                style={{
                    height:1,
                    flex:1,
                    backgroundColor:colors.borderColor,
                }}
            />
        </View>
    );
};


export default TitleArea;