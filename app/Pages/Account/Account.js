import React from 'react';
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import { useNavigation, useTheme } from '@react-navigation/native';
import { SvgXml } from 'react-native-svg';
import AntDesignIcon from "react-native-vector-icons/AntDesign";
import { FONTS, ICONS } from '../../constants/theme';
import Header from '../../layout/Header';

const AccountData = [
    {
        title : 'Personal information',
        navigate : 'PersonalInformation',
    },
    {
        title : 'Language',
        navigate : 'Language',
    },
    {
        title : 'Contacts syncing',
        navigate : 'ContactsSyncing',
    },
    
]

const Account = (props) => {
    const {colors} = useTheme();
    const navigation = useNavigation ();
    return (
        // <SafeAreaView style={{flex:1,backgroundColor:colors.background}}>
        <SafeAreaView style={{flex:1, backgroundColor:'#111828'}}>
            {/* <Header title={'Account'} leftIcon={'back'}/> */}
            <View><TouchableOpacity onPress={()=> navigation.goBack()} ><AntDesignIcon name='arrowleft' style={{marginTop: 20, marginLeft: 15}} size={25}></AntDesignIcon></TouchableOpacity></View>
            <ScrollView contentContainerStyle={{paddingVertical:15}}>
            <View style={{padding: 15}}>
                    <Text style={{fontSize: 30, fontWeight: 'bold'}}>Account</Text>
                    {/* <Text style={{fontSize: 15, fontWeight: 'bold', marginTop: 40}}>General</Text> */}
                </View>
                <View style={{ marginHorizontal: 10, borderRadius: 20, borderWidth: 2, borderColor: '#5e5e5e63'}}>
                <View style={{borderRadius: 18, backgroundColor: '#1D2937',}} >
                {AccountData.map((data,index) => {
                    return(
                        <TouchableOpacity
                            onPress={()=> props.navigation.navigate(data.navigate)}
                            key={index}
                            style={{
                                flexDirection:'row',
                                alignItems:'center',
                                marginHorizontal:15,
                                paddingVertical:12,
                                // borderBottomWidth:1,
                                borderBottomWidth: 0.2,
                                // borderColor:colors.borderColor,
                                borderColor: 'white',
                                borderRadius: 20,
                            }}
                        >
                            {/* <Text style={{...FONTS.font,fontSize:16,fontFamily:'Poppins-Medium',color:colors.title,flex:1}}>{data.title}</Text> */}
                            <Text style={{...FONTS.font,fontSize:16,fontFamily:'Poppins-Medium',color: 'white',flex:1}}>{data.title}</Text>
                            <SvgXml
                                stroke={colors.title}
                                xml={ICONS.right}
                            />
                        </TouchableOpacity>
                    )
                })}
                </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Account;