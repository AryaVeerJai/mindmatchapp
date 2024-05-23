import React, { useEffect, useRef, useState } from 'react';
import { 
    Animated,
    Image,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    Dimensions,
    ScrollView,
    SafeAreaView,
    KeyboardAvoidingView,
    Platform,
} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import { ListItem } from '@react-native-material/core';
import { SvgXml } from 'react-native-svg';
import LikeBtn from '../../components/LikeBtn';
import { COLORS, FONTS, ICONS, IMAGES } from '../../constants/theme';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const Status = ({route,navigation}) => {

    const {name} = route.params;
    const {image} = route.params;
    const {statusData} = route.params;

    const refRBSheet = React.useRef();
    const RBSheetReport = React.useRef();
    const refSuccessSheet = React.useRef();

    const [current, setCurrent] = useState({data: statusData[0], index: 0});

    useEffect(() => {
        const timer = setTimeout(() => {
        if(current.index === statusData.length - 1) {
            return navigation.goBack();
        }
        setCurrent({
            ...current,
            index: current.index + 1,
            data: statusData[current.index + 1]
        });
        // clearInterval(timer);
        }, 3000);
        return () => clearTimeout(timer);

    }, [current]);


    const ProgressView = (props) => {
        const progressAnim = useRef(new Animated.Value(0)).current

        useEffect(() => {
            Animated.timing(
            progressAnim,
            {
                toValue: (width - 40) / statusData.length,
                duration: 3000,
                useNativeDriver: false
            }
            ).start();

        }, [progressAnim]);

        return (
            <Animated.Text style={{backgroundColor: '#fff', width: progressAnim}}>
            </Animated.Text>
        )
    }

    //console.log(statusData);


    const postOption = () => {
        return(
            <View>
                <ListItem
                    onPress={() => {RBSheetReport.current.open();refRBSheet.current.close()}}
                    leading={
                        <SvgXml
                            style={{
                                bottom:-2,
                            }}
                            height={20}
                            width={20}
                            fill={COLORS.danger}
                            xml={ICONS.info}
                        />
                    }
                    title={<Text style={{color:COLORS.danger}}>Report</Text>}
                />
                <ListItem
                    leading={
                        <SvgXml
                            height={20}
                            width={20}
                            stroke={COLORS.title}
                            xml={ICONS.share2}
                        />
                    }
                    title="Share"
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
        <SafeAreaView style={{flex:1,backgroundColor:'#000'}}>

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
                        backgroundColor:COLORS.white,
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
                    <Text style={{...FONTS.h5}}>Thanks for letting us know</Text>
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
                        backgroundColor:COLORS.white,
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
                        backgroundColor:COLORS.white,
                        borderTopLeftRadius:15,
                        borderTopRightRadius:15,
                    },
                }}
            >
                <View style={{alignItems:'center',borderBottomWidth:1,borderColor:COLORS.borderColor,paddingBottom:8,paddingTop:4}}>
                    <Text style={{...FONTS.h5}}>Report</Text>
                </View>
                <View style={{padding:15}}>
                    <Text style={{...FONTS.h6}}>Why are you reporting this post?</Text>
                    <Text style={{...FONTS.fontSm}}>Your report is anonymous, except if you're reporting an intellectual property infirngement. If someone is in immediate danger, call the local emergency services - don't wait.</Text>
                </View>
                <ScrollView contentContainerStyle={{paddingBottom:20}}>
                    {reportData.map((data,index) => (
                        <ListItem
                            onPress={() => {refSuccessSheet.current.open();RBSheetReport.current.close()}}
                            key={index}
                            title={data}
                        />
                    ))}
                </ScrollView>
            </RBSheet> 
           
            <View style={styles.statusTabContainer}>
                {statusData.map((item, index) => (
                    <View
                        key={index}
                        style={[
                            styles.statusTab,
                            {
                            marginHorizontal: 2,
                            backgroundColor: 'rgba(255,255,255,.2)',
                            },
                        ]}
                    >
                        {/* <Text style={{width: '50%', backgroundColor: 'green'}}></Text> */}
                        {current.index === index ? <ProgressView />: null}
                    </View>
                ))}
            </View>
            
            <View
                style={{flexDirection:'row',alignItems:'center',paddingHorizontal:15}}
            >
                <Image
                    style={{
                        height:40,
                        width:40,
                        borderRadius:20,
                        marginRight:10,
                    }}
                    source={image}
                />
                <Text style={{...FONTS.font,color:COLORS.white,flex:1}}>{name}</Text>
                <TouchableOpacity
                    onPress={()=> refRBSheet.current.open()}
                    style={{
                        height:50,
                        width:50,
                        alignItems:'center',
                        justifyContent:'center',
                        position:'relative',
                        zIndex:2,
                    }}
                >
                    <SvgXml
                        stroke={COLORS.white}
                        xml={ICONS.more}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={()=> navigation.goBack()}
                    style={{
                        height:50,
                        width:50,
                        alignItems:'center',
                        justifyContent:'center',
                        zIndex:2,
                    }}
                >
                    <SvgXml
                        stroke={COLORS.white}
                        xml={ICONS.close}
                    />
                </TouchableOpacity>
            </View>


            <View style={styles.imageContainer}>
                <Image
                    source={current.data}
                    resizeMode="contain"
                    style={styles.imageStyle}
                />
            </View>

            <TouchableOpacity
                onPress={() => {
                if (current.index === 0) {
                    return navigation.goBack()
                }
                setCurrent({
                    ...current,
                    index: current.index - 1,
                    data: statusData[current.index - 1],
                });
                }}
                style={[styles.controller]}>
                {/* <Text>left</Text> */}
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {
                if (current.index === statusData.length - 1) {
                    return navigation.goBack()
                }
                setCurrent({
                    ...current,
                    index: current.index + 1,
                    data: statusData[current.index + 1],
                });
                }}
                style={[styles.controller, {right: 0}]}>
                {/* <Text>right</Text> */}
            </TouchableOpacity>


            

            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : ""}
            >
                <View style={{flexDirection:'row',padding:15,alignItems:'center',position:'absolute',bottom:0}}>
                    <TextInput
                        style={{
                            ...FONTS.font,
                            color:COLORS.white,
                            height:45,
                            borderWidth:1,
                            flex:1,
                            borderRadius:25,
                            borderColor:'rgba(255,255,255,.6)',
                            paddingHorizontal:15,
                            marginRight:10,
                        }}
                        placeholder='Send message'
                        placeholderTextColor={COLORS.white}
                    /> 

                    <LikeBtn/>
                    
                    <TouchableOpacity
                        style={{
                            height:50,
                            width:50,
                            alignItems:'center',
                            justifyContent:'center',
                        }}
                    >
                        <SvgXml
                            stroke={COLORS.white}
                            xml={ICONS.send}
                        />
                    </TouchableOpacity>

                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};



const styles = StyleSheet.create({
    
    statusTabContainer: {
      flexDirection: 'row',
      width: '100%',
      paddingHorizontal:12,
      paddingBottom:10,
      paddingTop:10,
    },
    statusTab: {
      height: 2,
      // backgroundColor: '#fff',
      backgroundColor: 'rgba(255,255,255,.2)',
      flex: 1
    },
    controller: {
      position: 'absolute',
      width: width /2,
      zIndex:-1,
      height: height * 0.90,
      bottom: 0
    },
    imageContainer: {
        flex: 1,
        paddingBottom:80,
        justifyContent:'center',
        minHeight:600,
        zIndex:-2,
    },
    imageStyle: {
      width: '100%',
      height: height / 1.2,
      maxHeight: height / 1.2,
    }
  });


export default Status;