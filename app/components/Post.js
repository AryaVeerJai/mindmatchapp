import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View, Pressable, ScrollView } from 'react-native';
import { useNavigation, useTheme } from '@react-navigation/native';
import { List } from 'react-native-paper';
import FeatherIcon from "react-native-vector-icons/Feather";
import RBSheet from 'react-native-raw-bottom-sheet';
import { SvgXml } from 'react-native-svg';
import { FONTS, ICONS, SIZES, COLORS, IMAGES } from '../constants/theme';
import { IconButton } from 'react-native-paper';

const PostData = [
    {
        postTitle : 'Lucas Mokmana',
        location : 'Bangkok, Thailand',
        date : '2m ago',
        postPerson : IMAGES.user1,
        postImage : IMAGES.post1,
        desc : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do sum sit emat 😎😎',
        likes : 221,
        isLike : false,
    },
    {
        postTitle : 'Hendri Lee',
        location : 'Bangkok, Thailand',
        date : '2m ago',
        postPerson : IMAGES.user2,
        postImage : IMAGES.post2,
        likes : 145,
        isLike : false,
    },
    {
        postTitle : 'Lucas Mokmana',
        location : 'Bangkok, Thailand',
        date : '2m ago',
        postPerson : IMAGES.user3,
        postImage : IMAGES.post1,
        desc : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do sum sit emat 😎😎',
        likes : 102,
        isLike : false,
    },
    {
        postTitle : 'Hendri Lee',
        location : 'Bangkok, Thailand',
        date : '2m ago',
        postPerson : IMAGES.user4,
        postImage : IMAGES.post2,
        likes : 420,
        isLike : false,
    },
]

const Post = (props) => {

    const {colors} = useTheme();
    const navigation = useNavigation();

    const refRBSheet = React.useRef();
    const refSuccessSheet = React.useRef();
    const RBSheetReport = React.useRef();

    const [postFilterData, setPostFilterData] = useState(PostData);

    const handleLike = (id) => {

        let temp = postFilterData.map((data,index) => {
            if (id === index) {
                return { ...data, isLike: !data.isLike, likes : !data.isLike ? data.likes + 1 : data.likes - 1 };
            }
            return data;
        });
        setPostFilterData(temp);
    };

    const postOption = () => {
        return(
            <View>
                <List.Item
                    style={{paddingHorizontal:15}}
                    titleStyle={{...FONTS.font,fontSize:16,color:COLORS.danger}}
                    onPress={() => {RBSheetReport.current.open();refRBSheet.current.close()}}
                    title={"Report"}
                    left={() => 
                        <SvgXml
                            style={{
                                marginRight:5,
                            }}
                            height={20}
                            width={20}
                            fill={COLORS.danger}
                            xml={ICONS.info}
                        />
                    }
                />
                <List.Item
                    style={{paddingHorizontal:15}}
                    titleStyle={{...FONTS.font,fontSize:16,color:colors.title}}
                    onPress={() => {}}
                    title={"Share"}
                    left={() => 
                        <SvgXml
                            style={{
                                marginRight:5,
                            }}
                            height={20}
                            width={20}
                            stroke={colors.title}
                            xml={ICONS.share2}
                        />
                    }
                />
            </View>
        )
    }

    const reportData = [
        "It's spam",
        "Nudity or sexual activity",
        "Hate speech or symbols",
        "I just dont't like it",
        "Bullying or harassment",
        "False information",
        "Violence or dangerous organizations",
        "Scam or fraud",
        "Intellectual property violation",
        "Sale of illegal or regulated goods",
        "Suicide or self-injury",
        "Eating disorders",
        "Something else"
    ];

    return (
        <>

            <RBSheet
                ref={refSuccessSheet}
                closeOnDragDown={true}
                height={180}
                openDuration={300}
                customStyles={{
                    wrapper: {
                        backgroundColor: 'rgba(0,0,0,.3)',
                    },
                    container:{
                        backgroundColor:colors.card,
                        borderTopLeftRadius:15,
                        borderTopRightRadius:15,
                    },
                }}
            >
                <View style={{alignItems:'center',paddingTop:25}}>

                    <Image
                        source={IMAGES.check}
                        style={{
                            height:50,
                            width:50,
                            marginBottom:20,
                        }}
                    />
                    <Text style={{...FONTS.h5,color:colors.title}}>Thanks for letting us know</Text>
                </View>
                
            </RBSheet>

            <RBSheet
                ref={refRBSheet}
                closeOnDragDown={true}
                height={170}
                openDuration={300}
                customStyles={{
                    wrapper: {
                        backgroundColor: 'rgba(0,0,0,.3)',
                    },
                    container:{
                        backgroundColor:colors.card,
                        borderTopLeftRadius:15,
                        borderTopRightRadius:15,
                    },
                }}
            >
                {postOption()}
                
            </RBSheet>

            <RBSheet
                ref={RBSheetReport}
                closeOnDragDown={true}
                height={600}
                openDuration={300}
                customStyles={{
                    wrapper: {
                        backgroundColor: 'rgba(0,0,0,.3)',
                    },
                    container:{
                        backgroundColor:colors.card,
                        borderTopLeftRadius:15,
                        borderTopRightRadius:15,
                    },
                }}
            >
                <View style={{alignItems:'center',borderBottomWidth:1,borderColor:colors.borderColor,paddingBottom:8,paddingTop:4}}>
                    <Text style={{...FONTS.h5,color:colors.title}}>Report</Text>
                </View>
                <View style={{padding:15}}>
                    <Text style={{...FONTS.h6,color:colors.title}}>Why are you reporting this post?</Text>
                    <Text style={{...FONTS.fontSm,color:colors.text}}>Your report is anonymous, except if you're reporting an intellectual property infirngement. If someone is in immediate danger, call the local emergency services - don't wait.</Text>
                </View>
                <ScrollView contentContainerStyle={{paddingBottom:20}}>
                    {reportData.map((data,index) => (
                        <List.Item
                            titleStyle={{color:colors.title}}
                            onPress={() => {refSuccessSheet.current.open();RBSheetReport.current.close()}}
                            key={index}
                            title={data}
                        />
                    ))}
                </ScrollView>
            </RBSheet>


            {postFilterData.map((data,index) => {

                return(
                    <View key={index} style={{padding:15}}>
                        <View
                            style={{flexDirection:'row',alignItems:'center',marginBottom:12}}
                        >
                            <Image style={{height:40,width:40,borderRadius:SIZES.radius,resizeMode:'contain'}} source={data.postPerson}/>
                            <View style={{flex:1,paddingLeft:10}}>
                                <Text style={[FONTS.h6,{color:colors.title}]}>{data.postTitle}</Text>
                                <View style={{flexDirection:'row',alignItems:'center'}}>
                                    <FeatherIcon style={{marginRight:4}} name='map-pin' color={colors.text} size={13}/>
                                    <Text style={[FONTS.fontXs,{color:colors.text}]}>{data.location}</Text>
                                    <View style={{height:4,width:4,borderRadius:2,backgroundColor:'#C4C4C4',marginHorizontal:10}}/>
                                    <Text style={[FONTS.fontXs,{color:colors.text}]}>{data.date}</Text>
                                </View>
                            </View>
                            <TouchableOpacity 
                                accessible={true}
                                accessibilityLabel="Share"
                                accessibilityHint="Share this post"
                                onPress={()=> props.sharePost && props.sharePost.current.open()}
                                style={{height:48,width:48,alignItems:'center',justifyContent:'center'}}>
                                <SvgXml height={20} width={20} xml={ICONS.share}/>
                            </TouchableOpacity>
                            <IconButton
                                icon={() => <FeatherIcon name='more-vertical' color={colors.title} size={22}/>}
                                size={30}
                                onPress={()=> refRBSheet.current.open()}
                            />
                        </View>
                        { data.desc &&
                            <View style={{marginBottom:15}}>
                                <Text style={{...FONTS.font,color:colors.title}}>{data.desc}</Text>
                            </View>
                        }
                        <View style={{marginBottom:12}}>
                            <Image style={{width:'100%',height:200,resizeMode:'cover',borderRadius:SIZES.radius}} source={data.postImage}/>
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <Pressable
                                onPress={() => handleLike(index)}
                                style={{
                                    flexDirection:'row',
                                    height:28,
                                    borderRadius:16,
                                    backgroundColor:'rgba(245,111,111,.15)',
                                    alignItems:'center',
                                    paddingHorizontal:12,
                                    marginRight:10,
                                }}
                            >
                                
                                <View
                                    style={{
                                        opacity:data.isLike ? 1 : 0, 
                                    }}
                                >
                                    <SvgXml 
                                        height={18}
                                        width={18}
                                        stroke={COLORS.danger}
                                        fill={COLORS.danger}
                                        xml={ICONS.heart}
                                    />
                                </View>
                                <View
                                    style={{
                                        position:'absolute',
                                        left:12,
                                    }}
                                >
                                    <SvgXml 
                                        height={18}
                                        width={18}
                                        stroke={COLORS.danger}
                                        xml={ICONS.heart}
                                    />
                                </View>
                                <Text style={{...FONTS.font,...FONTS.fontBold,top:-1,marginLeft:5,color:colors.text}}>{data.likes}</Text>
                            </Pressable>
                            <TouchableOpacity
                                onPress={()=> navigation.navigate('Comments')}
                                style={{
                                    flexDirection:'row',
                                    height:28,
                                    borderRadius:16,
                                    backgroundColor:'rgba(112,79,254,.15)',
                                    alignItems:'center',
                                    paddingHorizontal:12,
                                }}
                            >
                                <SvgXml style={{marginRight:6}} fill={COLORS.secondary} xml={ICONS.comment}/>
                                <Text style={{...FONTS.font,...FONTS.fontBold,top:-1,color:colors.text}}>150</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )
            })}
        </>
    );
};




export default Post;