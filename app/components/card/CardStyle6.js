import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation, useTheme } from '@react-navigation/native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { COLORS, FONTS, IMAGES } from '../../constants/theme';
import LinearGradient from 'react-native-linear-gradient';

const CardStyle6 = ({image,title,duration,lesson,tags,navigate}) => {

    const theme = useTheme();
    const {colors} = theme;
    const navigation = useNavigation();

    return (
        <>
            <View
                style={{
                    width:280,
                    marginRight:15,
                    backgroundColor: colors.cardBg,
                    padding:8,
                    borderRadius:15,
                    borderWidth:1,
                    borderColor:colors.borderColor,
                    // shadowColor: "rgba(0,0,0,.4)",
                    // shadowOffset: {
                    //     width: 0,
                    //     height: 4,
                    // },
                    // shadowOpacity: 0.30,
                    // shadowRadius: 4.65,

                    // elevation: 8,
                }}
            >
                <View style={{position:'relative'}}>
                    <Image
                        style={{
                            width:'100%',
                            height:150,
                            borderRadius:10,
                        }} 
                        source={image}
                    />
                    <LinearGradient
                        colors={['rgba(0,0,0,0)','rgba(0,0,0,.6)']}
                        style={{
                            height:'100%',
                            width:'100%',
                            position:'absolute',
                            borderRadius:10,
                        }}
                    >
                    </LinearGradient>
                    <TouchableOpacity
                        style={{
                            position:'absolute',
                            bottom:10,
                            left:10,
                            backgroundColor:'rgba(255,255,255,.15)',
                            paddingHorizontal:10,
                            paddingVertical:2,
                            borderRadius:6,
                            flexDirection:'row',
                            alignItems:'center',
                        }}
                    >
                        <FeatherIcon style={{marginRight:5}} color={COLORS.white} name={'clock'}/>
                        <Text style={{...FONTS.font,color:COLORS.white,marginBottom:1}}>{duration}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            position:'absolute',
                            bottom:10,
                            right:10,
                            backgroundColor:'rgba(255,255,255,.15)',
                            paddingHorizontal:10,
                            paddingVertical:2,
                            borderRadius:6,
                            flexDirection:'row',
                            alignItems:'center',
                        }}
                    >
                        <FeatherIcon style={{marginRight:5}} color={COLORS.white} name={'file-text'}/>
                        <Text style={{...FONTS.font,color:COLORS.white,marginBottom:1}}>{lesson} lessons</Text>
                    </TouchableOpacity>
                </View>
                <View style={{paddingHorizontal:12,paddingTop:15,paddingBottom:12}}>
                    <View
                        style={{
                            flexDirection:'row',
                            marginBottom:10,
                        }}
                    >
                        {tags && tags.map((data,index) => (
                            <TouchableOpacity 
                            key={index}
                            style={{
                                backgroundColor:theme.dark ? 'rgba(255,255,255,.1)' : '#eee',
                                marginRight:10,
                                paddingHorizontal:10,
                                paddingVertical:4,
                                borderRadius:6,
                            }}
                            >
                                <Text style={{...FONTS.fontSm,color:colors.title}}>{data}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                    <Text style={{...FONTS.h6,color:colors.title,marginBottom:15}}>{title}</Text>
                    {/* <Text style={{...FONTS.font,color:colors.text}}>It is a long established fact that a reader will be distracted.</Text> */}
                    {/* <View
                        style={{flexDirection:'row',marginBottom:15,alignItems:'center',justifyContent:'space-between'}}
                    >
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                            <FeatherIcon style={{marginRight:4}} color={colors.text} size={14} name={'file-text'}/>
                            <Text style={{...FONTS.font,color:colors.text}}>{lesson} Lessons</Text>
                        </View>
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                            <Image 
                                style={{height:18,width:18,resizeMode:'contain',marginRight:5}}
                                source={IMAGES.star}
                            />
                            <Text style={{...FONTS.fontSm,...FONTS.fontBold,color:colors.title}}>4.5</Text>
                        </View>
                    </View> */}
                    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                        <TouchableOpacity
                            onPress={() => navigate && navigation.navigate(navigate)}
                            style={{
                                backgroundColor:COLORS.primary3,
                                paddingVertical:10,
                                paddingHorizontal:15,
                                borderRadius:8,
                                flexDirection:'row',
                                alignItems:'center',
                            }}
                        >
                            {/* <FeatherIcon style={{marginRight:8}} size={16} color={COLORS.white} name={'shopping-cart'}/> */}
                            <Text style={{...FONTS.font,...FONTS.fontBold,color:COLORS.white,marginBottom:1}}>View details</Text>
                        </TouchableOpacity>
                        <Text style={{...FONTS.h4,color:colors.title}}>$40.25</Text>
                    </View>
                </View>
            </View>
        </>
    );
};


export default CardStyle6;