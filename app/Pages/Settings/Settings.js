import React from 'react';
import { 
    SafeAreaView, ScrollView, Text, TouchableOpacity, View
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import FeatherIcon from "react-native-vector-icons/Feather";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Octicons from "react-native-vector-icons/Octicons";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesignIcon from "react-native-vector-icons/AntDesign";
import { FONTS } from '../../constants/theme';
import Header from '../../layout/Header';
import { removeUser } from '../../Redux/reducer/user';
import Auth from '../../Service/Auth';
import { white } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';

const SettingsData = [
    // {
    //     title : 'Profile Layout',
    //     icon  : 'layout',
    //     navigate : 'ProfileLayout',
    // },
    {
        title : 'Notification',
        icon  : 'bell',
        navigate : 'PushNotification',
    },
    {
        title : 'Security',
        icon  : 'shield-check',
        navigate : 'Security',
    },
    {
        title : 'Account',
        icon  : 'user',
        navigate : 'Account',
    },
    // {
    //     title : 'About',
    //     icon  : 'info',
    //     navigate : 'About',
    // },
    {
        title : 'Theme',
        icon  : 'color-palette-outline',
        navigate : 'Theme',
    },
    // {
    //     title : 'Log out',
    //     icon  : 'logout',
    //     action : 'logout',
    // },
    
]

const PrivacyTerm = [
    {
        title : 'Privacy Policy',
        icon  : 'layout',
        navigate : 'PrivacyPolicy',
    },
    {
        title : 'Terms and Conditions',
        icon  : 'layout',
        navigate : 'TermsUse',
    },
]


const Settings = (props) => {
    const {colors} = useTheme();
    const dispatch = useDispatch();

    const handleLogout = async () => {
        dispatch(removeUser());
        Auth.logout();
        props.navigation.navigate('Onboarding');
    }
    

    const navigation = useNavigation();
    
    return (
        // <SafeAreaView style={{flex:1,backgroundColor:colors.background}}>
        <SafeAreaView style={{flex:1,backgroundColor:'#111828'}}>
            {/* <Header leftIcon={'back'}/> */}
            <View><TouchableOpacity onPress={()=> navigation.goBack()} ><AntDesignIcon name='arrowleft' style={{marginTop: 20, marginLeft: 15}} size={25}></AntDesignIcon></TouchableOpacity></View>
            <ScrollView contentContainerStyle={{paddingVertical:15}}>
                <View style={{padding: 15}}>
                    <Text style={{fontSize: 30, fontWeight: 'bold'}}>Settings</Text>
                    <Text style={{fontSize: 15, fontWeight: 'bold', marginTop: 40}}>General</Text>
                </View>
                <View style={{ marginHorizontal: 10, borderRadius: 20, borderWidth: 2, borderColor: '#5e5e5e63'}}>
                <View style={{borderRadius: 18, backgroundColor: '#1D2937',}} >
                {SettingsData.map((data,index) => {
                    return(
                        
                        <TouchableOpacity 
                            onPress={()=> data.action ? handleLogout() : props.navigation.navigate(data.navigate)}
                            key={index}
                            style={{
                                flexDirection:'row',
                                alignItems:'center',
                                marginHorizontal:15,
                                paddingVertical:12,
                                borderBottomWidth:0.2,
                                // borderColor:colors.borderColor,
                                borderColor: 'white',
                                // backgroundColor: '#1D2937',
                                // padding: 10,
                                borderRadius: 20,
                            }}
                        >
                            {data.icon === "logout" ?
                                // <MaterialIcons style={{marginRight:10}} name={data.icon} color={colors.title} size={21}/>
                                <MaterialIcons style={{marginRight:10}} name={data.icon} color={'white'} size={21}/>
                                :
                            data.icon === "shield-check" ?
                                <Octicons style={{marginRight:10}} name={data.icon} color={'white'} size={20}/>    
                                :   
                            data.icon === "color-palette-outline" ?
                                <Ionicons style={{marginRight:10}} name={data.icon} color={'white'} size={20}/>    
                                :   
                                <FeatherIcon style={{marginRight:10}} name={data.icon} color={'white'} size={20}/>
                            }

                            {/* <Text style={{...FONTS.font,fontSize:16,fontFamily:'Poppins-Medium',color:colors.title,flex:1}}>{data.title}</Text> */}
                            <Text style={{...FONTS.font,fontSize:16,fontFamily:'Poppins-Medium',color:'white' ,flex:1}}>{data.title}</Text>
                         
                            <FeatherIcon name='chevron-right' color={colors.title} size={24}/>
                        </TouchableOpacity>
                        
                    )
                })}
                </View>
                </View>
                <View style={{padding: 15}}>
                    <Text style={{fontSize: 15, fontWeight: 'bold', marginTop: 20}}>Ploicy and Account Terms</Text>
                </View>
                <View style={{ marginHorizontal: 10, borderRadius: 20, borderWidth: 2, borderColor: '#5e5e5e63'}}>
                <View style={{borderRadius: 18, backgroundColor: '#1D2937',}} >
                {PrivacyTerm.map((data,index) => {
                    return(
                        
                        <TouchableOpacity 
                            onPress={()=> data.action ? handleLogout() : props.navigation.navigate(data.navigate)}
                            key={index}
                            style={{
                                flexDirection:'row',
                                alignItems:'center',
                                marginHorizontal:15,
                                paddingVertical:12,
                                borderBottomWidth:0.2,
                                // borderColor:colors.borderColor,
                                borderColor: 'white',
                                // backgroundColor: '#1D2937',
                                // padding: 10,
                                borderRadius: 20,
                            }}
                        >
                            {data.icon === "logout" ?
                                // <MaterialIcons style={{marginRight:10}} name={data.icon} color={colors.title} size={21}/>
                                <MaterialIcons style={{marginRight:10}} name={data.icon} color={'white'} size={21}/>
                                :
                            data.icon === "shield-check" ?
                                // <Octicons style={{marginRight:10}} name={data.icon} color={colors.title} size={20}/>    
                                <Octicons style={{marginRight:10}} name={data.icon} color={'white'} size={20}/>    
                                :   
                            data.icon === "color-palette-outline" ?
                                // <Ionicons style={{marginRight:10}} name={data.icon} color={colors.title} size={20}/>    
                                <Ionicons style={{marginRight:10}} name={data.icon} color={'white'} size={20}/>    
                                :   
                                // <FeatherIcon style={{marginRight:10}} name={data.icon} color={colors.title} size={20}/>
                                <FeatherIcon style={{marginRight:10}} name={data.icon} color={'white'} size={20}/>
                            }

                            {/* <Text style={{...FONTS.font,fontSize:16,fontFamily:'Poppins-Medium',color:colors.title,flex:1}}>{data.title}</Text> */}
                            <Text style={{...FONTS.font,fontSize:16,fontFamily:'Poppins-Medium',color:'white',flex:1}}>{data.title}</Text>
                         
                            <FeatherIcon name='chevron-right' color={colors.title} size={24}/>
                        </TouchableOpacity>
                        
                    )
                })}
                </View>
                </View>
                <View style={{marginTop: 50, backgroundColor: '#1D2937', borderWidth: 2, borderRadius: 20, marginHorizontal: 10, paddingVertical: 10, paddingHorizontal: 15, borderColor: '#5e5e5e63'}}>
                    <View style={{flexDirection:'row', gap: 10}}>
                        <View>
                            <Octicons name='thumbsup' size={25} style={{marginTop: 10}} />
                        </View>
                        <View>
                            <Text style={{marginBottom: 5, fontSize: 20, fontWeight: 'bold'}}>Leave Feedback</Text>
                            <Text style={{marginBottom: 5}}>Let Us Think What you think of this App</Text>
                        </View>
                    </View>
                </View>
                <View style={{marginTop: 50, backgroundColor: 'blue', borderRadius: 20, marginHorizontal: 10, paddingVertical: 10, paddingHorizontal: 15,}}>
                    <TouchableOpacity
                     onPress={handleLogout}
                     ><Text style={{textAlign: 'center', fontSize: 20, fontWeight: 'bold', color: 'white' }}>Sign Out</Text></TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};



export default Settings;