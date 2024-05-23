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
import LinearGradient from "react-native-linear-gradient";
import { SvgXml } from "react-native-svg";
import database from '@react-native-firebase/database';
import { useSelector } from "react-redux";
import uuid from 'react-native-uuid';
import { COLORS, FONTS, ICONS, IMAGES, SIZES } from "../../constants/theme";
import Header from "../../layout/Header";


const NewChat = (props) => {

    const {colors} = useTheme();
    const {userData} = useSelector(state => state.User);
    const [search , setSearch] = useState('');
    const [allUsers, setAllUsers] = useState([]);
    const [allUserBackup, setallUserBackup] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getAllUser();
    }, []);

    const getAllUser = () => {
        database()
        .ref('users/')
        .once('value')
        .then(snapshot => {
            //console.log('all User data: ', Object.values(snapshot.val()));
            setAllUsers(
                Object.values(snapshot.val()).filter(it => it.id != userData.id),
            );
            setallUserBackup(
                Object.values(snapshot.val()).filter(it => it.id != userData.id),
            );
            setLoading(false);
        });
    };

    const searchuser = val => {
        setSearch(val);
        setAllUsers(allUserBackup.filter(it => it.name.match(val)));
    };


    const createChatList = data => {

        database()
        .ref('/chatlist/' + userData.id + '/' + data.id)
        .once('value')
        .then(snapshot => {

            if (snapshot.val() == null) {
       
                let roomId = uuid.v4();
                let myData = {
                    roomId,
                    id: userData.id,
                    name: userData.name,
                    img: userData.img,
                    emailId: userData.emailId,
                    about: userData.about,
                    tokenId: userData.tokenId,
                    lastMsg: '',
                };
                database()
                .ref('/chatlist/' + data.id + '/' + userData.id)
                .update(myData)
                .then(() => console.log('Data updated.'));

                delete data['password'];
                data.lastMsg = '';
                data.roomId = roomId;
                database()
                .ref('/chatlist/' + userData.id + '/' + data.id)
                .update(data)
                .then(() => console.log('Data updated.'));
                
                props.navigation.navigate("ChatScreen",{data : data})
            }else{
                props.navigation.navigate("ChatScreen",{data : snapshot.val()})
            }
        });

    };


    return(
        <SafeAreaView style={{flex:1}}>
            <LinearGradient
                style={{flex:1}}
                colors={colors.bgGradient}
            >
                <Header title="Chat" leftIcon={'back'}/>
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
                                    borderColor: colors.borderColor,
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

                    
                    {allUsers.map((data,index) => {
                        return(
                            <TouchableOpacity 
                                onPress={()=> createChatList(data)}
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
                                </View>
                            </TouchableOpacity>
                        )
                    })}


                </ScrollView>
            </LinearGradient>
        </SafeAreaView>
    )
}

export default NewChat;