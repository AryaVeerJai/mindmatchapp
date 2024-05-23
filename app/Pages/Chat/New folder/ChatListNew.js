import React,{useState, useEffect} from "react";
import { 
    ActivityIndicator,
    Image,
    SafeAreaView,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { useTheme } from "@react-navigation/native";
import { List } from 'react-native-paper';
import LinearGradient from "react-native-linear-gradient";
import { SvgXml } from "react-native-svg";
import database from '@react-native-firebase/database';
import { useSelector } from "react-redux";
import Ripple from "react-native-material-ripple";
import RBSheet from "react-native-raw-bottom-sheet";
import { COLORS, FONTS, ICONS, IMAGES, SIZES } from "../../constants/theme";
import Header from "../../layout/Header";

const chatData = [
    {
        id : '1',
        personImage : IMAGES.user1,
        name : 'Lucas Mokmana',
        message : 'Hey bro, let’s meetup at centre point corner',
        date : '2m ago',
        active : true,
        messageSeen : true,
        messageSent : true,
    },
    {
        id : '2',
        personImage : IMAGES.user2,
        name : 'Emilia Green',
        message : 'Can you share your current location now sis',
        date : '2m ago',
        active : true,
        messageSeen : false,
        messageSent : true,
    },
    {
        id : '3',
        personImage : IMAGES.user3,
        name : 'Richard Sigh',
        message : 'Cmon dude! make it fast, let’s go',
        date : '2m ago',
        messageReceivedSeen : false,
    },
    {
        id : '4',
        personImage : IMAGES.user4,
        name : 'Hendri Lee',
        message : 'Did you tell him about your new car?',
        date : '2m ago',
        messageSeen : true,
        messageSent : true,
    },
    {
        id : '5',
        personImage : IMAGES.user5,
        name : 'Lucas Mokmana',
        message : 'Hey bro, let’s meetup at centre point corner',
        date : '2m ago',
        active : true,
        messageSeen : true,
        messageSent : true,
    },
    {
        id : '6',
        personImage : IMAGES.user6,
        name : 'Emilia Green',
        message : 'Can you share your current location now sis',
        date : '2m ago',
        active : true,
        messageSeen : false,
        messageSent : true,
    },
    {
        id : '7',
        personImage : IMAGES.user7,
        name : 'Richard Sigh',
        message : 'Cmon dude! make it fast, let’s go',
        date : '2m ago',
        messageReceivedSeen : false,
    },
    {
        id : '8',
        personImage : IMAGES.user8,
        name : 'Hendri Lee',
        message : 'Did you tell him about your new car?',
        date : '2m ago',
        messageSeen : true,
        messageSent : true,
    },
    {
        id : '9',
        personImage : IMAGES.user6,
        name : 'Emilia Green',
        message : 'Can you share your current location now sis',
        date : '2m ago',
        active : true,
        messageSeen : false,
        messageSent : true,
    },
    {
        id : '10',
        personImage : IMAGES.user7,
        name : 'Richard Sigh',
        message : 'Cmon dude! make it fast, let’s go',
        date : '2m ago',
        messageReceivedSeen : false,
    },
    {
        id : '11',
        personImage : IMAGES.user8,
        name : 'Hendri Lee',
        message : 'Did you tell him about your new car?',
        date : '2m ago',
        messageSeen : true,
        messageSent : true,
    },
]

const ChatList = (props) => {

    const {colors} = useTheme();
    const refRBSheet = React.useRef();
    const {userData} = useSelector(state => state.User);

    const [search , setSearch] = useState('');
    const [chatList, setchatList] = useState([]);
    const [allUserBackup, setallUserBackup] = useState([]);
    const [loading, setLoading] = useState(true);
    const [removeUser, setRemoveUser] = useState('');

    

    useEffect(() => {
        console.log(loading);
        getChatlist();
    }, []);

    const getChatlist = async () => {
        database()
        .ref('/chatlist/'+userData?.id)
        .on('value', snapshot => {
            // console.log('User data: ', Object.values(snapshot.val()));
            setLoading(false);
            if (snapshot.val() != null) {
                //console.log('d');
                setchatList(Object.values(snapshot.val()))
                setallUserBackup(
                    Object.values(snapshot.val()).filter(it => it.id != userData.id),
                );
            }else{
                setchatList([]);
            }
        });
    
    }

    const searchuser = val => {
        setSearch(val);
        setchatList(allUserBackup.filter(it => it.name.match(val)));
    };

    //console.log('----------------', chatList);

    const chatUserRemove = async () => {
        console.log(removeUser);
        await database().ref('/chatlist/' + userData.id + '/' + removeUser).remove();
        await database().ref('/chatlist/' + removeUser + '/' + userData.id).remove();
    }

    const postOption = () => {
        return(
            <View>
                <List.Item
                    style={{paddingHorizontal:15}}
                    titleStyle={{...FONTS.font,fontSize:16,color:COLORS.danger}}
                    onPress={() => {chatUserRemove();refRBSheet.current.close()}}
                    title={"Delete"}
                    left={() => 
                        <SvgXml
                            style={{
                                marginRight:5,
                            }}
                            height={20}
                            width={20}
                            stroke={COLORS.danger}
                            xml={ICONS.delete}
                        />
                    }
                />
            </View>
        )
    }

    
    return(
        <SafeAreaView style={{flex:1}}>
            
            <RBSheet    
                ref={refRBSheet}
                closeOnDragDown={true}
                height={120}
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

            <Ripple
                accessible={true}
                accessibilityLabel="Chat"
                accessibilityHint="add user to chat"
                onPress={()=> props.navigation.navigate('NewChat')}
                style={{
                    position:'absolute',
                    height:55,
                    width:55,
                    backgroundColor:COLORS.primary,
                    zIndex:1,
                    bottom:70,
                    right:10,
                    alignItems:'center',
                    justifyContent:'center',
                    borderRadius:50,
                }}
            >   
                <SvgXml
                    height={25}
                    width={25}
                    fill={COLORS.white}
                    xml={ICONS.messages}
                />
            </Ripple>

            <LinearGradient
                style={{flex:1}}
                colors={colors.bgGradient}
            >
                <Header title="Chat" rightIcon={'notification'}/>
                <ScrollView contentContainerStyle={{paddingBottom:80}}>
                    <View style={{paddingHorizontal:15,paddingTop:15}}>
                        <View>
                            <TouchableOpacity
                                style={{
                                    height:50,
                                    width:50,
                                    position:'absolute',
                                    zIndex:1,
                                    right:0,
                                    top:-1,
                                    alignItems:'center',
                                    justifyContent:'center',
                                }}
                            >
                                <SvgXml xml={ICONS.searchLight}/>
                            </TouchableOpacity>
                            <TextInput 
                                style={{
                                    height:50,
                                    backgroundColor:colors.card,
                                    borderWidth:1,
                                    borderColor:colors.borderColor,
                                    borderRadius:SIZES.radius,
                                    color:colors.title,
                                    paddingLeft:15,
                                }}
                                onChangeText={val => searchuser(val)}
                                value={search}
                                placeholder="Search.."
                                placeholderTextColor={colors.text}
                            />
                        </View>
                    </View>
                    
                    {loading && 
                        <View style={{flex:1,alignItems:'center',justifyContent:'center',padding:20}}>
                            <ActivityIndicator size={'large'} color={COLORS.primary}/>
                        </View>
                    }

                    {chatList.length == 0 ?
                        <View style={{alignItems:'center'}}>
                            <Text style={{...FONTS.h5,marginTop:20,marginBottom:5,color:colors.title}}>Message your friends</Text>
                            <TouchableOpacity onPress={()=> props.navigation.navigate('NewChat')}><Text style={{...FONTS.font,color:COLORS.primary}}>Send a message</Text></TouchableOpacity>
                        </View>
                        :
                        null
                    }

                    {chatList.map((data,index) => {
                        return(
                            <TouchableOpacity 
                                onLongPress={() => {setRemoveUser(data.id);refRBSheet.current.open()}}
                                onPress={()=> {
                                    props.navigation.navigate('ChatScreen',{data : data})
                                }}
                                key={index}
                                style={{
                                    flexDirection:'row',
                                    paddingHorizontal:15,
                                    paddingVertical:12,
                                    borderBottomWidth:1,
                                    alignItems:'center',
                                    borderColor:colors.borderColor,
                                }}
                            >
                                <View>
                                    <Image
                                        style={{
                                            height:50,
                                            width:50,
                                            borderRadius:50,
                                        }}
                                        source={data.img ? {uri:data.img} : IMAGES.user}
                                    />
                                </View>
                                <View style={{flex:1,paddingLeft:10,paddingRight:15}}>
                                    <Text style={[FONTS.h6,{marginBottom:2,color:colors.title}]}>{data.name}</Text>
                                    {data.lastMsg
                                        ?
                                        <Text numberOfLines={1} style={[FONTS.fontXs,{color:colors.text}]}>{data.lastMsg}</Text>
                                        :
                                        null
                                    }
                                </View>
                                {/* <View style={{alignItems:'flex-end'}}>
                                    <Text style={{...FONTS.fontXs,color:COLORS.textLight}}>{data.sendTime}</Text>
                                </View> */}
                            </TouchableOpacity>
                        )
                    })}

                    
                    {/* {chatData.map((data,index) => {
                        return(
                            <TouchableOpacity 
                                //onPress={()=> props.navigation.navigate('ChatScreen')}
                                //onPress={()=> createChatList(data)}
                                key={index}
                                style={{
                                    flexDirection:'row',
                                    paddingHorizontal:15,
                                    paddingVertical:12,
                                    borderBottomWidth:1,
                                    borderColor:COLORS.borderColor,
                                }}
                            >
                                <View>
                                    {data.active && 
                                        <View
                                            style={{
                                                height:16,
                                                width:16,
                                                borderRadius:9,
                                                backgroundColor:COLORS.success,
                                                position:'absolute',
                                                zIndex:1,
                                                bottom:-2,
                                                left:-2,
                                                borderWidth:2,
                                                borderColor:'#FEF6F0',
                                            }}
                                        />
                                    }
                                    <Image
                                        style={{
                                            height:50,
                                            width:50,
                                            borderRadius:SIZES.radius,
                                        }}
                                        source={data.personImage ? data.personImage : IMAGES.user}
                                    />
                                </View>
                                <View style={{flex:1,paddingLeft:10,paddingRight:15}}>
                                    <View style={{flexDirection:'row',alignItems:'center'}}>
                                        {data.messageReceivedSeen == false &&
                                            <View
                                                style={{
                                                    height:10,
                                                    width:10,
                                                    borderRadius:5,
                                                    marginRight:5,
                                                    marginBottom:3,
                                                    backgroundColor:COLORS.primary,
                                                }}
                                            />
                                        }
                                        <Text style={[FONTS.h6,{marginBottom:2}]}>{data.name}</Text>
                                    </View>
                                    <Text numberOfLines={1} style={FONTS.fontXs}>{data.message ? data.message : 'Lorem ipsum sit amet is the dummy text'}</Text>
                                </View>
                                <View style={{alignItems:'flex-end'}}>
                                    <Text style={{...FONTS.fontXs,color:COLORS.textLight,marginBottom:8}}>{data.date ? data.date : '2m ago'}</Text>
                                    { data.messageSent &&

                                        <View
                                            style={[{
                                                height:18,
                                                width:18,
                                                borderRadius:12,
                                                borderWidth:1,
                                                borderColor:'#BBB6D0',
                                                alignItems:'center',
                                                justifyContent:'center',
                                            },data.messageSeen === true && {
                                                backgroundColor:COLORS.secondary,
                                                borderColor:COLORS.secondary,
                                            } ]}
                                        >
                                            <SvgXml height={12} width={12} stroke={data.messageSeen ? COLORS.white : '#BBB6D0'} xml={ICONS.check}/>
                                        </View>
                                    }

                                </View>
                            </TouchableOpacity>
                        )
                    })} */}


                </ScrollView>
            </LinearGradient>
        </SafeAreaView>
    )
}

export default ChatList;