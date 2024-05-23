import React from 'react';
import { Image, Platform, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation, useTheme } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { COLORS, FONTS } from '../../constants/theme'; 
import DropShadow from 'react-native-drop-shadow';

const CardStyle5 = ({image,title,size,price,navigate}) => {

    const {colors} = useTheme();
    const navigation = useNavigation();

    return (
        <DropShadow
            style={[{
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: .15,
                shadowRadius: 5,
            }, Platform.OS === 'ios' && {
                backgroundColor:colors.cardBg,
                borderRadius:15,
            }]}
        >
            <View
                style={{
                    backgroundColor:colors.cardBg,
                    borderRadius:15,
                    paddingHorizontal:15,
                    paddingVertical:15,
                }}
            >
                <Image
                    style={{
                        width:'100%',
                        height:120,
                        marginBottom:10,
                        resizeMode:'contain',
                    }}
                    source={image}
                />
                <TouchableOpacity
                    onPress={() => navigate && navigation.navigate('ShoppingCart')}
                    style={{
                        position:'absolute',
                        top:14,
                        right:14,
                    }}
                >
                    <DropShadow
                        style={[{
                            shadowColor: COLORS.primary2,
                            shadowOffset: {
                                width: 0,
                                height: 2,
                            },
                            shadowOpacity: .5,
                            shadowRadius: 5,
                        },Platform.OS === 'ios' && {
                            borderRadius:25,
                            backgroundColor:COLORS.primary2,
                        }]}
                    >
                        <LinearGradient
                            colors={[COLORS.primary2,'#22cf96']}
                            style={{
                                height:28,
                                width:28,
                                borderRadius:25,
                                alignItems:'center',
                                justifyContent:'center',
                            }}
                        >
                            <FeatherIcon color={COLORS.white} size={16} name={'plus'}/>
                        </LinearGradient>
                    </DropShadow>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigate && navigation.navigate(navigate)}
                >
                    <Text style={{...FONTS.h6,color:colors.title,marginBottom:5}}>{title}</Text>
                </TouchableOpacity>
                <View
                    style={{
                        flexDirection:'row',
                        alignItems:'center',
                    }}
                >
                    <View
                        style={{
                            backgroundColor:COLORS.primayLight2,
                            paddingHorizontal:8,
                            paddingVertical:3,
                            borderRadius:8,
                            marginRight:15,
                        }}
                    >
                        <Text style={{...FONTS.fontSm,...FONTS.fontBold,color:COLORS.primary2}}>{size}</Text>
                    </View>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <Text style={{...FONTS.fontSm,color:colors.title,marginRight:3}}>$</Text>
                        <Text style={{...FONTS.h6,color:colors.title,lineHeight:22}}>{price}</Text>
                    </View>
                </View>
            </View> 
        </DropShadow>
    );
};


export default CardStyle5;