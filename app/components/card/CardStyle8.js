import React from 'react';
import { Image, Platform, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation, useTheme } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { COLORS, FONTS } from '../../constants/theme';
import DropShadow from 'react-native-drop-shadow';

const CardStyle8 = ({image,title,address,price,navigate}) => {

    const {colors} = useTheme();
    const navigation = useNavigation();
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
            }, Platform.OS === 'ios' && {
                backgroundColor:colors.cardBg,
                borderRadius:10,
                marginBottom:15,
            }]}
        >
            <TouchableOpacity
                activeOpacity={.8}
                onPress={() => navigate && navigation.navigate(navigate)}
                style={[{
                    backgroundColor:colors.cardBg,
                    borderRadius:10,
                    overflow:'hidden',
                },Platform.OS === 'android' && {
                    marginBottom:15,
                }]}
            >
                <View>
                    <Image
                        style={{
                            width:'100%',
                            height:140,
                        }}
                        source={image}
                    />
                    <LinearGradient
                        end={{x: 0.0, y: 0.25}} 
                        start={{x: 0.5, y: 1.0}}
                        locations={[0,0.6,1]}
                        colors={['rgba(0,0,0,0)','rgba(0,0,0,0)','rgba(0,0,0,.5)']}
                        style={{
                            position:'absolute',
                            height:'100%',
                            width:'100%',
                            borderRadius:10,
                            transform:[{rotateY: '180deg'}]
                        }}
                    >
                    </LinearGradient>
                    <TouchableOpacity
                        style={{
                            height:40,
                            width:40,
                            borderRadius:40,
                            position:'absolute',
                            top:10,
                            right:10,
                            alignItems:'center',
                            justifyContent:'center',
                            backgroundColor:'rgba(255,255,255,.25)',
                        }}
                    >
                        <FeatherIcon color={COLORS.white} size={18} name='heart'/>
                    </TouchableOpacity>
                </View>
                <View
                    style={{
                        paddingHorizontal:14,
                        paddingVertical:15,
                    }}
                >
                    <Text style={{...FONTS.h6,color:COLORS.primary}}>{price}</Text>
                    <Text style={{...FONTS.font,...FONTS.fontBold,color:colors.title}}>{title}</Text>
                    <View
                        style={{
                            flexDirection:'row',
                            alignItems:'center',
                            marginTop:5,
                        }}
                    >
                        <FeatherIcon style={{marginRight:3}} color={colors.textLight} name='map-pin'/>
                        <Text numberOfLines={1} style={{...FONTS.fontSm,color:colors.textLight}}>{address}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </DropShadow>
        </>
    );
};


export default CardStyle8;