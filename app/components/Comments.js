import React from 'react';
import { Image, KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { SvgXml } from 'react-native-svg';
import { COLORS, FONTS, ICONS, IMAGES } from '../constants/theme';
import Header from '../layout/Header';


const CommentsData = [
    {
        image : IMAGES.user1,
        name : 'Lucas Mokmana',
        comment : 'Awesome app i ever used. great structure, and customizable for multipurpose. 😀😀',
        like : '3',
        replies : [
            {
                image : IMAGES.user8,
                name : 'Lucas Mokmana',
                comment : 'Yes I am also use this.🙂',
            },
            {
                image : IMAGES.user7,
                name : 'John Doe',
                comment : 'Really Nice.👍',
            },
        ]
    },
    {
        image : IMAGES.user2,
        name : 'Hendri Lee',
        comment : 'Nice work... 😍😍',
        like : '2',
    },
    {
        image : IMAGES.user3,
        name : 'Brian Harahap',
        comment : 'We will always be friends until we are so old and senile.',
        like : '7',
    },
    {
        image : IMAGES.user4,
        name : 'Dons John',
        comment : 'Wow, you are flawless, intelligent, and bright.🤗🤗',
        like : '',
    },
    {
        image : IMAGES.user5,
        name : 'Eric Leew',
        comment : 'Finding a loving, cute, generous, caring, and intelligent pal is so hard. So, my advice to you all in the picture, never lose me.',
        like : '5',
    },
]


const Comments = () => {

    const {colors} = useTheme();

    return (
        <SafeAreaView style={{flex:1,backgroundColor:colors.background}}>
            <Header leftIcon="back" title={'Comments'}/>
            <View style={{flex:1}}>
                <ScrollView
                    contentContainerStyle={{
                        paddingVertical:10,
                    }}
                >    
                    {CommentsData.map((data,index) => {
                        return(
                            <View
                                key={index}
                            >
                                <View
                                    style={{
                                        flexDirection:'row',
                                        paddingLeft:15,
                                        paddingVertical:10,
                                    }}
                                    >
                                    <Image
                                        style={{
                                            height:40,
                                            width:40,
                                            borderRadius:20,
                                            marginRight:8,
                                        }}
                                        source={data.image}
                                        />
                                    <View style={{flex:1}}>
                                        <Text style={[FONTS.h6,{fontSize:14,lineHeight:20,color:colors.title}]}>{data.name}</Text>
                                        <Text style={[FONTS.font,{color:colors.text}]}>{data.comment}</Text>
                                        <View
                                            style={{
                                                flexDirection:'row',
                                                alignItems:'center',
                                                marginTop:4,
                                            }}
                                            >
                                            {data.like.length > 0 &&
                                                <TouchableOpacity style={{marginRight:15}}>
                                                    <Text style={{...FONTS.font,...FONTS.fontBold,color:colors.text,fontSize:13}}>{data.like} Like</Text>
                                                </TouchableOpacity>
                                            }
                                            <TouchableOpacity style={{marginRight:15}}>
                                                <Text style={{...FONTS.font,...FONTS.fontBold,color:colors.text,fontSize:13}}>Reply</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity style={{marginRight:15}}>
                                                <Text style={{...FONTS.font,...FONTS.fontBold,color:colors.text,fontSize:13}}>Send</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                    <TouchableOpacity
                                        accessible={true}
                                        accessibilityLabel="Like"
                                        accessibilityHint="Like this comment"
                                        style={{
                                            height:50,
                                            width:50,
                                            alignItems:'center',
                                            justifyContent:'center',
                                        }}
                                        >
                                        <SvgXml
                                            height={15}
                                            width={15}
                                            stroke={colors.text}
                                            xml={ICONS.heart}
                                            />
                                    </TouchableOpacity>
                                </View>
                                {data.replies && data.replies.map((data,index) => {
                                    return(
                                        <View
                                            key={index}
                                            style={{
                                                flexDirection:'row',
                                                paddingLeft:60,
                                                paddingVertical:8,
                                            }}
                                        >
                                            <Image 
                                                style={{
                                                    height:30,
                                                    width:30,
                                                    borderRadius:20,
                                                    marginRight:8,
                                                }}
                                                source={data.image}
                                            />
                                            <View style={{flex:1}}>
                                                <Text style={[FONTS.h6,{fontSize:14,lineHeight:20,color:colors.title}]}>{data.name}</Text>
                                                <Text style={[FONTS.font,{color:colors.text}]}>{data.comment}</Text>
                                                <View
                                                    style={{
                                                        flexDirection:'row',
                                                        alignItems:'center',
                                                        marginTop:4,
                                                    }}
                                                    >
                                                    {data.like &&
                                                        <TouchableOpacity style={{marginRight:15}}>
                                                            <Text style={{...FONTS.font,...FONTS.fontBold,color:colors.text,fontSize:13}}>{data.like} Like</Text>
                                                        </TouchableOpacity>
                                                    }
                                                    <TouchableOpacity style={{marginRight:15}}>
                                                        <Text style={{...FONTS.font,...FONTS.fontBold,color:colors.text,fontSize:13}}>Reply</Text>
                                                    </TouchableOpacity>
                                                    <TouchableOpacity style={{marginRight:15}}>
                                                        <Text style={{...FONTS.font,...FONTS.fontBold,color:colors.text,fontSize:13}}>Send</Text>
                                                    </TouchableOpacity>
                                                </View>
                                            </View>    
                                            <TouchableOpacity
                                                style={{
                                                    height:50,
                                                    width:50,
                                                    alignItems:'center',
                                                    justifyContent:'center',
                                                }}
                                                >
                                                <SvgXml
                                                    height={15}
                                                    width={15}
                                                    stroke={colors.text}
                                                    xml={ICONS.heart}
                                                    />
                                            </TouchableOpacity>
                                        </View>
                                    )
                                })}
                            </View>
                        )
                    })}
                </ScrollView>
            </View>
            
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : ""}
            >
                <View
                    style={{
                        paddingHorizontal:15,
                        paddingVertical:10,
                        borderTopWidth:1,
                        borderColor:colors.borderColor,
                        flexDirection:'row',
                        alignItems:'center',
                    }}
                >
                    <Image
                        style={{
                            height:40,
                            width:40,
                            borderRadius:20,
                            marginRight:8,
                        }}
                        source={IMAGES.user8}
                    />
                    <TextInput
                        style={{
                            ...FONTS.font,
                            color:colors.title,
                            flex:1,
                            height:48,
                        }}
                        placeholder='Add a comment...'
                        placeholderTextColor={colors.text}
                    />
                    <TouchableOpacity
                        style={{
                            height:35,
                            width:35,
                            borderRadius:35,
                            backgroundColor:COLORS.primary,
                            alignItems:'center',
                            justifyContent:'center',
                            paddingRight:2,
                            paddingTop:2,
                        }}
                    >
                        <SvgXml
                            height={16}
                            width={16}
                            stroke={COLORS.white}
                            xml={ICONS.send}
                        />
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};



export default Comments;