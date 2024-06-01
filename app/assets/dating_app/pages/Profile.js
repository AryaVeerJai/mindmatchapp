import React from 'react';
import { Image, ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import * as Progress from 'react-native-progress';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Button from '../components/Button/Button';
import { GlobalStyleSheet } from '../constants/StyleSheet';
import { COLORS, FONTS, IMAGES } from '../constants/theme';
import Divider from '../components/Dividers/Divider';

const Profile = (props) => {
    
    const {colors} = useTheme();

    const Features = [
        "Unlimited likes",
        "Beeline",
        "Advanced filters",
        "Incognito mode",
        "Travel mode",
        "5 SuperSwipes a week",
        "1 Spotlight a week",
        "Unlimited Extends",
        "Unlimited Rematch",
        "Unlimited Backtrack",
    ]

    return (
        <>
            <SafeAreaView style={{flex:1,backgroundColor:colors.background2}}>
                <ScrollView>
                    <View
                        style={[styles.profileArea,GlobalStyleSheet.shadow,{
                            backgroundColor:colors.cardBg,  
                        }]}
                    >
                        <View
                            style={styles.headerArea}
                        >
                            <Text style={{...FONTS.h5,color:colors.title}}>Profile</Text>
                            <TouchableOpacity
                                onPress={() => props.navigation.navigate('DateFilter')}
                                style={[GlobalStyleSheet.headerBtn,{borderColor:colors.borderColor,}]}
                            >
                            <Image
                                    style={{
                                        height:22,
                                        width:22,
                                        tintColor:colors.title,
                                    }}
                                    source={IMAGES.setting2}
                                />
                            </TouchableOpacity>
                        </View>
                        <View
                            style={{
                                flexDirection:'row',
                                alignItems:'center',
                                justifyContent:'space-around',
                                marginBottom:25,
                            }}
                        >
                            <TouchableOpacity
                                style={styles.actionBtn}
                            >
                                <FontAwesome5 color={COLORS.primary4} size={22} name={'cog'}/>
                            </TouchableOpacity>
                            <View
                                style={{
                                    alignItems:'center',
                                    justifyContent:'center',
                                }}
                            >
                                <View
                                    style={{transform:[{rotate : '180deg'}]}}
                                >
                                    <Progress.Circle 
                                        borderWidth={0}
                                        unfilledColor={'#d4e8f2'}
                                        color={COLORS.primary4}
                                        progress={0.4} 
                                        size={130} 
                                        thickness={5}
                                        strokeCap={'round'}
                                    />
                                </View>
                                <Image
                                    style={{
                                        height:120,
                                        width:120,
                                        borderRadius:100,
                                        position:'absolute',
                                    }}
                                    source={IMAGES.user1}
                                />
                                <View
                                    style={[styles.profileProgress,{
                                        borderColor:colors.cardBg,
                                    }]}
                                >
                                    <Text style={{...FONTS.font,...FONTS.fontBold,color:COLORS.white}}>40%</Text>
                                </View>
                            </View>
                            <TouchableOpacity
                                style={styles.actionBtn}
                            >
                                <FontAwesome5 color={COLORS.primary4} size={20} name={'pencil-alt'}/>
                            </TouchableOpacity>
                        </View>
                        <View style={{alignItems:'center'}}>
                            <Text style={{...FONTS.h4,color:colors.title,lineHeight:22}}>Richard , 20</Text>
                            <View
                                style={{flexDirection:'row',alignItems:'center'}}
                            >
                                <FeatherIcon color={colors.text} size={13} style={{marginRight:5,top:1}} name='map-pin' />
                                <Text style={{...FONTS.font,color:colors.text}}>Mantreal, Canada</Text>
                            </View>
                        </View>
                    </View>
                    <View style={GlobalStyleSheet.container}>
                        <View style={GlobalStyleSheet.row}>
                            <View style={GlobalStyleSheet.col50}>
                                <TouchableOpacity
                                    style={{
                                        backgroundColor:colors.cardBg,
                                        borderRadius:10,
                                        paddingHorizontal:12,
                                        paddingVertical:15,
                                        flexDirection:'row',
                                        alignItems:'center',
                                        ...GlobalStyleSheet.shadow,
                                    }}
                                >
                                    <Image
                                        style={{
                                            height:26,
                                            width:26,
                                            marginRight:12,
                                            tintColor:COLORS.primary4,
                                        }}
                                        source={IMAGES.sparkle}
                                    />
                                    <View>
                                        <Text style={{...FONTS.font,...FONTS.fontBold,color:colors.title}}>Spotlight</Text>
                                        <Text style={{...FONTS.font,color:colors.text}}>from 18.50 INR</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={GlobalStyleSheet.col50}>
                                <TouchableOpacity
                                    style={{
                                        backgroundColor:colors.cardBg,
                                        borderRadius:10,
                                        paddingHorizontal:12,
                                        paddingVertical:15,
                                        flexDirection:'row',
                                        alignItems:'center',
                                        ...GlobalStyleSheet.shadow,
                                    }}
                                >
                                    <Image
                                        style={{
                                            height:26,
                                            width:26,
                                            marginRight:12,
                                            tintColor:COLORS.primary4,
                                        }}
                                        source={IMAGES.star2}
                                    />
                                    <View>
                                        <Text style={{...FONTS.font,...FONTS.fontBold,color:colors.title}}>SuperSwipe</Text>
                                        <Text style={{...FONTS.font,color:colors.text}}>from 10.50 INR</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{
                            paddingLeft:15,
                            paddingTop:15,
                            paddingBottom:90,
                        }}
                    >
                        <View
                            style={{
                                backgroundColor:colors.cardBg,
                                marginRight:15,
                                width:300,
                                overflow:'hidden',
                                borderRadius:20,
                                ...GlobalStyleSheet.shadow,
                            }}
                        >
                            <ImageBackground
                                source={IMAGES.datingPattern1}
                                style={{
                                    paddingHorizontal:20,
                                    paddingVertical:25,
                                }}
                            >
                                <Text style={{...FONTS.h2,color:COLORS.white}}>PREMIUM - {'\n'}PRO</Text>
                                <View 
                                    style={{
                                        position:'absolute',
                                        bottom:10,
                                        right:20,
                                        alignItems:'flex-end',
                                    }}
                                >
                                    <Text style={{...FONTS.h2,color:COLORS.white,lineHeight:30}}>$45.15</Text>
                                    <Text style={{...FONTS.font,fontSize:16,opacity:.8,color:COLORS.white}}>/ month</Text>
                                </View>
                            </ImageBackground>
                            <View
                                style={{
                                    paddingHorizontal:15,
                                    paddingVertical:20,
                                }}
                            >
                                <Text style={[FONTS.h5,{color:colors.title}]}>Features:</Text>
                                <View style={{marginBottom:15}}>
                                    {Features.map((data,index) => {
                                        return(
                                            <View
                                                key={index}
                                            >
                                                <View 
                                                    style={{...styles.priceListItem,borderColor:colors.borderColor}}>
                                                    <FontAwesome5 style={{marginRight:8}} color={COLORS.success} size={14} name='check'/>
                                                    <Text style={{...FONTS.font,color:colors.text}}>{data}</Text>
                                                </View>
                                                <Divider dashed style={{marginBottom:0,marginTop:0}}/>
                                            </View>
                                        )
                                    })}
                                </View>
                                <Button color={COLORS.primary4} btnRounded title="Subscribe now"/>
                            </View>
                        </View>
                        <View
                            style={{
                                backgroundColor:colors.cardBg,
                                marginRight:15,
                                width:300,
                                borderRadius:20,
                                overflow:'hidden',
                                ...GlobalStyleSheet.shadow,
                            }}
                        >
                            <View
                                style={{
                                    paddingHorizontal:20,
                                    paddingVertical:25,
                                    backgroundColor:'#221743',
                                }}
                            >
                                <Text style={{...FONTS.h2,color:COLORS.white}}>BOOST - {'\n'}BASIC</Text>
                                <View 
                                    style={{
                                        position:'absolute',
                                        bottom:10,
                                        right:20,
                                        alignItems:'flex-end',
                                    }}
                                >
                                    <Text style={{...FONTS.h2,color:COLORS.white,lineHeight:30}}>$25.10</Text>
                                    <Text style={{...FONTS.font,fontSize:16,opacity:.8,color:COLORS.white}}>/ month</Text>
                                </View>
                            </View>
                            <View
                                style={{
                                    paddingHorizontal:15,
                                    paddingVertical:20,
                                }}
                            >
                                <Text style={[FONTS.h5,{color:colors.title}]}>Features:</Text>
                                <View style={{marginBottom:15}}>
                                    {Features.map((data,index) => {
                                        return(
                                            <View
                                                key={index}
                                            >
                                                <View 
                                                    style={{...styles.priceListItem,borderColor:colors.borderColor}}>
                                                    <FontAwesome5 style={{marginRight:8}} color={COLORS.success} size={14} name='check'/>
                                                    <Text style={{...FONTS.font,color:colors.text}}>{data}</Text>
                                                </View>
                                                <Divider dashed style={{marginBottom:0,marginTop:0}}/>
                                            </View>
                                        )
                                    })}
                                </View>
                                <Button color={COLORS.primary4} btnRounded title="Subscribe now"/>
                            </View>
                        </View>
                    </ScrollView>
                
                </ScrollView>

            </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({
    headerArea : {
        flexDirection:'row',
        paddingTop:15,
        paddingBottom:20,
        alignItems:'center',
        justifyContent:'space-between',
    },
    actionBtn : {
        height:50,
        width:50,
        borderRadius:50,
        backgroundColor:COLORS.primayLight4,
        alignItems:'center',
        justifyContent:'center',
    },
    profileArea : {
        paddingBottom:40,
        paddingHorizontal:15,
    },
    profileProgress : {
        position:'absolute',
        bottom:-10,
        backgroundColor:COLORS.primary4,
        paddingHorizontal:8,
        paddingVertical:2,
        borderRadius:20,
        borderWidth:2,
    },
    priceListItem:{
        flexDirection:'row',
        alignItems:'center',
        paddingVertical:8,
    }
})

export default Profile;