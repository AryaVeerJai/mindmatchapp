import React from 'react';
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { SvgXml } from 'react-native-svg';
import { GlobalStyleSheet } from '../../constants/StyleSheet';
import { COLORS, FONTS, ICONS, SIZES } from '../../constants/theme';
import Header from '../../layout/Header';

const LoginData = [
    {
        location : 'Kota, Rajasthan',
        deviceName : "Nexus 818",
        active : true,
    },
    {
        location : 'Kota, Rajasthan',
        deviceName : "RXCp 005",
        active : "2 days ago",
    },
] 

const LoginActivity = (props) => {
    const {colors} = useTheme();
    return (
        <SafeAreaView style={{flex:1,backgroundColor:colors.background}}>
            <Header title={'Login activity'} leftIcon={'back'} />
            <ScrollView>
                <View style={GlobalStyleSheet.container}>
                    <Text style={{...FONTS.h6,marginBottom:8,color:colors.title}}>Where you're loggged in</Text>
                    {LoginData.map((data,index) => {
                        return(
                            <View
                                key={index}
                                style={{
                                    flexDirection:'row',
                                    alignItems:'center',
                                    paddingVertical:4,
                                }}
                            >
                                <View
                                    style={{
                                        height:35,
                                        width:35,
                                        marginRight:12,
                                        backgroundColor:COLORS.primayLight,
                                        alignItems:'center',
                                        justifyContent:'center',
                                        borderRadius:SIZES.radius,
                                    }}
                                >
                                    <SvgXml
                                        fill={COLORS.primary}
                                        height={18}
                                        width={18}
                                        xml={ICONS.location2}
                                    />
                                </View>
                                <View style={{flex:1}}>
                                    <Text style={{...FONTS.font,...FONTS.fontBold,color:colors.title}}>{data.location}</Text>
                                    <View style={{flexDirection:'row',alignItems:'center'}}>
                                        {data.active === true ?
                                            <Text style={{...FONTS.font,color:COLORS.success}}>Active now</Text>
                                            :
                                            <Text style={{...FONTS.font,color:colors.text}}>{data.active}</Text>
                                        }
                                        <View
                                            style={{
                                                height:3,
                                                top:2,
                                                width:3,
                                                borderRadius:3,
                                                backgroundColor:colors.text,
                                                marginHorizontal:5,
                                            }}
                                        />
                                        <Text style={{...FONTS.font,color:colors.text}}>{data.deviceName}</Text>
                                    </View>
                                </View>
                                <TouchableOpacity
                                    style={{
                                        height:50,
                                        width:50,
                                        alignItems:'center',
                                        justifyContent:'center',
                                    }}
                                >
                                    <SvgXml
                                        fill={COLORS.danger}
                                        height={16}
                                        width={16}
                                        xml={ICONS.logout}
                                    />
                                </TouchableOpacity>
                            </View>
                        )
                    })}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default LoginActivity;