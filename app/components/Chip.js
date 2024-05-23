import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { COLORS, FONTS, SIZES } from '../constants/theme';

const Chip = (props) => {

    const {colors} = useTheme();

    return (
        <>
            <TouchableOpacity
                style={[{
                    ...props.style,
                    backgroundColor: props.darkMode ? COLORS.dark : COLORS.light,
                    paddingLeft:38,
                    paddingVertical: 7,
                    paddingRight:15,
                    borderRadius:20,
                    position:'relative',
                }, props.chipLarge && {
                    paddingVertical:9,
                    paddingLeft:44,
                }, props.chipSmall && {
                    paddingVertical : 5,
                    paddingLeft:34,
                }]}
            >
                <View
                    style={[{
                        position:'absolute',
                        height:30,
                        width:30,
                        backgroundColor: props.color ? props.color : COLORS.primary,
                        borderRadius:20,
                        top:1,
                        left:0,
                        alignItems:'center',
                        justifyContent:'center',
                        overflow:'hidden',
                    }, props.chipLarge && {
                        height:34,
                        width:34,
                    }, props.chipSmall && {
                        height:26,
                        width:26,
                    }]}
                >
                    {props.image &&
                        <Image 
                            style={{
                                height:'100%',
                                width:'100%',
                                resizeMode:'cover',
                            }} 
                            source={props.image}
                        />
                    }
                    {props.icon}
                </View>
                <Text style={{...FONTS.font,color:props.darkMode ? COLORS.white : COLORS.title,lineHeight:18}}>{props.title}</Text>
            </TouchableOpacity>
        </>
    );
};


export default Chip;