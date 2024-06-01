import React from 'react';
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { GlobalStyleSheet } from '../constants/StyleSheet';
import { COLORS, FONTS, IMAGES } from '../constants/theme';

const Messages = (props) => {
    
    const {colors} = useTheme(); 

    const NewMatchData = [
        {
            like : true,
            image : IMAGES.user1,
            name : "Mitchell",
        },
        {
            image : IMAGES.user2,
            name : "Grayson",
        },
        {
            image : IMAGES.user3,
            name : "Tenzing",
        },
        {
            image : IMAGES.user4,
            name : "Elisha",
        },
        {
            image : IMAGES.user5,
            name : "Mitchell",
        },
    ]

    const MessagesData = [
        {
            image : IMAGES.user1,
            name : "Leneve",
            lastMsg : "Would love to!",
        },
        {
            image : IMAGES.user2,
            name : "Matt",
            lastMsg : "Is that because we like the same people.",
        },
        {
            image : IMAGES.user3,
            name : "Karthik",
            lastMsg : "How do you know john?",
        },
        {
            image : IMAGES.user4,
            name : "Elisha",
            lastMsg : "Have you even been to Laurel Harmes",
        },
        {
            image : IMAGES.user5,
            name : "Wyatt",
            lastMsg : "that so awesome!",
        },
        {
            image : IMAGES.user1,
            name : "Leneve",
            lastMsg : "Would love to!",
        },
        {
            image : IMAGES.user2,
            name : "Leneve",
            lastMsg : "Would love to!",
        },
    ]

    return (
        <>
            <SafeAreaView style={{flex:1,backgroundColor:colors.background2}}>
                <ScrollView>
                    <View style={GlobalStyleSheet.container}>
                        <Text style={{...FONTS.h6,color:colors.title}}>New Matches</Text>
                    </View>
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{
                            paddingLeft:15,
                        }}
                    >
                        {NewMatchData.map((data,index) => {
                            if(data.like){
                                return(
                                    <TouchableOpacity
                                        key={index}
                                        style={{
                                            alignItems:'center',
                                            marginRight:15,
                                        }}
                                    >
                                        <View
                                            style={{
                                                height:70,
                                                width:70,
                                                borderRadius:60,
                                                borderWidth:3,
                                                borderColor:COLORS.primary4,
                                                alignItems:'center',
                                                justifyContent:'center',
                                                marginBottom:3,
                                            }}
                                        >
                                            <Image
                                                style={{
                                                    height:56,
                                                    width:56,
                                                    borderRadius:50,
                                                }}
                                                source={data.image}
                                            />
                                            <View
                                                style={{
                                                    height:56,
                                                    width:56,
                                                    borderRadius:56,
                                                    position:'absolute',
                                                    backgroundColor:'rgba(0,0,0,.5)',
                                                }}
                                            />
                                            <View
                                                style={{
                                                    height:35,
                                                    width:35,
                                                    borderRadius:40,
                                                    backgroundColor:COLORS.primary4,
                                                    position:'absolute',
                                                    alignItems:'center',
                                                    justifyContent:'center',
                                                }}
                                            >
                                                <Text style={{...FONTS.font,...FONTS.fontBold,color:COLORS.white}}>99+</Text>
                                            </View>
                                        </View>
                                        <Text style={{...FONTS.font,...FONTS.fontBold,color:colors.title}}>23 Likes</Text>
                                    </TouchableOpacity>
                                )
                            }else{
                                return(
                                    <TouchableOpacity
                                        key={index}
                                        style={{
                                            alignItems:'center',
                                            marginRight:15,
                                        }}
                                    >
                                        <View
                                            style={{
                                                marginBottom:3,
                                            }}
                                        >
                                            <Image
                                                style={{
                                                    height:70,
                                                    width:70,
                                                    borderRadius:60,
                                                }}
                                                source={data.image}
                                            />
                                        </View>
                                        <Text style={{...FONTS.font,...FONTS.fontBold,color:colors.title}}>{data.name}</Text>
                                    </TouchableOpacity>
                                )
                            }
                        })}
                    </ScrollView>

                    <View style={[GlobalStyleSheet.container,{marginTop:10}]}>
                        <Text style={{...FONTS.h6,color:colors.title}}>Messages</Text>
                    </View>
                    <View style={{marginBottom:80}}>
                        {MessagesData.map((data,index) => {
                            return(
                                <TouchableOpacity
                                    onPress={() => props.navigation.navigate('ChatScreen')}
                                    key={index}
                                    style={{
                                        flexDirection:'row',
                                        paddingHorizontal:15,
                                        alignItems:'center',
                                    }}
                                >
                                    <View
                                        style={{
                                            marginRight:12,
                                        }}
                                    >
                                        <Image
                                            style={{
                                                height:65,
                                                width:65,
                                                borderRadius:60,
                                            }}
                                            source={data.image}
                                        />
                                    </View>
                                    <View
                                        style={{
                                            paddingVertical:18,
                                            borderBottomWidth:1,
                                            borderColor:colors.borderColor,
                                            flex:1,
                                        }}
                                    >
                                        <Text style={{...FONTS.h6,color:colors.title}}>{data.name}</Text>
                                        <Text numberOfLines={1} style={{...FONTS.font,color:colors.text}}>{data.lastMsg}</Text>
                                    </View>
                                </TouchableOpacity>
                            )
                        })}
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    );
};

export default Messages;