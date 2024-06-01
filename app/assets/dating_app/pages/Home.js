import React from 'react';
import { Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { FONTS, IMAGES } from '../constants/theme';
import { GlobalStyleSheet } from '../constants/StyleSheet';
import MainSlider from './components/MainSlider';

const Home = (props) => {

    const {colors} = useTheme();

    return (
        <>
            
            <SafeAreaView
                style={{
                    flex:1,
                    backgroundColor:colors.background2,
                }}
            >
                <View
                    style={{
                        flexDirection:'row',
                        alignItems:'center',
                        paddingHorizontal:15,
                        paddingVertical:10,
                    }}
                >
                    <TouchableOpacity
                        onPress={() => props.navigation.openDrawer()}
                        style={[GlobalStyleSheet.headerBtn,{borderColor:colors.borderColor,}]}
                    >
                        <FeatherIcon color={colors.title} size={22} name={'grid'}/> 
                    </TouchableOpacity>
                    <Text style={{...FONTS.h5,flex:1,textAlign:'center',color:colors.title}}>Home</Text>
                    <TouchableOpacity
                        onPress={() => props.navigation.navigate('DateFilter')}
                        style={[GlobalStyleSheet.headerBtn,{borderColor:colors.borderColor,}]}
                    >
                        <Image
                            style={{
                                height:22,
                                width:22,
                                tintColor:colors.title,
                            }}
                            source={IMAGES.setting2}
                        />
                    </TouchableOpacity>
                </View>
                <MainSlider/>
            </SafeAreaView>
        </>
    );
};

export default Home;