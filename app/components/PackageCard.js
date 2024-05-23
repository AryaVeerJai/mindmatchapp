import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation, useTheme } from '@react-navigation/native';
import { COLORS, FONTS } from '../constants/theme';
import Divider from './Dividers/Divider';
import { GlobalStyleSheet } from '../constants/StyleSheet';

const PackageCard = ({image,title,navigate,type}) => {
    
    const theme = useTheme();
    const {colors} = theme;
    const navigation = useNavigation();

    return (
        <TouchableOpacity
            onPress={() => navigation.navigate(navigate)}
            activeOpacity={.85}
            style={{
                backgroundColor:theme.dark ? colors.cardBg : colors.card,
                width:160,
                borderRadius:8,
                alignItems:'center',
                paddingHorizontal:5,
                paddingTop:5,
                marginBottom:35,
                paddingBottom:30,
                flex:1,
                marginRight:12,
                ...GlobalStyleSheet.shadow,
            }}
        >
            <View style={{overflow:'hidden',height:285,width:'100%'}}>
                <Image
                    style={{
                        height:'100%',
                        width:'100%',
                        marginBottom:0,
                        //resizeMode:'contain',
                    }}
                    source={image}
                />
                {type == "new" && 
                    <View
                        style={{
                            backgroundColor:'red',
                            position:'absolute',
                            paddingHorizontal:20,
                            paddingVertical:1,
                            top:6,
                            right:-18,
                            transform:[
                                {
                                    rotate : "45deg",
                                }
                            ]
                        }}
                    >
                        <Text style={{...FONTS.fontXs,...FONTS.fontBold,fontSize:10,color:COLORS.white}}>NEW</Text>
                    </View>
                }
            </View>
            <View style={{width:'100%'}}>
                <Divider style={{marginBottom:10,marginTop:10}}/>
            </View>
            <Text style={{...FONTS.fontSm,...FONTS.fontBold,color:colors.title,textAlign:'center'}}>{title}</Text>
            <View
                style={{
                    backgroundColor:COLORS.themePrimary,
                    paddingHorizontal:15,
                    paddingVertical:8,
                    borderRadius:8,
                    position:'absolute',
                    bottom:-14,
                }}
            >
                <Text style={{...FONTS.fontXs,...FONTS.fontBold,color:COLORS.white,top:1}}>View Demo</Text>
            </View>
        </TouchableOpacity>
    );
};


export default PackageCard;