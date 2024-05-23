import React, { useEffect, useState } from 'react';
import { 
    ActivityIndicator, 
    FlatList, 
    Image, 
    KeyboardAvoidingView, 
    Platform, 
    SafeAreaView, 
    Text, 
    TextInput, 
    TouchableOpacity, 
    View 
} from 'react-native';
import { useTheme } from "@react-navigation/native";
import { SvgXml } from 'react-native-svg';
import { useSelector } from 'react-redux';
import moment from 'moment/moment';
import database from '@react-native-firebase/database';
import Toast from 'react-native-simple-toast';
import { IconButton, ListItem } from '@react-native-material/core';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import MsgComponent from '../../components/MsgComponent';
import { COLORS, FONTS, ICONS, IMAGES, SIZES } from '../../constants/theme';
import { sendSingleDeviceNotification } from '../../helper/notification_helper';
import { GlobalStyleSheet } from '../../constants/StyleSheet';


const ChatScreen = ({route,navigation}) => {
    
    const theme = useTheme();
    const {colors} = theme;

    const dropdown = useSharedValue(0);

    const dropdownStyle = useAnimatedStyle(() => {
        return{
            transform : [
                {
                    scale : dropdown.value,
                }
            ]
        }
    })

  

    const {userData} = useSelector(state => state.User);

    const {data} = route.params;

    const [msg , setMsg] = useState('');
    const [disabled , setdisabled] = useState(false);
    const [allChat , setallChat] = useState([]);
    const [loading , setLoading] = useState(true);


    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        },1000);
        const onChildAdd = database()
          .ref('/messages/' + data.roomId)
          .on('child_added', snapshot => {
            //console.log('A new node has been added', snapshot.val());
            
            setallChat((state) => [snapshot.val(),...state])
          });
    
        // Stop listening for updates when no longer required
        return () => database().ref('/messages/' + data.roomId).off('child_added', onChildAdd);
    }, [data.roomId]);


    const msgavalid = txt => txt && txt.replace(/\s/g,'').length;

    const sendMsg = async () => {

        if(msg == "" || msgavalid(msg) == 0){
            Toast.show('Enter something...', Toast.LONG);
            return false;
        }
        setdisabled(true);
        let msgData = {
            roomId : data.roomId,
            message : msg,
            from : userData?.id,
            to : data.id,
            sendTime : moment().format('LLL'),
            msgType : 'text',
        }

        const newReference = database().ref('/messages/' + data.roomId).push();

        //console.log('Auto generated key: ', newReference.key);
        msgData.id = newReference.key;
        newReference
        .set(msgData)
        .then(() => {

            let chatListupdate = {
                lastMsg : msg,
                sendTime : msgData.sendTime,
            }
            database()
            .ref('/chatlist/' + data.id + '/' + userData.id)
            .update(chatListupdate)
            console.log('Data updated.')

            database()
            .ref('/chatlist/' + userData?.id + '/' + data.id)
            .update(chatListupdate)
            console.log('Data updated.')

            setMsg('');
            setdisabled(false);

            
            
        });

        if(Platform.OS === 'android'){
            //for notification
            let notificationData = {
                title: userData.name,
                body: msg,
                token: data.tokenId,
            };
            await sendSingleDeviceNotification(notificationData);
        }
    }

    const sorted = () => {
        return allChat.sort(function(a,b){
            return new Date(b.sendTime) < new Date(a.sendTime) ? -1
                : new Date(b.sendTime) < new Date(a.sendTime) ? 1
                : 0 
        })
    }

    //console.log(dropdown.value);

    return (
        <SafeAreaView
            style={{
                flex:1,
                backgroundColor:colors.card,
            }}
        >
            <View
                style={{
                    backgroundColor:colors.card,
                    flexDirection:'row',
                    alignItems:'center',
                    paddingHorizontal:5,
                    zIndex:1,
                    paddingVertical:5,
                    ...GlobalStyleSheet.shadow,
                }}
            >
                <TouchableOpacity
                    onPress={()=> navigation.goBack()}
                    style={{
                        height:50,
                        width:50,
                        alignItems:'center',
                        justifyContent:'center',
                        marginRight:5,
                    }}
                >
                    <SvgXml
                        stroke={colors.title}
                        xml={ICONS.arrowLeft}
                    />
                </TouchableOpacity>
                <Image
                    style={{
                        height:40,
                        width:40,
                        borderRadius:40,
                        marginRight:12,
                    }}
                    source={data.img ? {uri : data.img} : IMAGES.user}
                />
                <Text style={{...FONTS.h6,flex:1,color:colors.title}}>{data.name}</Text>
                

                <View style={{position:'relative',zIndex:1}}>
                    <IconButton
                        onPress={()=> dropdown.value = dropdown.value == 0 ? withTiming(1) : withTiming(0)}
                        icon={props => <SvgXml stroke={colors.title} xml={ICONS.more}/>} 
                    />
                    
                    <Animated.View
                        style={[dropdownStyle,{
                            position:'absolute',
                            width:120,
                            top:40,
                            right:10,
                            zIndex:-1,
                            backgroundColor:COLORS.white,
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 2,
                            },
                            shadowOpacity: 0.25,
                            shadowRadius: 3.84,

                            elevation: 5,
                        }]}
                    >
                        <ListItem onPress={()=> dropdown.value = withTiming(0)} title="Report" />
                        <ListItem onPress={()=> dropdown.value = withTiming(0)} title="Block" />
                    </Animated.View>
                </View>

            </View>
            <View style={{flex:1,backgroundColor:theme.dark ? COLORS.darkBg : '#eee'}}>
                {loading ?
                    <ActivityIndicator color={COLORS.primary} style={{marginTop:20}} size={'large'}/>
                    :
                    <FlatList
                        contentContainerStyle={{paddingTop:20,paddingBottom:20}}
                        style={{flex: 1}}
                        data={sorted()}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={(item, index) => index}
                        inverted
                        renderItem={({item}) => {
                            return (
                                <MsgComponent
                                    sender={item.from == userData.id}
                                    //sender={item.from == userData.id}
                                    item={item}
                                />
                            );
                        }}
                    />
                }
            </View>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : ""}
            >
                <View
                    style={{
                        backgroundColor:colors.card,
                        paddingHorizontal:10,
                        paddingVertical:10,
                        borderTopLeftRadius:SIZES.radius,
                        borderTopRightRadius:SIZES.radius,
                        flexDirection:'row',
                        alignItems:'center',
                    }}
                >
                    <TextInput
                        style={{
                            ...FONTS.font,
                            height:45,
                            flex:1,
                            color:colors.title,
                            borderRadius:SIZES.radius,
                            backgroundColor:theme.dark ? COLORS.darkBg : '#eee',
                            paddingHorizontal:12,
                        }}
                        //multiline
                        placeholder='Type here..'
                        placeholderTextColor={colors.text}
                        onChangeText={(value) => setMsg(value)}
                        value={msg}
                    />
                    <TouchableOpacity
                        disabled={disabled}
                        onPress={sendMsg}
                        style={{
                            height:45,
                            width:45,
                            borderRadius:45,
                            alignItems:'center',
                            justifyContent:'center',
                            backgroundColor:COLORS.primary,
                            marginLeft:10,
                        }}
                    >
                        <SvgXml
                            style={{
                                top:2,
                                right:2,
                            }}
                            stroke={COLORS.white}
                            xml={ICONS.send}
                        />
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};


export default ChatScreen;