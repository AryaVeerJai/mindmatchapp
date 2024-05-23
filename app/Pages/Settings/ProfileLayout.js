import React, {useState, useEffect} from 'react';
import { Image, SafeAreaView, ScrollView, TouchableOpacity, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { SvgXml } from 'react-native-svg';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GlobalStyleSheet } from '../../constants/StyleSheet';
import { COLORS, ICONS, IMAGES } from '../../constants/theme';
import Header from '../../layout/Header';

const layoutItem = [
    {
        image : IMAGES.profileLayout1,
        name  : 'profileLayout1',
    },
    {
        image : IMAGES.profileLayout2,
        name  : 'profileLayout2',
    },
    {
        image : IMAGES.profileLayout3,
        name  : 'profileLayout3',
    },
    {
        image : IMAGES.profileLayout4,
        name  : 'profileLayout4',
    },
]

const ProfileLayout = (props) => {
    const {colors} = useTheme();
    const [layout , setLayout] = useState('profileLayout1');

    const handleThemeLayout = async (data) => {
        setLayout(data);
        console.log(data);
        await AsyncStorage.setItem('profileLayout', data);
        //await Auth.setProfileLayout(data);
    }

    useEffect(() => {
        getUser();
    },[])

    const getUser = async () => {
        let data = await AsyncStorage.getItem('profileLayout');
        setLayout(data);
      }

    return (
        <>
            <SafeAreaView style={{flex:1,backgroundColor:colors.background}}>
                <Header title={'Profile Layout'} leftIcon={'back'}/>
                <ScrollView>
                    <View style={GlobalStyleSheet.container}>
                        <View
                            style={{
                                flexDirection:'row',
                                flexWrap:'wrap',
                                marginHorizontal:-5,
                                marginBottom:30,
                            }}
                        >
                            {layoutItem.map((data,index) => (
                                <View key={index} style={{width:'50%',paddingHorizontal:5}}>
                                    <TouchableOpacity
                                        activeOpacity={.7}
                                        onPress={() => handleThemeLayout(data.name)}
                                        style={[{
                                            borderWidth:1,
                                            borderColor:COLORS.borderColor,
                                            borderRadius:6,
                                            marginBottom:10,
                                            overflow:'hidden',
                                            height:220,
                                        },layout == data.name && {
                                            borderColor:COLORS.primary,
                                        }]}
                                    >
                                        {layout == data.name &&
                                            <View
                                                style={{
                                                    position:'absolute',
                                                    zIndex:1,
                                                    height:'100%',
                                                    width:'100%',
                                                    alignItems:'center',
                                                    justifyContent:'center',
                                                    backgroundColor:'rgba(255,255,255,.5)',
                                                }}
                                            >
                                                <View
                                                    style={{
                                                        height:25,
                                                        width:25,
                                                        borderRadius:20,
                                                        alignItems:'center',
                                                        justifyContent:'center',
                                                        backgroundColor:COLORS.primary,
                                                    }}
                                                >
                                                    <SvgXml
                                                        width={18}
                                                        stroke={COLORS.white}
                                                        xml={ICONS.check}
                                                    />
                                                </View>
                                            </View>
                                        }
                                        <Image
                                            style={{
                                                width:'100%',
                                                position:'absolute',
                                                top:0,
                                                height:'100%',
                                                resizeMode:'contain',
                                                borderWidth:1,
                                                borderColor:COLORS.borderColor,
                                            }}
                                            source={data.image}
                                        />
                                    </TouchableOpacity>
                                </View>
                            ))}
                        </View>
                        

                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    );
};


export default ProfileLayout;