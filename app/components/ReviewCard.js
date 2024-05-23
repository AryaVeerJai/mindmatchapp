import React from 'react';
import { Image, Text, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { FONTS } from '../constants/theme';

const ReviewCard = ({image,name,desc}) => {
    
    const theme = useTheme();
    const {colors} = theme;

    return (
        <View
            style={{
                backgroundColor:theme.dark ? colors.cardBg : colors.card,
                borderRadius:10,
                width:190,
                marginRight:12,
                paddingHorizontal:12,
                paddingVertical:12,
            }}
        >
            <View
                style={{
                    flexDirection:'row',
                    alignItems:'center',
                    marginBottom:10,
                }}
            >
                <Image
                    style={{
                        height:40,
                        width:40,
                        borderRadius:40,
                        marginRight:10,
                    }}
                    source={image}
                />
                <View>
                    <Text style={{...FONTS.fontSm,...FONTS.fontBold,color:colors.title}}>{name}</Text>
                    <View
                        style={{
                            flexDirection:'row',
                            marginTop:5,
                        }}
                    >
                        <FontAwesome color={"#FFA800"} name="star"/>
                        <FontAwesome color={"#FFA800"} name="star"/>
                        <FontAwesome color={"#FFA800"} name="star"/>
                        <FontAwesome color={"#FFA800"} name="star"/>
                        <FontAwesome color={"#FFA800"} name="star"/>
                    </View>
                </View>
            </View>
            <Text style={{...FONTS.fontXs,color:colors.title,...FONTS.fontBold,lineHeight:16}}>{desc}</Text>
        </View>
    );
};

export default ReviewCard;