import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation, useTheme } from '@react-navigation/native';
import { List } from 'react-native-paper';
import RBSheet from 'react-native-raw-bottom-sheet';
import { SvgXml } from 'react-native-svg';
import { COLORS, FONTS, ICONS, IMAGES } from '../constants/theme';

const SearchContent = (props) => {
    const {colors} = useTheme();
    const navigation = useNavigation();

    const refRBSheet = React.useRef();
    const RBSheetReport = React.useRef();
    const refSuccessSheet = React.useRef();

    const searchData = [
        {
            id : 0,
            images : [
                IMAGES.post1,
                IMAGES.post2,
                IMAGES.post3,
                IMAGES.post4,
                IMAGES.post5,
            ]
        },
        {
            id : 1,
            images : [
                IMAGES.post6,
                IMAGES.post7,
                IMAGES.post8,
                IMAGES.post9,
                IMAGES.post10,
            ]
        },
        {
            id : 2,
            images : [
                IMAGES.post11,
                IMAGES.post12,
                IMAGES.post1,
                IMAGES.post2,
                IMAGES.post3,
            ]
        },
        {
            id : 3,
            images : [
                IMAGES.post4,
                IMAGES.post5,
                IMAGES.post6,
                IMAGES.post7,
                IMAGES.post8,
            ]
        },
    ]


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
                                top:6,
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
                                top:6,
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

            <View style={{flexDirection:'row',flexWrap:'wrap'}}>

                {searchData.map((data,index) => {
                    return(
                        <View
                            key={index}
                            style={{
                                flexDirection:'row',
                            }}
                        >
                            {index % 2 === 0 ?
                                <>
                                    <View style={{flexDirection:'row',flexWrap:'wrap',width:'66.67%'}}>
                                        {data.images.splice(0 , 4).map((data,index) => {
                                            return(
                                                <TouchableOpacity 
                                                    delayPressIn={100}
                                                    onPress={()=> navigation.navigate('Explore')}
                                                    onLongPress={() => refRBSheet.current.open()}
                                                    //onPressIn={()=> props.data(data)}
                                                    //onPressOut={()=> props.data(null)}
                                                    style={{
                                                        width:'50%',
                                                        height:120,
                                                        paddingHorizontal:1,
                                                        marginBottom:2,
                                                    }}
                                                    key={index}
                                                >
                                                    <Image
                                                        style={{
                                                            height:'100%',
                                                            width:'100%',
                                                        }}
                                                        source={data}
                                                    />
                                                </TouchableOpacity>
                                            )
                                        })}
                                    </View>
                                    <TouchableOpacity
                                        delayPressIn={100}
                                        onPress={()=> navigation.navigate('Explore')}
                                        onLongPress={() => refRBSheet.current.open()}
                                        //onPressIn={()=> props.data(data.images[0])}
                                        //onPressOut={()=> props.data(null)}
                                        style={{
                                            height:242,
                                            width:'33.33%',
                                            marginBottom:2,
                                            paddingHorizontal:1,
                                        }}
                                    >
                                        <Image
                                            style={{
                                                height:'100%',
                                                width:'100%',
                                            }}
                                            source={data.images[0]}
                                            />
                                    </TouchableOpacity>
                                </>
                                :
                                <>
                                    <TouchableOpacity
                                        delayPressIn={100}
                                        onPress={()=> navigation.navigate('Explore')}
                                        onLongPress={() => refRBSheet.current.open()}
                                        //onPressIn={()=> props.data(data.images[0])}
                                        //onPressOut={()=> props.data(null)}
                                        style={{
                                            height:242,
                                            width:'33.33%',
                                            paddingHorizontal:1,
                                        }}
                                    >
                                        <Image
                                            style={{
                                                height:'100%',
                                                width:'100%',
                                            }}
                                            source={data.images[4]}
                                            />
                                    </TouchableOpacity>
                                    <View style={{flexDirection:'row',flexWrap:'wrap',width:'66.67%'}}>
                                        {data.images.splice(0 , 4).map((data,index) => {
                                            return(
                                                <TouchableOpacity 
                                                    delayPressIn={100}
                                                    onPress={()=> navigation.navigate('Explore')}
                                                    onLongPress={() => refRBSheet.current.open()}
                                                    //onPressIn={()=> props.data(data)}
                                                    //onPressOut={()=> props.data(null)}
                                                    style={{
                                                        width:'50%',
                                                        height:120,
                                                        paddingHorizontal:1,
                                                        marginBottom:2,
                                                    }}
                                                    key={index}
                                                >
                                                    <Image
                                                        style={{
                                                            height:'100%',
                                                            width:'100%',
                                                        }}
                                                        source={data}
                                                    />
                                                </TouchableOpacity>
                                            )
                                        })}
                                    </View>
                                </>
                            }
                        </View>
                    )
                })}
            </View>
        </>
    );
};


export default SearchContent;