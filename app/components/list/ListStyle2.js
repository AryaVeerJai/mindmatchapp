import React from 'react';
import Ripple from 'react-native-material-ripple';
import { useTheme } from '@react-navigation/native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { Text, View } from 'react-native';
import { FONTS, SIZES } from '../../constants/theme';

const ListStyle2 = (props) => {

    const {colors} = useTheme();

    return (
        <>
            <Ripple
                onPress={() => props.onPress && props.onPress()}
                style={[{
                    flexDirection:'row',
                    alignItems:'center',
                    paddingHorizontal:15,
                    paddingVertical:20,
                    borderBottomWidth:1,
                    borderColor:colors.borderColor,
                }]}
            >
                <View style={{
                    height:40,
                    width:40,
                    borderWidth:1,
                    borderColor:colors.borderColor,
                    borderRadius:SIZES.radius,
                    marginRight:12,
                    alignItems:'center',
                    justifyContent:'center',
                }}>
                    {props.icon}
                </View>
                <View style={{flex:1,paddingRight:10}}>
                    <Text style={[FONTS.h6,{color:colors.title}]}>{props.title}</Text>
                    <Text numberOfLines={1} style={[FONTS.fontSm,{opacity:.6,color:colors.text,marginBottom:2,lineHeight:14}]}>{props.desc}</Text>
                </View>
                <FeatherIcon color={colors.text} name={'chevron-right'} size={22}/>
            </Ripple>
        </>
    );
};

export default ListStyle2;