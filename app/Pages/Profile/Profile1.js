import React, { useState } from "react";
import { 
    Image,
    Modal,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { SvgXml } from "react-native-svg";
import { List } from 'react-native-paper';
import RBSheet from "react-native-raw-bottom-sheet";
import { useFocusEffect, useNavigation, useTheme } from "@react-navigation/native";
import Ripple from 'react-native-material-ripple';
// import ImageViewer from 'react-native-image-zoom-viewer';
import { GlobalStyleSheet } from "../../constants/StyleSheet";
import { COLORS, FONTS, ICONS, IMAGES, SIZES } from "../../constants/theme";
import Header from "../../layout/Header";
import Auth from "../../Service/Auth";

const postImages = [
    {
        url: '',
        props : {
            source : IMAGES.post3
        }
    },
    {
        url: '',
        props : {
            source : IMAGES.post4
        }
    },
    {
        url: '',
        props : {
            source : IMAGES.post5
        }
    },
    {
        url: '',
        props : {
            source : IMAGES.post6
        }
    },
    {
        url: '',
        props : {
            source : IMAGES.post2
        }
    },
    {
        url: '',
        props : {
            source : IMAGES.post3
        }
    },
    {
        url: '',
        props : {
            source : IMAGES.post4
        }
    },
    {
        url: '',
        props : {
            source : IMAGES.post5
        }
    },
]


const Profile1 = () => {
    
    const {colors} = useTheme();
    const navigation = useNavigation();
    const refRBSheet = React.useRef();
    const RBSheetReport = React.useRef();
    const refSuccessSheet = React.useRef();
    
    const [postModal , setPostModal] = useState(false);
    const [postView , setPostView] = useState('grid');
    const [postIndex , setPostIndex] = useState(0);
    const [email , setEmail] = useState('');
    const [name , setName] = useState('');
    const [imgUrl, setImageUrl] = useState(null);  

    // useEffect(() => {
    //     getUser();
    // },[]);

    useFocusEffect(
        React.useCallback(() => {
            getUser();
          return () => {};
        }, [])
    );

    const getUser = async () => {
      let data = await Auth.getAccount();
        setEmail(data.emailId);
        setName(data.name);
        setImageUrl(data.img);
    }

    //console.log(imgUrl);

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


    return(
        <SafeAreaView style={{flex:1}}>

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


            <LinearGradient
                style={{flex:1}}
                colors={colors.bgGradient}
            >
                <Header title="Profile" rightIcon={'settings'} />
                <ScrollView contentContainerStyle={{flexGrow:1}}>
                    <View style={GlobalStyleSheet.container}>
                        <View style={{marginBottom:15,flexDirection:'row',alignItems:'center'}}>
                            <View style={{flex:1}}>
                                <Text style={[FONTS.font,{marginBottom:2,color:colors.text}]}>{email}</Text>
                                <Text style={[FONTS.h4,{marginBottom:2,color:colors.title}]}>{name}</Text>
                                <Text style={[FONTS.font,{fontSize:16,color:COLORS.primary}]}>Photographer</Text>
                            </View>
                            <View>
                                <TouchableOpacity
                                    onPress={()=> navigation.navigate('EditProfile')}
                                    activeOpacity={.9}
                                    style={{
                                        height:35,
                                        width:35,
                                        borderRadius:10,
                                        backgroundColor:COLORS.primary,
                                        position:'absolute',
                                        zIndex:1,
                                        bottom:-4,
                                        left:-4,
                                        alignItems:'center',
                                        justifyContent:'center',
                                        shadowColor: COLORS.primary,
                                        shadowOffset: {
                                            width: 0,
                                            height: 5,
                                        },
                                        shadowOpacity: 0.34,
                                        shadowRadius: 6.27,

                                        elevation: 10,
                                    }}
                                >
                                    <SvgXml height={16} width={16} fill={COLORS.white} xml={ICONS.edit}/>
                                </TouchableOpacity>
                                <LinearGradient
                                    colors={['#FE9063', '#704FFE']}
                                    style={{
                                        height:100,
                                        width:100,
                                        borderRadius:30,
                                        padding:2,
                                    }}
                                >
                                    <View style={{padding:6,backgroundColor:colors.background,borderRadius:30}}>
                                        <Image
                                            style={{
                                                height:'100%',
                                                width:'100%',
                                                borderRadius:22,
                                            }}
                                            source={imgUrl ? {uri : imgUrl} : IMAGES.user}
                                        />
                                    </View>
                                </LinearGradient>
                            </View>
                        </View>
                        <Text style={[FONTS.h6,{color:colors.title}]}>About me</Text>
                        <Text style={[FONTS.font,{color:colors.text}]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do sum sit ematons ectetur adipiscing elit, sed do sum sit emat</Text>
                    </View>
                    <View style={{
                        backgroundColor:COLORS.secondary,
                        marginHorizontal:15,
                        borderRadius:SIZES.radius,
                        flexDirection:'row',
                        marginBottom:-30,
                        zIndex:1,
                    }}>
                        <Ripple style={[styles.tabItem,{backgroundColor:'#5231E2'}]}>
                            <Text style={[FONTS.h4,{color:COLORS.white,lineHeight:26,marginBottom:2}]}>52</Text>
                            <Text style={[FONTS.font,{color:COLORS.white,lineHeight:16}]}>Post</Text>
                            <View
                                style={{
                                    height:5,
                                    width:40,
                                    borderRadius:4,
                                    position:'absolute',
                                    bottom:-1,
                                    backgroundColor:'rgba(255,255,255,.4)',
                                }}
                            />
                        </Ripple>
                        <Ripple onPress={()=> navigation.navigate('ProfileFollow')} style={styles.tabItem}>
                            <Text style={[FONTS.h4,{color:COLORS.white,lineHeight:26,marginBottom:2}]}>250</Text>
                            <Text style={[FONTS.font,{color:COLORS.white,lineHeight:16}]}>Following</Text>
                        </Ripple>
                        <Ripple onPress={()=> navigation.navigate('ProfileFollow')} style={styles.tabItem}>
                            <Text style={[FONTS.h4,{color:COLORS.white,lineHeight:26,marginBottom:2}]}>4.5k</Text>
                            <Text style={[FONTS.font,{color:COLORS.white,lineHeight:16}]}>Followers</Text>
                        </Ripple>
                    </View>

                    <View style={[GlobalStyleSheet.container,
                        {
                            backgroundColor:colors.card,
                            flex:1,
                            borderTopLeftRadius:26,
                            borderTopRightRadius:26,
                            paddingBottom:80,
                            paddingTop:40,
                        }
                    ]}>
                        <View style={{flexDirection:'row',alignItems:'center',marginBottom:5}}>
                            <Text style={[FONTS.h6,{flex:1,color:colors.title}]}>My Posts</Text>

                            <Ripple
                                onPress={() => setPostView('grid')}
                                style={{
                                    height:50,
                                    width:50,
                                    alignItems:'center',
                                    justifyContent:'center',
                                    opacity : postView === "grid" ? 1 : .5,
                                }}
                            >
                                <SvgXml
                                    xml={ICONS.grid}
                                />
                            </Ripple>

                            <Ripple
                                onPress={() => setPostView('list')}
                                style={{
                                    height:50,
                                    width:50,
                                    alignItems:'center',
                                    justifyContent:'center',
                                    opacity : postView === "list" ? 1 : .5,
                                }}
                            >
                                <SvgXml
                                    xml={ICONS.list}
                                />
                            </Ripple>

                        </View>
                        
                        <View style={{flexDirection:'row',flexWrap:'wrap'}}>
                            {postImages.map((data,index) => {
                                return(
                                    <View
                                        key={index}
                                        style={[{
                                            width:(SIZES.width - 30) / 3,
                                            height:(SIZES.width - 30) / 3,
                                            marginBottom:6,
                                        },postView === 'list' && {
                                            width:'100%',
                                            height: 250,
                                            marginBottom:10,
                                        }]}
                                    >
                                        <TouchableOpacity 
                                            onLongPress={() => refRBSheet.current.open()}
                                            onPress={()=> {setPostIndex(index);setPostModal(true)}}
                                            style={{
                                                marginHorizontal:3,
                                            }}
                                        >
                                            <Image
                                                style={{
                                                    width:'100%',
                                                    height:'100%',
                                                    borderRadius:SIZES.radius,
                                                }}
                                                source={data.props.source}
                                            />
                                        </TouchableOpacity>
                                    </View>
                                )
                            })}
                        </View>

                        
                        {/* <Modal visible={postModal} transparent={true}>
                            <SafeAreaView style={{flex:1}}>
                                <ImageViewer
                                    index={postIndex}
                                    imageUrls={postImages}
                                    enableSwipeDown={true}
                                    onSwipeDown={()=> setPostModal(false)}
                                    renderHeader={()=>(
                                        <View style={{alignItems:'flex-end'}}>
                                            <TouchableOpacity 
                                                style={{
                                                    height:50,
                                                    width:50,
                                                    alignItems:'center',
                                                    justifyContent:'center',
                                                }}
                                                onPress={()=> setPostModal(false)}>
                                                <SvgXml stroke={COLORS.white} xml={ICONS.close}/>
                                            </TouchableOpacity>    
                                        </View>
                                    )}
                                />
                            </SafeAreaView>
                        </Modal> */}


                    </View>

                </ScrollView>
            </LinearGradient>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    tabItem:{
        flex:1,
        alignItems:'center',
        paddingHorizontal:10,
        paddingVertical:8,
        borderRadius:SIZES.radius,
    }
})

export default Profile1;