import React from 'react';
import { 
    SafeAreaView, ScrollView, Text, TouchableOpacity,
} from 'react-native';
import { useTheme } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import FeatherIcon from "react-native-vector-icons/Feather";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Octicons from "react-native-vector-icons/Octicons";
import Ionicons from "react-native-vector-icons/Ionicons";
import { FONTS } from '../../constants/theme';
import Header from '../../layout/Header';
import { removeUser } from '../../Redux/reducer/user';
import Auth from '../../Service/Auth';

const SettingsData = [
    {
        title : 'Profile Layout',
        icon  : 'layout',
        navigate : 'ProfileLayout',
    },
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
    {
        title : 'About',
        icon  : 'info',
        navigate : 'About',
    },
    {
        title : 'Theme',
        icon  : 'color-palette-outline',
        navigate : 'theme',
    },
    {
        title : 'Log out',
        icon  : 'logout',
        action : 'logout',
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
    
    return (
        <SafeAreaView style={{flex:1,backgroundColor:colors.background}}>
            <Header title={'Settings'} leftIcon={'back'}/>
            <ScrollView contentContainerStyle={{paddingVertical:15}}>
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
                                borderBottomWidth:1,
                                borderColor:colors.borderColor,
                            }}
                        >
                            {data.icon === "logout" ?
                                <MaterialIcons style={{marginRight:10}} name={data.icon} color={colors.title} size={21}/>
                                :
                            data.icon === "shield-check" ?
                                <Octicons style={{marginRight:10}} name={data.icon} color={colors.title} size={20}/>    
                                :   
                            data.icon === "color-palette-outline" ?
                                <Ionicons style={{marginRight:10}} name={data.icon} color={colors.title} size={20}/>    
                                :   
                                <FeatherIcon style={{marginRight:10}} name={data.icon} color={colors.title} size={20}/>
                            }

                            <Text style={{...FONTS.font,fontSize:16,fontFamily:'Poppins-Medium',color:colors.title,flex:1}}>{data.title}</Text>
                         
                            <FeatherIcon name='chevron-right' color={colors.title} size={24}/>
                        </TouchableOpacity>
                    )
                })}
            </ScrollView>
        </SafeAreaView>
    );
};



export default Settings;