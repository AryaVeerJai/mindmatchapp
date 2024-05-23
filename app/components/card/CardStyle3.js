import React from 'react';
import { Image, Platform, Text, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { FONTS } from '../../constants/theme';
import DropShadow from 'react-native-drop-shadow';

const CardStyle3 = ({title,update,image,tags}) => {
    
    const {colors} = useTheme();

    return (
        <>
        <DropShadow
            style={[{
                shadowColor: "#000",
                shadowOffset: {
                    width: 4,
                    height: 4,
                },
                shadowOpacity: .15,
                shadowRadius: 5,
            },Platform.OS === 'ios' && {
                backgroundColor: colors.cardBg,
                marginBottom:10,
                borderRadius:12,
            }]}
        >
            <View
                style={[{
                    padding:15,
                    backgroundColor: colors.cardBg,
                    borderRadius:12,
                    flexDirection:'row',
                },Platform.OS === 'android' && {
                    marginBottom:10,
                }]}
            >
                <View style={{flex:1,paddingRight:15}}>
                    <Text style={{...FONTS.fontXs,color:colors.text,marginBottom:4}}>{tags && tags[0]}</Text>
                    <Text numberOfLines={2} style={{...FONTS.h6,fontSize:14,color:colors.title,marginBottom:4}}>{title}</Text>
                    <Text style={{...FONTS.fontXs,color:colors.textLight}}>{update}</Text>
                </View>
                <Image
                    style={{
                        width:100,
                        height:80,
                        borderRadius:10,
                    }}
                    source={image}
                />
            </View>
        </DropShadow>
        </>
    );
};


export default CardStyle3;