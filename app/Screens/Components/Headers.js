import React from 'react';
import { useTheme } from '@react-navigation/native';
import { SafeAreaView, ScrollView, TextComponent, View } from 'react-native';
import Header from '../../layout/Header';
import { GlobalStyleSheet } from '../../constants/StyleSheet';
import HeaderStyle1 from '../../components/Headers/HeaderStyle1';
import HeaderStyle2 from '../../components/Headers/HeaderStyle2';
import HeaderStyle3 from '../../components/Headers/HeaderStyle3';

const Headers = (props) => {

    const {colors} = useTheme();

    return (
        <>
            <SafeAreaView style={{flex:1,backgroundColor:colors.card}}>
                <View style={{
                    flex:1,
                    backgroundColor:colors.background,
                }}>
                    <Header title={'Header styles'} bgWhite leftIcon={'back'}/>
                    <ScrollView>
                        <View style={{paddingVertical:30}}>
                            <View style={{marginBottom:25}}>
                                <Header bgWhite title={'Home'} rightIcon={'settings'}/>
                            </View>
                            <View style={{marginBottom:25}}>
                                <HeaderStyle1 title={'Home'}/>
                            </View>
                            <View style={{marginBottom:25}}>
                                <HeaderStyle2 title={'Home'}/>
                            </View>
                            <View style={{marginBottom:25}}>
                                <View
                                    style={{
                                        backgroundColor: colors.card,
                                        shadowColor: "rgba(0,0,0,.6)",
                                        shadowOffset: {
                                            width: 0,
                                            height: 4,
                                        },
                                        shadowOpacity: 0.30,
                                        shadowRadius: 4.65,

                                        elevation: 8,
                                    }}
                                >
                                    <HeaderStyle3/>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </SafeAreaView>
        </>
    );
};


export default Headers;